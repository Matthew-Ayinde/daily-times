import FormComponent from "@/components/FormComponent";
import ButtonTemplate from "@/components/templates/ButtonTemplate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-4">
      <h1>Home page</h1>

      <FormComponent />

      {/* <ButtonTemplate /> */}
    </main>
  );
}
