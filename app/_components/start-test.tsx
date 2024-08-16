"use client";
import React, { useEffect } from "react";
import { useTest } from "../contexts/testContext";
import Test from "./test";

interface StartTestProp {
  questions: any[];
}

export default function StartTest({ questions }: StartTestProp) {
  const { status, secondsRemaining, dispatch } = useTest();

  useEffect(() => {
    dispatch({ type: "question/loaded", payload: questions });
  }, [dispatch, questions]);

  function handleClick(e: { preventDefault: () => void }) {
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
              <div className="">
                Make sure you have a stable internet connection.
              </div>

              <div className="mb-6"></div>

              <button
                onClick={handleClick}
                className="bg-primary-400 px-5 py-2 text-white rounded-[0.75rem] hover:bg-primary-500"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
