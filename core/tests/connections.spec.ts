import { createTestDb, dog, owner } from "./utils";

describe("clientdb query", () => {
  function getTestDb() {
    const db = createTestDb();

    const adam = db.entity(owner).create({ name: "Adam" });
    const omar = db.entity(owner).create({ name: "Omar" });

    const adams_rex = db.entity(dog).create({ name: "rex", owner_id: adam.id });
    const adams_teddy = db
      .entity(dog)
      .create({ name: "teddy", owner_id: adam.id });

    const omars_rudy = db
      .entity(dog)
      .create({ name: "rudy", owner_id: omar.id });
    const omars_rex = db.entity(dog).create({ name: "rex", owner_id: omar.id });

    return [
      db,
      {
        owners: { adam, omar },
        dogs: { adams_rex, adams_teddy, omars_rudy, omars_rex },
      },
    ] as const;
  }

  it("resolves relation", () => {
    const [db, data] = getTestDb();

    expect(data.dogs.adams_rex.owner).toBe(data.owners.adam);
    const adamsDogs = data.owners.adam.dogs.all;

    expect(adamsDogs).toContain(data.dogs.adams_rex);
    expect(adamsDogs).toContain(data.dogs.adams_teddy);
    expect(adamsDogs).toHaveLength(2);

    db.destroy();
  });

  it("resolves relation after updates", () => {
    const [db, data] = getTestDb();

    const adamsDogs = data.owners.adam.dogs;

    expect(adamsDogs.all).toHaveLength(2);

    data.dogs.omars_rex.update({ owner_id: data.owners.adam.id });

    expect(adamsDogs.all).toHaveLength(3);
    expect(adamsDogs.all).toContain(data.dogs.omars_rex);

    db.destroy();
  });
});
