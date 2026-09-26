import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0F1115] text-white">
            <section className="mx-auto flex min-h-[70vh] w-full max-w-[1000px] items-center justify-center px-5 py-16 sm:px-8">
                <div className="w-full rounded-[24px] border border-[#2D313B] bg-[#171A21] px-6 py-12 text-center sm:px-10 sm:py-16">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C2F800]">
                        FitLog
                    </p>

                    <h1 className="mt-4 text-6xl font-black tracking-tight text-white sm:text-8xl">
                        404
                    </h1>

                    <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
                        Page Not Found
                    </h2>

                    <p className="mx-auto mt-4 max-w-[500px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
                        The page you're looking for doesn't exist or may have
                        been moved.
                    </p>

                    <Link
                        href="/"
                        className="mt-7 inline-flex rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-black text-black transition hover:bg-[#CCFF00]"
                    >
                        Go to workouts
                    </Link>
                </div>
            </section>
        </main>
    );
}