"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { IArticle, IArticleRoot } from "@/types/articles";
import { BASE_URL } from "@/lib/constants";

const ArticlesPage = () => {
  const [data, setData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<IArticleRoot>(
          `${BASE_URL}/api/articles?populate=*#`
        );

        const { data, meta } = response.data;
        console.log(data);
        setData(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      ArticlesPage
      <div>
        <h1>Data Page</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticlesPage;
