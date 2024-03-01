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

export interface IAttributes {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: IArticleCategory;
  content: string;
  media_files: IArticleMediaFiles;
  content_creator: IArticleContentCreator;
  tags: TagsData;
}

export interface IArticleCategory {
  data: IArticleCategoryData;
}

export interface IArticleCategoryData {
  id: number;
  attributes: IArticleCategoryAttributes;
}

export interface IArticleCategoryAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TagsData {
  data: ITag[];
}

export interface IArticleMediaFiles {
  data: IArticleMediaData;
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
  small?: Small;
  medium?: Medium;
  thumbnail: Thumbnail;
  large?: Large;
}

export interface Small {
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

export interface Medium {
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

export interface Thumbnail {
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

export interface Large {
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

export interface MediaData {
  id: number;
  attributes: IArticleMediaAttributes;
}

export interface ILink {
  data: MediaData;
}

export interface IAttributesVideo {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  likes: number;
  dislikes: number;
  link: ILink;
}

export interface IVideo {
  id: number;
  attributes: IAttributesVideo;
}
