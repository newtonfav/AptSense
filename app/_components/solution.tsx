import React from "react";
import { MemoizedReactMarkdown } from "@/app/_components/memoized-react-mardown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { useTest } from "../contexts/testContext";

export default function Solution() {
  const { solution, index, numQuestions, dispatch } = useTest();

  return (
    <div className="text-wrap text-sm flex flex-col w-[33rem] h-[12rem]">
      <div className="font-semibold text-base">Explanation</div>
      <MemoizedReactMarkdown remarkPlugins={[remarkGfm, remarkMath]}>
        {solution}
      </MemoizedReactMarkdown>

      <div className="self-center mt-6">
        {index === numQuestions - 1 ? (
          <button
            className="bg-primary-400 px-8 py-2 text-sm text-primary-200 rounded-[0.7rem] mb-4"
            onClick={() => dispatch({ type: "finish" })}
          >
            Finish Test
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
