"use client";

import React from "react";
import TestCard from "./test-card";
import Timer from "./timer";
import Progress from "./progress";
import { useTest } from "../contexts/testContext";

export default function TestComponent() {
  const { index, questions, points, numQuestions, answer } = useTest();

  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <div className="flex flex-col">
      <Progress
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPoints={maxPoints}
        answer={answer}
      />

      <TestCard index={index} questions={questions} />

      <Timer />
    </div>
  );
}
