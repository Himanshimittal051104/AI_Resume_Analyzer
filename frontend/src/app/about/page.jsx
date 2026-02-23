import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen px-32 py-32 text-purple-950">

      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-6 text-center">About CareerLens</h1>

        <p className="text-lg text-center font-semibold mx-auto w-[60vw]">
          CareerLens is an AI-powered resume analysis platform designed to help job
          seekers understand how well their resume matches a job description and
          receive actionable improvement suggestions.
        </p>
      </section>

      {/* Mission */}
      <section className="grid grid-cols-2 gap-20 mb-20">

        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We aim to simplify the job application process by providing instant,
            intelligent feedback on resumes. CareerLens helps candidates highlight
            their strengths, identify missing skills, and optimize their resumes for
            better hiring outcomes.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Why CareerLens?</h3>

          <ul className="space-y-3 text-lg list-disc ml-5">
            <li>ATS-style resume matching</li>
            <li>AI-driven skill gap analysis</li>
            <li>Clear improvement suggestions</li>
            <li>Fast & simple user experience</li>
          </ul>
        </div>

      </section>

      {/* How it works */}
      <section className="mb-32">

        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-semibold text-xl mb-3">Upload Resume</h3>
            <p>
              Upload your PDF resume directly into CareerLens.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-semibold text-xl mb-3">Paste Job Description</h3>
            <p>
              Provide the job description you’re applying for.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-semibold text-xl mb-3">Get AI Insights</h3>
            <p>
              Receive ATS score, missing skills, strengths, and improvement tips.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-purple-950 text-white rounded-3xl py-20">

        <h2 className="text-4xl font-bold mb-6">
          Ready to improve your resume?
        </h2>

        <p className="text-lg mb-10">
          Start analyzing your resume with CareerLens today.
        </p>

        <Link href="/#analyze" className="inline-block bg-[rgba(210,232,35,1)] text-purple-950 px-10 py-4 rounded-full font-semibold text-lg "
        >Analyze Resume
        </Link>

      </section>

    </div>
  );
}