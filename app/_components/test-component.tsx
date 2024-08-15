"use client";

import React from "react";
import TestCard from "./test-card";
import Timer from "./timer";
import Progress from "./progress";

export default function TestComponent() {
  return (
    // <TestProvider>
    <div className="flex flex-col">
      <Progress />
      <TestCard />
      <Timer />
    </div>
    // </TestProvider>
  );
}
