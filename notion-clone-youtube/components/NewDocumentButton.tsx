"use client";

import { Button } from "./ui/button";

const handleCreateNewDocument = () => {
  console.log("Create new document");
}

function NewDocumentButton() {
  return (
    <Button onClick={handleCreateNewDocument}>
      New Document
    </Button>
  )
}

export default NewDocumentButton
