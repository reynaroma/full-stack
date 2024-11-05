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
import { useUser } from "@clerk/nextjs";

// components
import NewDocumentButton from "./NewDocumentButton";
import { collectionGroup, doc, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect } from "react";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

function Sidebar() {
  const { user } = useUser();
  const [data, loading, error] = useCollection(
    user && (
      query(
        collectionGroup(db, 'rooms'),
        where('userId', '==', 'user.emailAddresses[0].toString()'))
    )
  );

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce()
  }, [data]);

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
