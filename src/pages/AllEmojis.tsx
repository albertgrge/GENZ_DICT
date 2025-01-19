import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EMOJI_DICTIONARY = [
  { emoji: "💀", meaning: "I'm dead (from laughter) or that's hilarious!" },
  { emoji: "😭", meaning: "Can express sadness or overwhelming laughter" },
  { emoji: "🥺", meaning: "Pleading, begging, or expressing cuteness" },
  { emoji: "💅", meaning: "Sass, confidence, or 'that's the tea'" },
  { emoji: "✨", meaning: "Excitement, emphasis, or something magical" },
  { emoji: "🔥", meaning: "Something amazing, impressive, or 'lit'" },
  { emoji: "💯", meaning: "Agreement, emphasis, or keeping it real" },
  { emoji: "👁️👄👁️", meaning: "Shock, surprise, or disbelief" },
  { emoji: "🤡", meaning: "Self-deprecating humor or calling something foolish" },
  { emoji: "🤨", meaning: "Skepticism or questioning something" },
  { emoji: "🤔", meaning: "Suspicion or side-eye" },
  { emoji: "😅", meaning: "Nervous laughter or awkwardness" },
  { emoji: "🤪", meaning: "Goofiness or being playful" },
  { emoji: "😴", meaning: "Boredom or tiredness (often ironic)" },
  { emoji: "👍", meaning: "Can be passive-aggressive or sarcastic" },
  { emoji: "🫶", meaning: "Showing love and support" },
  { emoji: "🙏", meaning: "Please, thank you, or prayer" },
  { emoji: "🫡", meaning: "Respect or taking one for the team" },
  { emoji: "😡", meaning: "Playful anger or frustration" },
  { emoji: "🤯", meaning: "Shock or mind-blowing moments" },
  { emoji: "😌", meaning: "Peaceful or satisfied feeling" },
  { emoji: "🤤", meaning: "Craving or admiring something" },
  { emoji: "😈", meaning: "Mischievousness or playful evil" },
  { emoji: "🙄", meaning: "Sarcasm or annoyance" },
  { emoji: "🥵", meaning: "Hot (literally or figuratively)" },
  { emoji: "🥶", meaning: "Cold or emotionally distant" },
  { emoji: "🫨", meaning: "Intense shock or emotional intensity" },
  { emoji: "🫣", meaning: "Curiosity while being shy" },
  { emoji: "✨😭", meaning: "A bittersweet or emotional moment" }
];

const AllEmojis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            All Emojis and Their Meanings
          </h1>
          <Link to="/">
            <Button variant="outline">Back to Search</Button>
          </Link>
        </div>
        
        <div className="grid gap-4">
          {EMOJI_DICTIONARY.map((entry) => (
            <Card key={entry.emoji} className="p-4 animate-fade-in shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{entry.emoji}</span>
                <p className="text-gray-700 dark:text-gray-300">{entry.meaning}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEmojis;
