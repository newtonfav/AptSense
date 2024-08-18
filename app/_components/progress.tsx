import React from "react";

interface Progress {
  maxPoints: number;
  numQuestions: number;
  points: number;
  index: number;
  answer: number | null;
}

export default function Progress({
  maxPoints,
  numQuestions,
  points,
  index,
  answer,
}: Progress) {
  return (
    <div className="progress mb-4 grid grid-cols-2 text-sm">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
        className="mb-2"
      />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p className="ml-auto">
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </div>
  );
}
