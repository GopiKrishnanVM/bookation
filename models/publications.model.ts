import { IAuthor } from "./author.model";
import { IBaseIdModel } from "./common/base-id.model";

export interface IPublicationsModel extends IBaseIdModel {
  name: string;
  price: string;
  author: IAuthor;
  image: string;
}
