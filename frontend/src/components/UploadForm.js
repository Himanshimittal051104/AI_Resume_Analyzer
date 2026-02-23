"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
export default function UploadForm() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !job) {
      alert("Upload resume and enter job description");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", job);

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      localStorage.setItem("careerLensResult", JSON.stringify(data));
      router.push("/result");
    } catch (err) {
      alert("Backend not running");
    }

    setLoading(false);
  };

  return (
    <div className="">

      <form onSubmit={handleSubmit} >

        <p className="font-semibold mb-4">Upload your resume (PDF only, max 5MB)</p>

        <textarea
          placeholder="Paste Job Description..."
          className="w-full border outline-none focus:outline-none focus:ring-0 p-3 placeholder-[rgba(210,232,35,1)] scrollbar-hide overflow-y-scroll mb-4 "
          rows={1}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <div className="mb-4 flex items-center gap-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              if (file.size > 5 * 1024 * 1024) {
                alert("File must be less than 5MB");
                e.target.value = "";
                return;
              }

              setFile(file);
            }}
            className=" cursor-pointer file:bg-[rgba(210,232,35,1)]  file:text-slate-900 file:p-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:cursor-pointer outline-none text-transparent file:w-[12vw] w-[12vw]"
          />
          {file && (
            <div className="text-sm bg-[rgba(210,232,35,1)] truncate flex gap-1 text-slate-900 p-4 rounded-full">
              <span>{file.name}</span>
              <img src="/cancel.svg" alt="cancel" className="-mt-1" onClick={() => {
                setFile(null);
                fileInputRef.current.value = null;
              }} />
            </div>

          )}
        </div>
        <button
          className="bg-[rgba(210,232,35,1)] rounded-full p-4  text-slate-900 font-semibold text-lg w-[12vw] cursor-pointer"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume "}
        </button>
      </form>


    </div>
  );
}