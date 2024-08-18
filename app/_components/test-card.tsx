import Image from "next/image";
import React, { useState } from "react";
import Options from "./options";
import { useTest } from "../contexts/testContext";
import Solution from "./solution";

interface TestCardProps {
  questions: any[];
  index: number;
}

export default function TestCard({ questions, index }: TestCardProps) {
  const question = questions[index];
  const correctOption = question.options[question.correctOption];
  const { isFlipped } = useTest();

  return (
    <div className="bg-primary-200 p-10 rounded-[0.75rem] min-w-min space-y-4 flex flex-col items-center select-none mb-8">
      <div>{question.task}</div>
      <div className="inline-flex gap-4 items-center">
        <Image
          src={question.image}
          alt={"aptitude image"}
          quality={100}
          className="mb-[2rem]"
          width={350}
          height={88}
          priority
        />
        {isFlipped && (
          <div className="border-4 border-primary-400 mb-[2rem]">
            <Image
              src={correctOption.image}
              alt={"correctOption"}
              className="p-1"
              width={88}
              height={88}
            />
          </div>
        )}
      </div>
      {isFlipped ? (
        <Solution />
      ) : (
        <Options
          options={question.options}
          questionId={question.id}
          index={index}
          question={question}
        />
      )}
    </div>
  );
}
