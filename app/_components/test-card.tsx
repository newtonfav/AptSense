import Image from "next/image";
import React, { useState } from "react";
import question from "@/public/question.svg";
import Options from "./options";

export default function TestCard() {
  // const [showExplanation, setShowExplanation] = useState(false);

  /*
  const questions = [
  {
  question: string,
  image: string,
  options: [
  {
  questionId: string,
  id: string,
  image: string, 
  }
  
  
  ]
  }
  
  ]

  */

  return (
    <div className="bg-primary-200 p-10 rounded-[0.75rem] space-y-4 flex flex-col items-center select-none mb-8">
      <div>Which figure completes the series?</div>
      <div>
        <Image
          src={question}
          alt={"aptitude image"}
          quality={100}
          className="mb-[2rem]"
          width={350}
        />
      </div>
      <Options />
    </div>
  );
}
