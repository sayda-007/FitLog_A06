"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useFitLog } from "../context/FitLogContext";
import PlanCard from "./PlanCard";

export default function MyPlan() {
    const { plan, saved } = useFitLog();
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");

    const currentList = activeTab === "plan" ? plan : saved;

    const sortedList = useMemo(() => {
        return [...currentList].sort((a, b) => {
            if (sortBy === "calories") {
                return b.caloriesBurned - a.caloriesBurned;
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return a.duration - b.duration;
        });
    }, [currentList, sortBy]);

    const metrics = useMemo(() => {
        return plan.reduce(
            (total, workout) => {
                total.exercises += 1;
                total.minutes += workout.duration;
                total.calories += workout.caloriesBurned;

                return total;
            },
            {
                exercises: 0,
                minutes: 0,
                calories: 0,
            }
        );
    }, [plan]);

    return (
        <main className="min-h-screen bg-[#0F1115] text-white">
            <section className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2F800]">
                        Workout Log
                    </p>

                    <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                        My Plan
                    </h1>

                    <p className="mt-3 max-w-[600px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid gap-3 sm:grid-cols-3">
                    <MetricCard
                        label="Exercises"
                        value={metrics.exercises}
                    />

                    <MetricCard
                        label="Minutes"
                        value={metrics.minutes}
                    />

                    <MetricCard
                        label="Calories"
                        value={metrics.calories}
                    />
                </div>

                {/* Tabs + Sort */}
                <div className="mt-8 flex flex-col gap-4 border-b border-[#2D313B] pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${activeTab === "plan"
                                    ? "bg-[#C2F800] text-black"
                                    : "text-[#9CA3AF] hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${activeTab === "saved"
                                    ? "bg-[#C2F800] text-black"
                                    : "text-[#9CA3AF] hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <label className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                        <span>Sort By</span>

                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            className="rounded-lg border border-[#374151] bg-[#171A21] px-3 py-2 text-sm font-medium text-white outline-none focus:border-[#C2F800]"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </label>
                </div>

                {/* Workout List */}
                <div className="mt-6">
                    {sortedList.length > 0 ? (
                        <div className="space-y-3">
                            {sortedList.map((workout) => (
                                <PlanCard
                                    key={workout.id}
                                    workout={workout}
                                    isSaved={activeTab === "saved"}
                                />
                            ))}
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </section>
        </main>
    );
}

function MetricCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-[#2D313B] bg-[#1B1F28] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A92A0]">
                {label}
            </p>

            <p className="mt-3 text-3xl font-black text-white">
                {value}
            </p>
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#374151] bg-[#111317] px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A92A0]">
                My Plan
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase text-white sm:text-3xl">
                Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-[430px] text-sm leading-6 text-[#A1A1AA]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-black text-black transition hover:bg-[#CCFF00]"
            >
                Go to workouts
            </Link>
        </div>
    );
}