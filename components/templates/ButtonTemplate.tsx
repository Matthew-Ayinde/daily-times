import React from "react";
import { Button } from "../ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

const ButtonTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-1">
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
    </div>
  );
};

export default ButtonTemplate;
