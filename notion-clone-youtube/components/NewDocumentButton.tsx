"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";

function NewDocumentButton() {

  const [isPending, startTransition] = useTransition();
  const handleCreateNewDocument = () => {
    console.log("Create new document");
  };

  return (
    <Button onClick={handleCreateNewDocument}>
      New Document
    </Button>
  )
}

export default NewDocumentButton
