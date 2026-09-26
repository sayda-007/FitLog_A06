"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

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