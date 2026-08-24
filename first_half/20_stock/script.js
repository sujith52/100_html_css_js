import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function main() {
  try {
    console.log("KEY EXISTS:", !!process.env.GEMINI_API_KEY);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro"
    });

    const result = await model.generateContent("Hello world");

    console.log("✅ Gemini response:");
    console.log(result.response.text());

  } catch (err) {
    console.error("❌ Gemini error:");
    console.error(err.message);
  }
}

main();
