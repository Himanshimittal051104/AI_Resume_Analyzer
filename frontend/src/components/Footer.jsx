import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
      const router = useRouter();
      const pathname = usePathname();
    
      const scrollToSection = async (id) => {
        if (pathname !== "/") {
          await router.push(`/#${id}`);
          return;
        }
    
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <footer className="bg-slate-900 text-slate-300 px-32 ">
            <div className=" mx-auto px-10 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <Link href="/" className="text-2xl font-bold text-[rgba(210,232,35,1)]">
                        CareerLens
                    </Link>
                    <p className="mt-4 text-sm leading-relaxed">
                        AI-powered resume analysis platform helping you optimize your resume,
                        improve ATS compatibility, and land interviews faster.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li  onClick={() => scrollToSection("analyze")} className="hover:text-white cursor-pointer">Analyze Resume</li>
                        <li  onClick={() => scrollToSection("features")} className="hover:text-white cursor-pointer">Features</li>
                        <li  onClick={() => scrollToSection("faq")} className="hover:text-white cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-white ">About</Link></li>
                        <li><Link href="/" className="hover:text-white ">Home</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Connect</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="https://github.com/Himanshimittal051104"
                                target="_blank"
                                className="hover:text-white"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:mittalh363@gmail.com"
                                className="hover:text-white"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 py-6 text-center text-sm">
                © {new Date().getFullYear()} CareerLens. All rights reserved.
            </div>
        </footer>
    );
}