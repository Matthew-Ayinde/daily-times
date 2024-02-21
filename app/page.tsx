import AddArticle from "@/components/AddArticle";
import ArticlesPage from "@/components/ArticlesPage";
import Carousel from "@/components/Carousel";
import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";
import ContentCard from "@/components/ContentCard";
import CustomContentCard from "@/components/CustomContentCard";
import AdvertismentSection from "@/components/AdvertismentSection";
import TrendingSection from "@/components/TrendingSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 gap-4">
      <AddArticle />

      <TrendingSection />

      {/* <ArticlesPage /> */}

      {/* <AdvertismentSection /> */}

      {/* <ContentCard 
      imageSrc=""
      altText="Image Alt Text"
      category="Category"
      description="Long Heading is what you see here in this feature section"
      readMoreLink="/story/123"
      /> */}

      <Carousel />

      {/* <FormComponent /> */}

      {/* <ButtonTemplate /> */}
    </main>
  );
}
