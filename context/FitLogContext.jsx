"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [hydrated, setHydrated] = useState(false);

    // Load saved data after the app mounts in the browser.
    useEffect(() => {
        try {
            const storedPlan = localStorage.getItem("fitlog-plan");
            const storedSaved = localStorage.getItem("fitlog-saved");

            if (storedPlan) {
                setPlan(JSON.parse(storedPlan));
            }

            if (storedSaved) {
                setSaved(JSON.parse(storedSaved));
            }
        } catch (error) {
            console.error("Failed to load FitLog data:", error);
        } finally {
            setHydrated(true);
        }
    }, []);

    // Save plan and saved workouts whenever they change.
    useEffect(() => {
        if (!hydrated) {
            return;
        }

        try {
            localStorage.setItem("fitlog-plan", JSON.stringify(plan));
            localStorage.setItem("fitlog-saved", JSON.stringify(saved));
        } catch (error) {
            console.error("Failed to save FitLog data:", error);
        }
    }, [plan, saved, hydrated]);

    const addToPlan = (workout) => {
        if (plan.length >= 5) {
            return false;
        }

        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            return false;
        }

        setPlan((currentPlan) => [...currentPlan, workout]);
        return true;
    };

    const removeFromPlan = (workoutId) => {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== workoutId)
        );
    };

    const addToSaved = (workout) => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return false;
        }

        setSaved((currentSaved) => [...currentSaved, workout]);
        return true;
    };

    const removeFromSaved = (workoutId) => {
        setSaved((currentSaved) =>
            currentSaved.filter((item) => item.id !== workoutId)
        );
    };

    const markAsDone = (workoutId) => {
        setPlan((currentPlan) =>
            currentPlan.map((item) =>
                item.id === workoutId
                    ? { ...item, done: !item.done }
                    : item
            )
        );
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                addToSaved,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("useFitLog must be used inside FitLogProvider");
    }

    return context;
}