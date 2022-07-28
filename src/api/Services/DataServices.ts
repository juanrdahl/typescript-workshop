import Repository from "../Repository";

export class DataServices {
  public books?: Repository<Book>;
  public authors?: Repository<Author>;

  //** prop to implement singleton pattern */
  private static instance: DataServices;

  /** prop to test the pattern */
  public createdInstanceAt?: Date;

  constructor() {
    if (!DataServices.instance) {
      DataServices.instance = this;
      this.books = new Repository<Book>();
      this.authors = new Repository<Author>();
      this.createdInstanceAt = new Date();
    }
    return DataServices.instance;
  }
}
