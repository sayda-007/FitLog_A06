"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "../context/FitLogContext";

export default function PlanCard({ workout, isSaved = false }) {
  const { removeFromPlan, removeFromSaved, markAsDone } = useFitLog();

  const handleRemove = () => {
    if (isSaved) {
      removeFromSaved(workout.id);
    } else {
      removeFromPlan(workout.id);
    }
  };

  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl border border-[#2D313B] bg-[#1B1F28] p-4 sm:flex-row sm:items-center ${
        workout.done ? "opacity-60" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#151922] sm:h-24 sm:w-32">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 639px) 100vw, 128px"
          className="object-cover"
        />
      </div>

      {/* Main Info */}
      <div className="min-w-0 flex-1">
        <h3
          className={`text-lg font-black uppercase leading-tight text-white ${
            workout.done ? "line-through" : ""
          }`}
        >
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-[#9CA3AF]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#9CA3AF]">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-lg border border-[#374151] px-3 py-2 text-xs font-bold text-white transition hover:border-[#C2F800]"
        >
          View Details
        </Link>

        {!isSaved && (
          <button
            type="button"
            onClick={() => markAsDone(workout.id)}
            className="rounded-lg bg-[#C2F800] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#CCFF00]"
          >
            {workout.done ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          className="rounded-lg border border-[#374151] px-3 py-2 text-xs font-bold text-[#D1D5DB] transition hover:border-red-400 hover:text-red-300"
          aria-label={`Remove ${workout.name}`}
        >
          ×
        </button>
      </div>
    </article>
  );
}