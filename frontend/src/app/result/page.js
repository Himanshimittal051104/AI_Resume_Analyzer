"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
    const [result, setResult] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("careerLensResult");

        if (!stored) {
            router.push("/");
            return;
        }

        setResult(JSON.parse(stored));
        setTimeout(() => {
            localStorage.removeItem("careerLensResult");
        }, 0);

    }, []);

    if (!result) return null;

    return (
        <div className="min-h-screen px-24 py-32 text-purple-950">

            <h1 className="text-4xl font-bold mb-12">Analysis Result</h1>

            {/* ATS SCORE */}
            <div className="bg-white rounded-3xl p-10 shadow mb-12 text-center">
                <h2 className="text-2xl font-semibold">ATS Score</h2>
                <p className="text-6xl font-bold text-[rgba(210,232,35,1)] mt-4">
                    {result.ats_score}%
                </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-semibold text-green-600 mb-4">Strengths</h3>
                    <ul className="space-y-2">
                        {result.strengths?.map((x, i) => (
                            <li key={i}>• {x}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-semibold text-red-500 mb-4">Missing Skills</h3>
                    <ul className="space-y-2">
                        {result.missing_skills?.map((x, i) => (
                            <li key={i}>• {x}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="font-semibold text-blue-600 mb-4">Suggestions</h3>
                    <ul className="space-y-2">
                        {result.suggestions?.map((x, i) => (
                            <li key={i}>• {x}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <button
                onClick={() => router.push("/")}
                className="mt-16 bg-purple-900 text-white px-10 py-4 rounded-full font-semibold"
            >
                Analyze Another Resume
            </button>

        </div>
    );
}