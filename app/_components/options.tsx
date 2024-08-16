"use client";

import Image from "next/image";
import React, { useState } from "react";

interface OptionsProps {
  options: any[];
  questionId: string;
}

export default function Options({ options, questionId }: OptionsProps) {
  const [isCorrect, setisCorrect] = useState(false);
  const [isAnswered, setisAnswered] = useState(false);

  return (
    <form action="">
      <fieldset className="items-center flex flex-col">
        <div className="inline-flex gap-4 mb-12">
          {options.map((option, index) => (
            <Option
              image={option.image}
              alt={"aptitude test option"}
              value={index}
              name={questionId}
              key={option.id}
              id={option.id}
            />
          ))}
        </div>
        {!isAnswered ? (
          <Button text="Submit" type={"submit"} />
        ) : (
          <Feedback isCorrect={isCorrect} />
        )}
      </fieldset>
    </form>
  );
}

function Option({
  image,
  alt,
  id,
  value,
  name,
}: {
  alt: string;
  image: any;
  id: string;
  value: number;
  name: string;
}) {
  return (
    <div className="inline-flex gap-3">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="w-[1.2rem] h-[1.2rem] self-center appearance-none border border-primary-400 rounded-full bg-white checked:bg-primary-400 checked:ring-1 checked:ring-offset-2 checked:ring-primary-400 cursor-pointer"
      />
      <label htmlFor={id}>
        <Image src={image} alt={alt} width={90} height={90} />
      </label>
    </div>
  );
}

function Button({
  text,
  type,
}: {
  text: string;
  type: undefined | "button" | "reset" | "submit";
}) {
  return (
    <div className="bg-primary-400 px-8 py-2 text-sm text-primary-200 rounded-[0.7rem] mb-4">
      <button type={type}>{text}</button>
    </div>
  );
}

function Feedback({ isCorrect }: { isCorrect: boolean }) {
  return (
    <div className="inline-flex items-baseline gap-6">
      {isCorrect ? <div>Correct 🎉</div> : <div>Wrong ❌</div>}
      <Button text="View Explanation" type={undefined} />
    </div>
  );
}
