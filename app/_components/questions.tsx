"use client";

import React from "react";
import { TestProvider, useTest } from "../contexts/testContext";
import { Question } from "../test/start/page";
import StartTest from "./start-test";

export default function Questions({ questions }: { questions: Question[] }) {
  return (
    <TestProvider>
      <StartTest questions={questions} />
    </TestProvider>
  );
}
