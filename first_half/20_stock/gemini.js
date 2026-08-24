import { GoogleGenAI } from "@google/genai";


const genAI = new GoogleGenAI({ apiKey: "AIzaSyBYh1RESIL03RHN3GL4DtREdYZpQ1Mw3fc" });
const meassages = [
    {
        role : 'system',
        content : 'You are a helpful assistant. but act like you had emotions while giving answers!. i have provided some examples in between ### so look at them and give output.' 
    },
    {
        role: 'user',
        content : 'so what is quantum computing? ### good day bro how are man , you look like a alien! ###'
    }
]
const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: meassages
})

console.log(response[0].meassages.content);

// async function run() {
//   try {
//     // 2. In this specific SDK, models are accessed via the models property
//     const result = await genAI.models.generateContent({
//       model: "gemini-2.5-flash-lite",
//       contents: [{ 
//         role: "user", 
//         parts: [{ text: "explain what is quantum computing" 
//         }] }],
//     });

//     // 3. Log the response text
//     console.log(result.text);

//   } catch (error) {
//     console.error("Detailed Error:", error.message);
//   }
// }
// run();