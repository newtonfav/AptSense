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
}) {
  const questionImage = question.fullQuestion;

  if (!questionImage) throw new Error("No file upload");

  const prompt = `${question.task}, provide a detailed explanation at atmost 600 characters`;

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
