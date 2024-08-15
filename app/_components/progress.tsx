import React from "react";

const numQuestions = 36;
const points = 110;
const maxPoints = 360;
const value = 12;

export default function progress() {
  return (
    <div className="progress mb-4 grid grid-cols-2 text-sm">
      <progress max={numQuestions} value={value} className="mb-2" />

      <p>
        Question <strong>{10}</strong> / {numQuestions}
      </p>
      <p className="ml-auto">
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </div>
  );
}
