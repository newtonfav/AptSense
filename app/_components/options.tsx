"use client";

import Image from "next/image";
import React, { useState } from "react";
import option1 from "@/public/option1.svg";
import option2 from "@/public/option2.svg";
import option3 from "@/public/option3.svg";
import option4 from "@/public/option4.svg";

export default function Options() {
  const [isCorrect, setisCorrect] = useState(false);
  const [isAnswered, setisAnswered] = useState(true);

  return (
    <form action="">
      <fieldset className="items-center flex flex-col">
        <div className="inline-flex gap-4 mb-12">
          <Option
            image={option1}
            alt={"option1"}
            id={"option1"}
            value={"option1"}
            name={"question1"}
          />
          <Option
            image={option2}
            alt={"option2"}
            id={"option2"}
            value={"option2"}
            name={"question1"}
          />
          <Option
            image={option3}
            alt={"option3"}
            id={"option3"}
            value={"option3"}
            name={"question1"}
          />
          <Option
            image={option4}
            alt={"option4"}
            id={"option4"}
            value={"option4"}
            name={"question1"}
          />
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
  value: string;
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
        <Image src={image} alt={alt} width={90} />
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
