import Repository from "../Repository";

export class DataServices {
  public books?: Repository<Book>;
  public authors?: Repository<Author>;
  private static instance: DataServices;

  constructor() {
    if (!DataServices.instance) {
      DataServices.instance = this;
      this.books = new Repository<Book>();
      this.authors = new Repository<Author>();
    }
    return DataServices.instance;
  }
}
