import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const WORDS = [
  { word: "bussin", definition: "Really good, amazing", example: "This pizza is bussin fr fr!", emoji: "🔥" },
  { word: "no cap", definition: "No lie, for real", example: "No cap, that movie was amazing!", emoji: "🧢" },
  { word: "slay", definition: "To do something exceptionally well", example: "You really slayed that presentation!", emoji: "💅" },
];

export const WordOfDay = () => {
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const { toast } = useToast();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    setCurrentWord(WORDS[randomIndex]);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentWord.word);
    toast({
      title: "Copied!",
      description: `"${currentWord.word}" has been copied to your clipboard`,
    });
  };

  return (
    <Card className="p-6 animate-fade-in bg-gradient-to-r from-genz-purple to-genz-pink text-white">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Word of the Day</h2>
          <span className="text-4xl">{currentWord.emoji}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold">{currentWord.word}</h3>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Copy word"
            >
              📋
            </button>
          </div>
          <p className="text-lg opacity-90">{currentWord.definition}</p>
          <p className="italic text-sm bg-white/10 p-3 rounded-lg">
            "{currentWord.example}"
          </p>
        </div>
      </div>
    </Card>
  );
};