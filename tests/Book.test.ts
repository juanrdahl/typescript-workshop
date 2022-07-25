import { dataServices } from "../src/api/Services";
// Mocks
import { bookMocks } from "./Book.mocks";

describe("Book", () => {
  it("create", () => {
    dataServices.books?.create(bookMocks[0]);

    const bookAdded = dataServices.books?.findOne({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
    });

    const expectedTitle = "Harry Potter and the Philosopher's Stone";
    expect(bookAdded?.title).toEqual(expectedTitle);
  });

  it("create", () => {
    dataServices.books?.create(bookMocks[0]);

    const books = dataServices.books?.findAll({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
    });

    expect(books?.length).toEqual(2);
  });
});
