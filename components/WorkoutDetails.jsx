import Image from "next/image";

export default function WorkoutDetails({ workout }) {
  return (
    <main className="min-h-screen bg-[#0F1115] text-white">
      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Workout Image */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] border border-[#2D313B] bg-[#151922] sm:min-h-[500px] lg:min-h-[700px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Workout Information */}
          <div className="rounded-[24px] border border-[#2D313B] bg-[#171A21] p-6 sm:p-8 lg:p-10">
            {/* Category Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#1A2312] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#C2F800]"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#9CA3AF] sm:text-base">
              {workout.description}
            </p>

            {/* Key Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#2D313B] bg-[#151922]">
              <SpecRow label="Equipment" value={workout.equipment} />
              <SpecRow label="Difficulty" value={workout.difficulty} />
              <SpecRow label="Sets" value={workout.sets} />
              <SpecRow label="Reps" value={workout.reps} />
              <SpecRow label="Duration" value={`${workout.duration} min`} />
              <SpecRow
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />
              <SpecRow label="Rating" value={workout.rating} />
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-white">
                Instructions
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li key={instruction} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F232B] text-xs font-bold text-[#C2F800]">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-[#D1D5DB]">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3.5 text-sm font-black text-black transition hover:bg-[#CCFF00]"
              >
                <PlusIcon />
                Add to today's plan
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#374151] px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#C2F800]"
              >
                <BookmarkIcon />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#2D313B] px-4 py-3.5 last:border-b-0 sm:px-5">
      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A92A0]">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-[#E5E7EB]">
        {value}
      </span>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 5.5C6.5 4.4 7.4 3.5 8.5 3.5H15.5C16.6 3.5 17.5 4.4 17.5 5.5V20L12 16.5L6.5 20V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}