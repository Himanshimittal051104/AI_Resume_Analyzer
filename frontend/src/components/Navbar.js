"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="bg-white h-20 rounded-full flex items-center justify-between px-10 mx-20 sticky top-16 z-10 ">
      <div className="flex gap-4 items-center ">
      <Link href='/' className="text-emerald-700 font-bold text-3xl  text-center">CareerLens</Link>
      <Link href='/'><img src="/logo.png" alt="logo" width="200" height="150" className="-ml-12" ></img></Link>
      </div>
      <div className="flex items-center gap-5 text-purple-950">
        <div className=" font-semibold text-xl cursor-pointer" onClick={() => scrollToSection("analyze")}>Analyze</div>
        <Link href="/about" className="  font-semibold text-xl cursor-pointer" >About</Link>
        <div className="bg-purple-950 p-4 text-xl rounded-full text-white  font-semibold ">
          {session ? (
            <button onClick={() => signOut()} className="cursor-pointer">Log Out</button>
          ) : (
            <button onClick={() => signIn("google")} className="cursor-pointer">Log In</button>
          )}
        </div>
      </div>
    </nav>
  );
}