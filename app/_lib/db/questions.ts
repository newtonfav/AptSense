import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export const getQuestions = async function () {
  const { data, error } = await supabase
    .from("questions")
    .select("id, task, options, image, points")
    .order("task");

  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }

  revalidatePath("/test/start");
  return data;
};
