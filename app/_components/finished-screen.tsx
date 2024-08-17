import React, { use } from "react";
import { useTest } from "../contexts/testContext";

export default function FinishedScreen() {
  const { points, maxPoints, highscore, dispatch, questions } = useTest();

  const percentage = (points / maxPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage > 0 && percentage < 50) emoji = "🫤";
  if (percentage === 0) emoji = "🤦🏻";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong> {points} </strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>

      <p>(Highscore: {highscore} points)</p>

      <button
        className="bg-primary-400 px-5 py-2 text-white rounded-[0.75rem] hover:bg-primary-500"
        onClick={() => dispatch({ type: "restart", payload: questions })}
      >
        Restart Test
      </button>
    </>
  );
}
