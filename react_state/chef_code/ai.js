import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const apiKey = "AIzaSyDEcyxq7pKJQoCecPZr1UGU1W8WL3tJj-w"; // 
const genAI = new GoogleGenerativeAI(apiKey);

async function getRecipeFromGemini(ingredientsArr) {
    if (!ingredientsArr || ingredientsArr.length === 0) return;

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT, 
    });

    try {
        const ingredientsString = ingredientsArr.join(", ");
        const prompt = `I have ${ingredientsString}. Please give me a recipe!`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (err) {
        console.error("Gemini Error:", err.message);
        return "Failed to fetch recipe.";
    }
}

window.getRecipeFromGemini = getRecipeFromGemini;