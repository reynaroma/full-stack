"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from 'next/form';
function Header() {

  const { user } = useUser(); // Get the user object from the hook if the user is logged in or null if not

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Shopr
        </Link>
        <Form
          action="/search"
          className="wfull sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text" name="query" placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl" />
        </Form>
      </div>
    </header>
  )
}

export default Header
