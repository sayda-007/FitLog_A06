import { getWorkouts } from "../lib/api";
import Hero from "../components/Hero";
import WorkoutGrid from "../components/WorkoutGrid";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0C0D10] text-white">
      <Hero />

      <section
        id="library"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2F800]">
            Workout Collection
          </p>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                The Library
              </h2>

              <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
                Twelve lifts covering every major muscle group.
              </p>
            </div>
          </div>
        </div>

        <WorkoutGrid workouts={workouts} />
      </section>
    </main>
  );
}