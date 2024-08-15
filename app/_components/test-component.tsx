import React from "react";
import TestCard from "./test-card";
import QuestionsTracker from "./progress";
import Timer from "./timer";
import Progress from "./progress";

export default function TestComponent() {
  return (
    <div className="flex flex-col">
      <Progress />
      <TestCard />
      <Timer />
    </div>
  );
}
