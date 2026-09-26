import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#1F232B] bg-[#0C0D10]">
            <div className="mx-auto flex min-h-[72px] w-full max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8 lg:px-12">
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="FitLog Home"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="FitLog logo"
                        width={16}
                        height={16}
                    />

                    <span className="text-xs font-black tracking-[0.12em] text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Copyright */}
                <p className="text-center text-[10px] text-[#6B7280] sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}