import OpenAI from "openai";



async function checkUsage() {
  try {
    const res = await openai.responses.create({
      model: "gpt-4o-mini",
      input: "ping"
    });

    console.log("✅ API working");
    console.log("Sample output:", res.output_text);

  } catch (err) {
    if (err.status === 429) {
      console.log("❌ QUOTA EXHAUSTED");
      console.log("Reason:", err.error?.code);
    } 
    else if (err.status === 401) {
      console.log("❌ INVALID API KEY");
    } 
    else if (err.status === 404) {
      console.log("❌ MODEL NOT AVAILABLE");
    } 
    else {
      console.log("❌ UNKNOWN ERROR");
      console.log(err);
    }
  }
}

checkUsage();
