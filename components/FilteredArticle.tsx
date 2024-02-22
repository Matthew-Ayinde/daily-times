"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";

interface MediaFile {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
}

interface ContentCreator {
  data: {
    id: number;
    attributes: {
      first_name: string;
      last_name: string;
      email: string;
      phone_number: string;
      extra_information: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Tag {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Attribute {
  Title: string;
  Details: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  MediaFiles: {
    data: MediaFile[];
  };
  content_creator: ContentCreator;
  tags: {
    data: Tag[];
  };
}

interface Data {
  id: number;
  attributes: Attribute;
}

interface ResponseData {
  data: Data[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const fetchData = async (): Promise<ResponseData> => {
  const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);

  console.log(response.data);

  return response.data;
};

const filterDataByTagName = (data: Data[], tagName: string): Data[] => {
  return data.filter((item) =>
    item.attributes.tags.data.some((tag) => tag.attributes.name === tagName)
  );
};

const FilteredArticle = () => {
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData()
      .then((responseData: ResponseData) => {
        const filteredData = filterDataByTagName(responseData.data, "Trending");
        setFilteredData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* Render filtered data */}
      {filteredData.map((item) => (
        <div key={item.id}>
          <h2>{item.attributes.Title}</h2>
          <p>{item.attributes.Details}</p>
          {/* Render other details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FilteredArticle;
