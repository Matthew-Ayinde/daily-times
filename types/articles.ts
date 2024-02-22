import { IMeta } from ".";
import { IContentCreatorData } from "./contentCreators";
import { ITag } from "./tags";

export interface IArticleRoot {
  data: IArticle[];
  meta: IMeta;
}

export interface IArticle {
  id: number;
  attributes: IAttributes;
}

export interface TagAtrrib {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Tags {
  id: number;
  attributes: TagAtrrib;
}

export interface TagsData {
  data: Tags[];
}

export interface IAttributes {
  Title: string;
  Details: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  MediaFiles: IArticleMediaFiles;
  content_creator: IArticleContentCreator;
  tags: TagsData;
}

export interface IArticleMediaFiles {
  data: IArticleMediaData[];
}

export interface IArticleMediaData {
  id: number;
  attributes: IArticleMediaAttributes;
}

export interface IArticleMediaAttributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: any;
  height: any;
  formats: IArticleMediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface IArticleMediaFormats {
  small: IArticleFormatSmall;
  thumbnail: IArticleFormatThumbnail;
}

export interface IArticleFormatSmall {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface IArticleFormatThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface IArticleContentCreator {
  data: IContentCreatorData;
}

export interface IArticleTags {
  data: ITag[];
}
