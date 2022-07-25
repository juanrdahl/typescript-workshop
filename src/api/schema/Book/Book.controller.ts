import { dataServices } from "~/api/Services";

class BookController {
  public getBooks = () => {
    // BookModel.findAll({ id2: "2" });
  };

  public getBookById = (input: any) => {
    dataServices.books?.findAll({ id: input.id });
  };
}

export default BookController;
