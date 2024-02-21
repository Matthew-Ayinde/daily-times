import { IMeta } from ".";

export interface Root {
  data: ITag[];
  meta: IMeta;
}

export interface ITag {
  id: number;
  attributes: ITagAttributes;
}

export interface ITagAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
