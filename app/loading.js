export default function Loading() {
    return (
        <main className="min-h-screen bg-[#0C0D10] text-white">
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-5">
                <div
                    className="h-10 w-10 animate-spin rounded-full border-4 border-[#2D313B] border-t-[#C2F800]"
                    aria-hidden="true"
                />

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#9CA3AF]">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
}