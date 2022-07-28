import { dataServices } from "../src/api/Services";
// Mocks
import { bookMocks } from "./Book.mocks";

describe("Book", () => {
  it("create and find one", () => {
    dataServices.books?.create(bookMocks[0]);

    const bookAdded = dataServices.books?.findOne({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
      title: "Harry Potter and the Philosopher's Stone",
    });

    const expectedTitle = "Harry Potter and the Philosopher's Stone";
    expect(bookAdded?.title).toEqual(expectedTitle);
  });

  it("create and find all", () => {
    dataServices.books?.create(bookMocks[0]);

    const books = dataServices.books?.findAll({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
    });

    expect(books?.length).toEqual(2);
  });
  it("delete by id", () => {
    dataServices.books?.deleteById("af9ef27a-2780-419d-b25b-5db57a559c50");

    const books = dataServices.books?.findAll({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
    });

    expect(books?.length).toEqual(1);
  });
  it("update by id", () => {
    const newTitle = "Harry Potter";

    dataServices.books?.updateById({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
      title: newTitle,
    });

    const bookUpdated = dataServices.books?.findOne({
      id: "af9ef27a-2780-419d-b25b-5db57a559c50",
    });

    expect(bookUpdated?.title).toEqual(newTitle);
  });
});
