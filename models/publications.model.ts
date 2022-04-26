import { IAuthor } from "./author.model";
import { IBaseIdModel } from "./common/base-id.model";

export interface IPublicationsModel extends IBaseIdModel {
  name: string;
  price: string;
  author: IAuthor;
  imageSrc: string;
  imageAlt: string;
  slug: string;

  description: string;
  providers: Array<IBookProviders>;
}
export interface IBookProviders {
  name: string;
  description: string;
  links: Array<{ title: string; link: string }>;
}
