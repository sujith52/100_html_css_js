import { OpenAI } from "openai/client.js";





async function main() {
  try {
    const completion = await openai.chat.completions.create({
      // IMPORTANT: Use a valid Gemini model name
      model: "gemini-2.5-flash-lite", 
      messages: [
        {
            role : 'system',
            content : 'You are a helpful assistant. but act like you had emotions while giving answers!. i have provided some examples in between ### so look at them and give output.' 
        },
        {
            role: 'user',
            content : 'hello bro ### good day bro how are man , you look like a alien! ###'
        }
      ],
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error details:", error.message);
  }
}

main();