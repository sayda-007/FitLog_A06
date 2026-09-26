import Image from "next/image";
import Link from "next/link";

function ClockIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5V12L15 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 3.5C14 6.5 11.5 8 11.5 10.5C11.5 12 12.3 13 13.4 13.8C14.1 12.9 14.5 11.8 14.4 10.5C17.3 12.6 19 15 19 17.2C19 20.5 16.1 22.5 12 22.5C7.9 22.5 5 20 5 16.4C5 12.8 7.2 10.3 10.2 7.6C10.1 10.3 10.9 11.9 12.2 12.6C11.9 9.3 13.3 6.8 13.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3.8L14.5 8.9L20.2 9.7L16.1 13.7L17.1 19.4L12 16.7L6.9 19.4L7.9 13.7L3.8 9.7L9.5 8.9L12 3.8Z" />
    </svg>
  );
}

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#2D313B] bg-[#1B1F28] transition duration-200 hover:-translate-y-1 hover:border-[#C2F800]">
        {/* Image */}
        <div className="relative aspect-[1.25/1] overflow-hidden bg-[#15171D]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#1A2312] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#C2F800]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-black uppercase leading-tight text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-[#9CA3AF]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <ClockIcon />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <FlameIcon />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <StarIcon />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}