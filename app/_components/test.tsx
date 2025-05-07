"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import TestComponent from "../_components/test-component";
import { useTest } from "../contexts/testContext";
import { useEffect, useState } from "react";

export default function Test() {
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const { dispatch, index, questions, isAnswered } = useTest();

  useEffect(() => {
    // Disable previous button if the index is 0 (first question) or if the question is not answered
    if (index === 0 || !isAnswered) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }

    // Disable next button if the index is the last question or if the question is not answered
    if (index === questions.length - 1 || !isAnswered) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [index, isAnswered, questions.length]);

  return (
    <div>
      <div className="justify-center flex items-center h-[78dvh] space-x-3 sm:space-x-12">
        <button
          onClick={() => dispatch({ type: "question/prev" })}
          disabled={isPrevDisabled}
          className={`${
            isPrevDisabled
              ? "disabled:opacity-50 disabled:cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronLeftIcon className="size-10 sm:size-20" />
        </button>

        <TestComponent />

        <button
          onClick={() => dispatch({ type: "question/next" })}
          disabled={isNextDisabled}
          className={`${
            isNextDisabled
              ? "disabled:opacity-50 disabled:cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRightIcon className="size-10 sm:size-20" />
        </button>
      </div>
    </div>
  );
}
