import { getQuestions } from "@/app/_lib/db/questions";
import React from "react";
import Questions from "@/app/_components/questions";
import { AI } from "@/app/_lib/ai/actions";

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
      <AI>
        <Questions questions={questions} />
      </AI>
    </div>
  );
}
