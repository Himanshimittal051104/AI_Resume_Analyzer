"use client";
import UploadForm from "../components/UploadForm";
import Link from "next/link";
import Card from "@/components/Card";
import Questions from "@/components/Questions";
import About from "@/components/About";
export default function Home() {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};  
  return (
    <main className=" ">
      <div className="flex items-center gap-16 px-32 h-[100vh]">
        {/* left */}
        <div className=" text-purple-950 flex-1 h-[40vh]">
          <h1 className="font-bold text-5xl my-6">Optimize Your Resume. Land Better Interviews.</h1>
          <p className="mb-8 leading-relaxed">Upload your resume and job description to get an instant ATS score, skill gap analysis,
            and AI-powered suggestions to improve your chances of getting shortlisted.</p>
          <button className="rounded-full p-4 bg-purple-950 text-white text-lg font-semibold cursor-pointer" onClick={() => scrollToSection("analyze")}>Get Started for free</button>
        </div>

        {/* right */}
        <div className=" text-black flex-1 h-[60vh] ">
        </div>
      </div>
      <div className="bg-purple-950  min-h-screen text-[rgba(210,232,35,1)] flex items-center gap-16 px-32 " id="analyze">
        <div className=" flex-1 h-[60vh]"></div>
        <div className="flex-1 h-[40vh]">
          <h1 className="font-bold text-5xl my-4">Is Your Resume Job Ready ?</h1>
          
          <div className="border border-dashed p-4 py-6"><UploadForm/></div>
        </div>
      </div>
      <div id="features"><Card /></div>
      <About/>
      <div id="faq"><Questions/></div>
    </main>
  );
}