export interface IArticleRoot {
  data: IArticle[];
  meta: Meta;
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
  MediaFiles: MediaFiles;
  content_creator: ContentCreator;
}

export interface MediaFiles {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
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

export interface ContentCreator {
  data?: Data;
}

export interface Data {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  extra_information: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
