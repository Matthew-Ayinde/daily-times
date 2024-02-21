import AddArticle from "@/components/AddArticle";
import ArticlesPage from "@/components/ArticlesPage";
import Carousel from "@/components/Carousel";
import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-4">
      <AddArticle />
      
      <ArticlesPage />

      <Carousel />
      {/* <FormComponent /> */}

      {/* <ButtonTemplate /> */}
    </main>
  );
}
