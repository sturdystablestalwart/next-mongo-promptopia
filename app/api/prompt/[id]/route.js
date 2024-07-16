import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch a prompt", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findByIdAndUpdate(params.id, {
      prompt: prompt,
      tag: tag,
    });

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update a prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const deletePrompt = await Prompt.findByIdAndDelete(params.id);

    if (!deletePrompt) return new Response("Prompt not found", { status: 404 });

    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete a prompt", { status: 500 });
  }
};
