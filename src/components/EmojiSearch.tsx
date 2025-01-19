import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EMOJI_DICTIONARY = [
  { emoji: "💀", meaning: "I'm dead (from laughter) or that's hilarious!" },
  { emoji: "😭", meaning: "Can express sadness or overwhelming laughter" },
  { emoji: "😂", meaning: "Laughter (considered slightly outdated by Gen Z)" },
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

export const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<typeof EMOJI_DICTIONARY>([]);
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = EMOJI_DICTIONARY.filter((entry) =>
      entry.emoji.includes(term) || entry.meaning.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filtered);

    if (filtered.length === 0) {
      toast({
        title: "No emoji results found",
        description: (
          <div className="space-y-2">
            <p>Try a different search term or view all emojis.</p>
            <Link to="/all-emojis">
              <Button variant="outline" size="sm">View All Emojis</Button>
            </Link>
          </div>
        ),
      });
    }
  };

  const clearResults = () => {
    setResults([]);
    setSearchTerm("");
  };

  return (
    <Card className="p-6 shadow-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Drop an emoji or search meaning..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full shadow-sm bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-genz-purple"
          />
        </div>
        {results.length > 0 && (
          <div className="space-y-2 relative">
            <Button
              onClick={clearResults}
              className="absolute -top-2 right-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              variant="ghost"
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>
            {results.map((result) => (
              <Card 
                key={result.emoji} 
                className="p-4 animate-fade-in shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{result.emoji}</span>
                  <p className="text-gray-700 dark:text-gray-300">{result.meaning}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};