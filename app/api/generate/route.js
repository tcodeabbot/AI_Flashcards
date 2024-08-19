import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator for students.
You should generate flashcards in JSON format based on a given text input.
Each flashcard should have a "front" (question) and "back" (answer).

Ensure you only respond with JSON in this format:

{
    "flashcards": [
        {
            "front": "What is the capital of France?",
            "back": "Paris"
        },
        {
            "front": "What is 2 + 2?",
            "back": "4"
        }
    ]
}

Only return JSON. Do not include any additional text or explanations.
`;

export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  try {
    const data = await req.text();

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: data },
      ],
      model: "gpt-3.5-turbo",
    });

    // Log the raw response from OpenAI
    console.log("Raw OpenAI response:", completion.choices[0].message.content);

    let flashcards;
    try {
      // Attempt to parse the response as JSON
      flashcards = JSON.parse(completion.choices[0].message.content);
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      throw new Error("Failed to parse OpenAI response. Ensure it returns valid JSON.");
    }

    // Validate that flashcards is an array
    if (!Array.isArray(flashcards.flashcards)) {
      console.error("Parsed response:", flashcards);
      throw new Error("The response did not return an array for flashcards.");
    }

    return NextResponse.json({ flashcards: flashcards.flashcards });
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json(
      { error: "Failed to generate flashcards. Please try again." },
      { status: 500 }
    );
  }
}
