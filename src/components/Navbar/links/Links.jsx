"use client";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links =({session}) => {
  const [open, setOpen] = useState(false);

  
  const isAdmin = true;

  return (
    <>
      <div className="hidden md:flex justify-between items-center mx-40 hover:text-red-600">
        {links.map((link) => (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <Link href="/admin">Admin</Link>}
            <button className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              LogOut
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
      <button
        className="md:hidden bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 right-0 mt-4 mr-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className="flex flex-col justify-between mx-40 hover:text-red-600 md:hidden">
          {links.map((link) => (
            <Link href={link.path} key={link.title}>
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && <Link href="/admin">Admin</Link>}
              <form action={handleLogout}>
                <button className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  LogOut
                </button>
              </form>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default Links;
