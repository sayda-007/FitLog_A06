import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[28px] border border-[#1F232B] bg-[#15171D]">
        <div className="grid min-h-[430px] grid-cols-1 items-center lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}
          <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#C2F800]">
              Workout Library
            </p>

            <h1 className="max-w-[680px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Train With Intent. Log Every Set.
            </h1>

            <p className="mt-6 max-w-[620px] text-sm leading-7 text-[#9CA3AF] sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <a
              href="#library"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C2F800] px-5 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#CCFF00]"
            >
              <span>Browse Workouts</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 8H12M8.5 4.5L12 8L8.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex h-full min-h-[300px] items-center justify-center px-6 pb-8 pt-2 sm:px-10 lg:min-h-[430px] lg:px-8 lg:py-8">
            <Image
              src="/assets/banner.png"
              alt="Workout illustration"
              width={334}
              height={334}
              priority
              className="h-auto w-[240px] sm:w-[280px] lg:w-[334px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}