import React from "react";
import AddArticle from "../AddArticle";
import FilteredArticle from "../FilteredArticle";
import ArticlesPage from "../ArticlesPage";
// import TrendingSection from "../TrendingSection";
import AdvertismentSection from "../AdvertismentSection";
import Carousel from "../Carousel";

const PageTemplate = () => {
  return (
    <main className="flex min-h-screen flex-col p-10 gap-4">
      <AddArticle />

      <FilteredArticle />

      <ArticlesPage />

      {/* <TrendingSection /> */}

      <AdvertismentSection />

      <Carousel />
    </main>
  );
};

export default PageTemplate;
