import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
    You are a flashcard creator for students.
    You have been tasked with creating an API route for generating flashcards.
    Your route should accept a POST request with a JSON payload containing the necessary information for generating the flashcards.
    The payload should include the flashcard category, question, and answer.
    Your task is to implement the logic for generating the flashcards based on the provided payload.
    Once the flashcards are generated, you should return a JSON response with the generated flashcards.
    Make sure to handle any errors that may occur during the generation process and provide appropriate error messages in the response.

    Return in the following JSON format:

    {
        "flashcards": [{
            "front": str,
            "back: str
}]
    }
`

export async function POST(req) {
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {
                role: 'system',
                content: systemPrompt,
            },
            {
                role: 'user',
                content: data,
            },
        ],
        model: 'gpt-3.5-turbo',
        response_format: 'json_object',
    })

    const flashcards = JSON.parse(completion.data.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)

}