import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const EMOTICON_DICTIONARY = [
  { emoticon: ":-)", meaning: "Smile or happiness" },
  { emoticon: ":-(", meaning: "Sadness or disappointment" },
  { emoticon: ":P", meaning: "Playful or teasing" },
  { emoticon: ":D", meaning: "Big grin or laughter" },
  { emoticon: ":O", meaning: "Shock or surprise" },
  { emoticon: ":/", meaning: "Skepticism or discomfort" },
  { emoticon: ":|", meaning: "Neutral or unamused" },
  { emoticon: "XD", meaning: "Hysterical laughter" },
  { emoticon: ";-)", meaning: "Winking, often flirty or playful" },
  { emoticon: "<3", meaning: "Love or affection (a heart)" },
  { emoticon: "</3", meaning: "Heartbreak or sadness" },
  { emoticon: "*:-*", meaning: "Kiss" },
  { emoticon: ":'(", meaning: "Crying or extreme sadness" },
  { emoticon: "T_T", meaning: "Crying (anime style)" },
  { emoticon: "u_u", meaning: "Disappointment or tiredness" },
  { emoticon: "o_O", meaning: "Confusion or disbelief" },
  { emoticon: "O_o", meaning: "Same as above, just reversed" },
  { emoticon: "-_-", meaning: "Annoyed, unimpressed, or tired" },
  { emoticon: "(¬_¬)", meaning: "Side-eye or sarcastic expression" },
  { emoticon: ">:-(", meaning: "Angry" },
  { emoticon: ":3", meaning: "Cute, often with a cat-like expression" },
  { emoticon: "(ಥ﹏ಥ)", meaning: "Intense crying or despair" },
  { emoticon: "(¬‿¬)", meaning: "Suggestive or sly smile" },
  { emoticon: "ಠ_ಠ", meaning: "Disapproval or judgment" },
  { emoticon: "ಠ‿ಠ", meaning: "Mischievous or playful smirk" },
  { emoticon: "ʕ•ᴥ•ʔ", meaning: "Cute bear face, often used for warmth or sweetness" },
  { emoticon: "^_^", meaning: "Happiness or excitement" },
  { emoticon: "(ノಠ益ಠ)ノ彡┻━┻", meaning: "Table flip (extreme frustration)" },
  { emoticon: "┬─┬ ノ( ゜-゜ノ)", meaning: "Table unflip (calm down)" },
  { emoticon: "(☞ﾟヮﾟ)☞", meaning: "You're awesome or Check this out!" },
  { emoticon: "(づ｡◕‿‿◕｡)づ", meaning: "Hug or offering comfort" },
  { emoticon: "ಥ_ಥ", meaning: "Tearful sadness" },
  { emoticon: "ლ(ಠ益ಠლ)", meaning: "Why?! or exasperation" },
  { emoticon: "( ••)>⌐■-■ (⌐■■)", meaning: "Cool or deal with it vibes" },
  { emoticon: "٩(｡•́‿•̀｡)۶", meaning: "Cheerful excitement" },
  { emoticon: "(✿◠‿◠)", meaning: "Innocence or kindness" },
  { emoticon: "(☞ ͡° ͜ʖ ͡°)☞", meaning: "Flirty or playful" },
  { emoticon: "(ノ﹏ヽ)", meaning: "Embarrassment or shyness" },
  { emoticon: "(¬▂¬)", meaning: "Annoyance or frustration" },
  { emoticon: ":)", meaning: "Sentimental right now" }
];

export const EmoticonTranslator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<typeof EMOTICON_DICTIONARY>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = EMOTICON_DICTIONARY.filter((entry) =>
      entry.emoticon.includes(term) || entry.meaning.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filtered);
  };

  const clearResults = () => {
    setResults([]);
    setSearchTerm("");
  };

  return (
    <Card className="p-6 shadow-lg bg-background/90 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search emoticons or their meanings..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full shadow-sm bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-genz-purple"
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
              <Card key={result.emoticon} className="p-4 animate-fade-in shadow-md dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{result.emoticon}</span>
                  <p className="text-foreground/80">{result.meaning}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};