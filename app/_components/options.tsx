"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTest } from "../contexts/testContext";
import { useActions } from "ai/rsc";
import SpinnerMini from "./spinner-mini";

interface OptionsProps {
  options: any[];
  questionId: string;
  index: number;
  question: any;
}

export default function Options({
  options,
  questionId,
  index,
  question,
}: OptionsProps) {
  const { isCorrect, isAnswered, showFeedback, submitAnswer } = useTest();
  const { explainLogic } = useActions();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const selectedOption = Number(formData.get(questionId));

    const response = await explainLogic(question);
    const solution = response.responseText;

    if (!response.success) throw new Error("Couldn't fetch solution");

    submitAnswer(selectedOption, index, solution);
    setPending(false);
  }

  function handleFeedback(e: { preventDefault: () => void }) {
    e.preventDefault();

    showFeedback();
  }

  return (
    <form onSubmit={handleSubmit}>
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
          <Button text="Submit" type={"submit"} pending={pending} />
        ) : (
          <Feedback
            isCorrect={isCorrect}
            handleClick={handleFeedback}
            pending={pending}
          />
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
        <Image
          src={image}
          alt={alt}
          width={90}
          height={90}
          quality={100}
          priority
        />
      </label>
    </div>
  );
}

function Button({
  text,
  type,
  pending,
  handleClick,
}: {
  text: string;
  type: undefined | "button" | "reset" | "submit";
  handleClick?: (e: any) => void;
  pending: boolean;
}) {
  return (
    <button
      className="bg-primary-400 px-8 py-2 text-sm text-primary-200 rounded-[0.7rem] mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleClick}
      type={type}
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : text}
    </button>
  );
}

function Feedback({
  isCorrect,
  pending,
  handleClick,
}: {
  isCorrect: boolean;
  pending: boolean;
  handleClick: (e: any) => void;
}) {
  return (
    <div className="inline-flex items-baseline gap-6">
      {isCorrect ? <div>Correct 🎉</div> : <div>Wrong ❌</div>}
      <Button
        text="View Explanation"
        type={undefined}
        handleClick={handleClick}
        pending={pending}
      />
    </div>
  );
}