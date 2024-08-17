"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
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
import { getQuestionById } from "../db/questions";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function explainLogic(question: {
  fullQuestion: any;
  task: string;
}) {
  const questionImage = question.fullQuestion;

  if (!questionImage) throw new Error("No file upload");

  //   if (
  //     questionImage?.type !== "image/jpeg" ||
  //     questionImage?.type !== "image/png"
  //   ) {
  //     return { success: false, message: "File must be an image" };
  //   }

  //   if (questionImage?.size > 5000000) {
  //     return { success: false, message: "Image must be less than 5mb" };
  //   }

  //   const bytes = await file.arrayBuffer();

  //   const image = {
  //     inlineData: {
  //       data: Buffer.from(bytes).toString("base64"),
  //       mimeType: file.type,
  //     },
  //   };

  const prompt = question.task;

  //Upload to storage
  //   const path = join("/", "temp", file.name);
  //   const res = await uploadImagetoStorage(file, path);

  //   const result = await model.generateContent([prompt, image]);
  //   const imageUrl = res.fullPath;

  //   const result = await model.generateContent([
  //     {
  //       fileData: {
  //         mimeType: "image/png",
  //         fileUri: question.fullQuestion,
  //       },
  //     },
  //     { text: prompt },
  //   ]);

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
