import { getWorkouts } from "../lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <h1>FitLog</h1>

      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </main>
  );
}