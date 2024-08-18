"use client";
import React, { useEffect } from "react";
import { useTest } from "../contexts/testContext";
import Test from "./test";
import StartButton from "./start-button";
import FinishedScreen from "./finished-screen";

interface StartTestProp {
  questions: any[];
}

export interface HandleClick {
  preventDefault: () => void;
}

export default function StartTest({ questions }: StartTestProp) {
  const { status, dispatch } = useTest();

  useEffect(() => {
    dispatch({ type: "question/loaded", payload: questions });
  }, [dispatch, questions]);

  function handleClick(e: HandleClick) {
    e.preventDefault();

    dispatch({ type: "question/start" });
  }

  return (
    <div>
      {status === "active" ? (
        <Test />
      ) : (
        <div>
          <div className="   justify-center h-[75dvh] space-x-12  flex flex-col items-center select-none mb-8">
            <div className="bg-primary-200 rounded-[0.75rem] text-center p-20 text-base space-y-4">
              {status === "finished" ? (
                <FinishedScreen />
              ) : (
                <StartButton handleClick={handleClick} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
