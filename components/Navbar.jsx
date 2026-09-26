"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="border-b border-[#2D313B] bg-[#0C0D10]">
      <nav className="mx-auto flex min-h-[72px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="FitLog Home"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
            priority
          />

          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              isHome
                ? "bg-[#1B1F28] text-white"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              isMyPlan
                ? "bg-[#1B1F28] text-white"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#C2F800] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#CCFF00]"
          >
            <span>Plan</span>
            <span>0</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#374151] px-3 py-2 text-xs font-bold text-white transition hover:border-[#C2F800]"
          >
            <span>Saved</span>
            <span>0</span>
          </Link>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="border-t border-[#2D313B] px-5 py-2 md:hidden">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-2">
          <Link
            href="/"
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              isHome
                ? "bg-[#1B1F28] text-white"
                : "text-[#9CA3AF]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              isMyPlan
                ? "bg-[#1B1F28] text-white"
                : "text-[#9CA3AF]"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}