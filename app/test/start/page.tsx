import Test from "@/app/_components/test";
import { getQuestions } from "@/app/_lib/db/questions";
import React from "react";
import Questions from "@/app/_components/questions";

export interface Question {
  id: string;
  task: string;
  options: any[];
  image: string;
}

export default async function Start() {
  const questions: Question[] = await getQuestions();

  return (
    <div>
      <Questions questions={questions} />
    </div>
  );
}
