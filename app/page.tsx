import AddArticle from "@/components/AddArticle";
import ArticlesPage from "@/components/ArticlesPage";
import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";
import ContentCard from "@/components/ContentCard";
import CustomContentCard from "@/components/CustomContentCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-4">
      <AddArticle />

      {/* <ArticlesPage /> */}

      <CustomContentCard 
          imageSrc=""
          imageAlt="Image Alt Text"
          width={400}
          height={200}
          category="Category"
          description="Long Heading is what you see here in this feature section and it may exceed one line"
          readMoreLink="/story/123"
      />

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
