import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home page</p>

      <Button>Hello</Button>
      <Button variant={"default"}>Default Button</Button>
      <Button variant={"destructive"}>Destructive Button</Button>
      <Button variant={"ghost"}>Ghost Button</Button>
      <Button variant={"link"}>Link Button</Button>
      <Button variant={"myButton"}>Custom Button</Button>
      <Button variant={"outline"}>Outline Button</Button>
      <Button variant={"secondary"}>Secondary Button</Button>
      <Button variant={"myButton"} size={"lg"}>
        Large Button
      </Button>
      <Button variant={"myButton"} size={"sm"}>
        Small Button
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button size={"icon"}>
        <EnvelopeOpenIcon />
      </Button>
    </main>
  );
}
