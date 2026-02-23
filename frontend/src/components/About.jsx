import Link from "next/link";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-32 text-[rgba(210,232,35,1)] scroll-mt-32 bg-[#254F1A] flex gap-16 min-h-screen  items-center"
    >
        <div className="flex-1 mt-16">
      <h2 className="text-5xl font-bold mb-6">
        About CareerLens
      </h2>

      <p className="max-w-3xl text-md leading-relaxed mb-6">
        CareerLens is an AI-powered resume analysis platform designed to help job seekers
        optimize their resumes for modern hiring systems. By comparing your resume with
        real job descriptions, CareerLens provides ATS scoring, skill gap insights, and
        actionable recommendations.
      </p>

      <p className="max-w-3xl text-md leading-relaxed mb-8">
        Built as a full-stack project using Next.js and FastAPI, CareerLens focuses on
        delivering practical feedback that helps candidates improve their chances of
        getting shortlisted.
      </p>

      <Link
        href="/about"
        className="text-slate-900 bg-[rgba(210,232,35,1)] text-lg p-4 rounded-full font-semibold"
      >
        Learn more about CareerLens
      </Link>
      </div>
      <div className="flex-1"></div>
    </section>
  );
}