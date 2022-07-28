import { DataServices } from "../src/api/Services/DataServices";

describe("Data Service", () => {
  it("test singleton pattern", () => {
    const firstInstance = new DataServices();
    const secondInstance = new DataServices();
    expect(firstInstance.createdInstanceAt).toEqual(
      secondInstance.createdInstanceAt
    );
  });
});
