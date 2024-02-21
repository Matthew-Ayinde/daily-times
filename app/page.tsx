import AddArticle from "@/components/AddArticle";
import ArticlesPage from "@/components/ArticlesPage";
import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";
import ContentCard from "@/components/ContentCard";
import CustomContentCard from "@/components/CustomContentCard";
import AdvertismentSection from "@/components/AdvertismentSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-4">
      <AddArticle />

      {/* <ArticlesPage /> */}

      <AdvertismentSection />

      {/* <ContentCard 
      imageSrc=""
      altText="Image Alt Text"
      category="Category"
      description="Long Heading is what you see here in this feature section"
      readMoreLink="/story/123"
      /> */}

      {/* <FormComponent /> */}

      {/* <ButtonTemplate /> */}
    </main>
  );
}
