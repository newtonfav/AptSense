"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import TestComponent from "../_components/test-component";
import { useTest } from "../contexts/testContext";
import { useEffect, useState } from "react";

export default function Test() {
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const { dispatch, index, questions } = useTest();

  useEffect(() => {
    // Disable previous button if the index is 0 (first question)
    setIsPrevDisabled(index === 0);

    // Disable next button if the index is the last question
    setIsNextDisabled(index === questions.length - 1);
  }, [index, questions.length]);

  return (
    <div>
      <div className="justify-center flex items-center h-[75dvh] space-x-12">
        <button
          onClick={() => dispatch({ type: "question/prev" })}
          disabled={isPrevDisabled}
          className={`${
            isPrevDisabled
              ? "disabled:opacity-50 disabled:cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronLeftIcon className="size-20" />
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
          <ChevronRightIcon className="size-20" />
        </button>
      </div>
    </div>
  );
}
