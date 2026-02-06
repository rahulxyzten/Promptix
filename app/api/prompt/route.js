import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const dynamic = "force-dynamic";
// This is used to force the server to revalidate the route on every request

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch prompts:", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
