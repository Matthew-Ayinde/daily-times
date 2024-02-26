import { IMeta } from ".";

export interface IContentCreatorRoot {
  data: IContentCreatorData[];
  meta: IMeta;
}

export interface IContentCreatorData {
  id: number;
  attributes: IContentCreatorAttributes;
}

export interface IContentCreatorAttributes {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  extra_information: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
