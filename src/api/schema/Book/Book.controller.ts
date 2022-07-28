import { dataServices } from "~/api/Services";

class BookController {
  public getBooks = () => {
    dataServices.books?.findAll({ id: "1" });
  };

  public getBookById = () => {
    dataServices.books?.findOne({ id: "1" });
  };
}

export default BookController;
