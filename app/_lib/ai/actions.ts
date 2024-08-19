"use server";

import { generateText } from "ai";
import { createAI } from "ai/rsc";
import { ReactNode } from "react";

export interface ServerMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ClientMessage {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}

import { google } from "@ai-sdk/google";

export async function explainLogic(question: {
  fullQuestion: any;
  task: string;
  correctOption: number;
}) {
  const questionImage = question.fullQuestion;

  const options = ["A", "B", "C", "D"];
  const correctAnswer = question.correctOption;

  if (!questionImage) throw new Error("No file upload");

  const prompt = `${question.task}, Explain why the correct solution is ${options[correctAnswer]}. 
  Provide a detailed explanation at atmost 600 characters`;

  const result = await generateText({
    model: google("models/gemini-1.5-flash"),
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          {
            type: "image",
            image: questionImage,
          },
        ],
      },
    ],
  });

  return {
    success: true,
    responseText: result.text,
  };
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    explainLogic,
  },
  initialAIState: [],
  initialUIState: [],
});
