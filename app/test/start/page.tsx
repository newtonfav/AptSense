import React from "react";
import Questions from "@/app/_components/questions";
import { AI } from "@/app/_lib/ai/actions";
import { questionsData } from "@/app/_lib/mock/mockQuestionsData";
import { convertToBase64 } from "@/app/helpers/convertToBase64";

export interface Question {
  id: string;
  task: string;
  options: any[];
  image: string;
}

export interface IQuestion {
  id: string;
  task: string;
  options: { id: string; image: string }[];
  image: string;
  points: number;
  correctOption: number;
  fullQuestion: string;
}

export default async function Start() {
  const questions: Question[] = questionsData;

  return (
    <div>
      <AI>
        <Questions questions={questions} />
      </AI>
    </div>
  );
}
