"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import { useCollection } from "react-firebase-hooks/firestore";

// components
import NewDocumentButton from "./NewDocumentButton";

function Sidebar() {

  const [data, loading, error] = useCollection();

  const menuOptions = (
    <>
      <NewDocumentButton />
      {/* Documents */}
      {/* List */}

      {/* Shared with me */}
      {/* List */}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>
                {menuOptions}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        {menuOptions}
      </div>
    </div>
  )
}

export default Sidebar
