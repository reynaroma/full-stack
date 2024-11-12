"use client";
import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOption({ href, id }: {
  href: string;
  id: string;
}) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  
  return (
    <Link href={href} className={``}>
      <p>{ }</p>
    </Link>
  )
}

export default SidebarOption
