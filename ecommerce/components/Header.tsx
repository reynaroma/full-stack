"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {

  const { user } = useUser(); // Get the user object from the hook if the user is logged in or null if not

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
  
    </header>
  )
}

export default Header
