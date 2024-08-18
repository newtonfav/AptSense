import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export const getQuestions = async function () {
  const { data, error } = await supabase
    .from("questions")
    .select("id, task, options, image, points, correctOption, fullQuestion")
    .order("task");

  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }

  revalidatePath("/test/start");
  return data;
};

export const getQuestionById = async function (id: number) {
  const { data, error } = await supabase
    .from("questions")
    .select("fullQuestion, task")
    .eq("id", id);

  console.log("data", data);

  if (error) {
    console.error(error);
    throw new Error("Question could not be fetched");
  }

  return data;
};
