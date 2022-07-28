import { RepositoryError } from "./Repository.error";

class Repository<T = CommonJSON> {
  /**
   * Represents a table in db to simplify example
   */
  private db: T[];

  constructor() {
    this.db = [];
  }

  /**
   * Find the first element which matches with the param
   * @param where implementation with CommonJSON
   * @returns T | undefined
   */
  public findOne = (where: CommonJSON): T | undefined => {
    return this.db.find((item: T) => {
      return Object.entries(where).every(
        ([key, value]) => item[key as keyof T] === value
      );
    });
  };

  /**
   * Find all the elements which match with the param
   * @param where implementation with generics types
   * @returns T[]
   */
  public findAll = (where: TWhere<T>): T[] => {
    return this.db.filter((item: T) => {
      return Object.entries(where).every(
        ([key, value]) => item[key as keyof T] === value
      );
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
   * Edit some props in a model T if it is already storaged.
   * The id is needed in the param
   * @param model
   * @returs void
   */
  public updateById = (model: TUpdate<T>): void => {
    const item = this.findOne({ id: model.id });
    if (!item) {
      throw new Error(RepositoryError.NOT_FOUND);
    }

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

    this.deleteById(model.id);
    this.create(newItem);
  };

  /**
   * Edit some props in a model if it is not already storaged
   * @param modelId uuid
   * @returs
   */
  public deleteById = (modelId: string) => {
    const foundIndex = this.db.findIndex(
      (item: CommonJSON) => item.id === modelId
    );
    if (foundIndex === -1) {
      throw new Error(RepositoryError.NOT_FOUND);
    }

    this.db.splice(foundIndex, 1);
  };
}

export default Repository;
