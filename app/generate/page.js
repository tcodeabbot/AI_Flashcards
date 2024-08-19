"use client";

import { useState } from "react";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../globals.css"; // Import global styles

export default function Generate() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const categorizeFlashcards = (flashcards) => {
    const categories = {};
    flashcards.forEach((flashcard) => {
      const topic = flashcard.topic || "Uncategorized";
      if (!categories[topic]) categories[topic] = [];
      categories[topic].push(flashcard);
    });
    return categories;
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: text,
      });

      if (!response.ok) {
        throw new Error(`Failed to generate flashcards: ${response.statusText}`);
      }

      const data = await response.json();

      // Log the raw response to inspect its structure
      console.log("API Response Data:", data);

      // Check if flashcards is indeed an array
      if (!Array.isArray(data.flashcards)) {
        throw new Error("The response did not return an array for flashcards.");
      }

      const flashcards = data.flashcards;

      if (flashcards.length === 0) {
        throw new Error("The flashcards array is either empty or not formatted correctly.");
      }

      const categorizedFlashcards = categorizeFlashcards(flashcards);
      setFlashcards(categorizedFlashcards);

      // Save flashcards to Firebase (if needed)
      for (const topic in categorizedFlashcards) {
        for (const flashcard of categorizedFlashcards[topic]) {
          await addDoc(collection(db, "flashcards"), {
            ...flashcard,
            topic,
          });
        }
      }
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Flashcard Generator</h1>
        <p>Generate flashcards based on the text you provide and organize them into categories.</p>
      </header>
      <div className="input-area">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your content"
          rows="5"
        />
      </div>
      <button className="generate-button" onClick={handleSubmit}>
        Generate Flashcards
      </button>

      <div className="flashcard-container">
        {Object.entries(flashcards).map(([category, flashcardsArray]) => (
          <div key={category}>
            <h2 className="flashcard-category">{category}</h2>
            {flashcardsArray.map((flashcard, index) => (
              <div className="flashcard" key={index}>
                <h3>{flashcard.front}</h3>
                <p>{flashcard.back}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
