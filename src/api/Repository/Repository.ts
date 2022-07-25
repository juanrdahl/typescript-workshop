import { RepositoryError } from "./Repository.error";

class Repository<T extends CommonJSON> {
  /**
   * Represents a table in db to simplify example
   */
  private db: T[];

  constructor() {
    this.db = [];
  }

  public findOne = (where: CommonJSON): T | undefined => {
    return this.db.find((item: T) => {
      return Object.entries(where).every(([key, value]) => item[key] === value);
    });
  };

  public findAll = (where: TWhere<T>): T[] => {
    return this.db.filter((item: T) => {
      return Object.entries(where).every(([key, value]) => item[key] === value);
    });
  };

  /**
   * Create a new item and storage it on the db
   * @param model new model storaged
   * @returs void
   */
  public create = (model: T) => {
    this.db.push(model);
  };

  /**
   * Edit some props in a book if it is not already storaged
   * @param book new book posted
   * @returs
   */
  public updateById = (model: TUpdate<T>) => {
    const item = this.findOne({ id: model.id });
    if (!item) {
      throw new Error(RepositoryError.NOT_FOUND);
    }
    this.deleteById(model.id);

    const changes = Object.entries(model).reduce(
      (acc: TUpdate<T>, [key, value]) => {
        if (value) {
          return { ...acc, [key as keyof T]: value };
        }
        return acc;
      },
      {} as TUpdate<T>
    );
    const newItem = { ...item, ...changes };

    this.db.push(newItem);
  };

  /**
   * Edit some props in a book if it is not already storaged
   * @param book new book posted
   * @returs
   */
  public deleteById = (modelId: string) => {
    const foundIndex = this.db.findIndex((item) => item.id === modelId);
    if (foundIndex === -1) {
      throw new Error(RepositoryError.NOT_FOUND);
    }

    this.db = [...this.db.slice(foundIndex)];
  };
}

export default Repository;
