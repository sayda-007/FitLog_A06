import { notFound } from "next/navigation";
import { getWorkoutById } from "../../../lib/api";
import WorkoutDetails from "../../../components/WorkoutDetails";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}