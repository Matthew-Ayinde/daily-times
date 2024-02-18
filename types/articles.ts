export interface IArticleRoot {
  data: IArticle[];
  meta: IArticleMeta;
}

export interface IArticle {
  id: number;
  attributes: IAttributes;
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
  formats: any;
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

export interface IArticleContentCreator {
  data?: IArticleContentCreatorData;
}

export interface IArticleContentCreatorData {
  id: number;
  attributes: IArticleContentCreatorAttributes;
}

export interface IArticleContentCreatorAttributes {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  extra_information: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IArticleMeta {
  pagination: IArticlePagination;
}

export interface IArticlePagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
