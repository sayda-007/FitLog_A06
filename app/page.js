import { getWorkouts } from "../lib/api";
import Hero from "../components/Hero";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0C0D10] text-white">
      <Hero />

      <section
        id="library"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12"
      >
        <h2 className="mb-6 text-3xl font-bold">The Library</h2>

        <ul className="space-y-2">
          {workouts.map((workout) => (
            <li key={workout.id}>{workout.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}