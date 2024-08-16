import Image from "next/image";
import React, { useState } from "react";
import question from "@/public/question.svg";
import Options from "./options";

interface TestCardProps {
  questions: any[];
  index: number;
}

export default function TestCard({ questions, index }: TestCardProps) {
  const question = questions[index];

  return (
    <div className="bg-primary-200 p-10 rounded-[0.75rem] space-y-4 flex flex-col items-center select-none mb-8">
      <div>{question.task}</div>
      <div>
        <Image
          src={question.image}
          alt={"aptitude image"}
          quality={100}
          className="mb-[2rem]"
          width={350}
          height={88}
        />
      </div>
      <Options options={question.options} questionId={question.id} />
    </div>
  );
}
