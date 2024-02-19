import AddArticle from "@/components/AddArticle";
import ArticlesPage from "@/components/ArticlesPage";
import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-4">
      <AddArticle />

      <ArticlesPage />

      {/* <FormComponent /> */}

      {/* <ButtonTemplate /> */}
    </main>
  );
}
