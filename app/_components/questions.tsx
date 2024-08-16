"use client";

import React from "react";
import StartScreen from "./start-screen";
import { getQuestions } from "../_lib/db/questions";
import { TestProvider, useTest } from "../contexts/testContext";
import { Question } from "../test/start/page";
import Test from "./test";
import StartTest from "./start-test";

export default function Questions({ questions }: { questions: Question[] }) {
  return (
    <TestProvider>
      <StartTest questions={questions} />
    </TestProvider>
  );
}
