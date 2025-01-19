import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RECOMMENDATIONS = {
  "happy": [
    { title: "Everything Everywhere All at Once", description: "A chaotic, heartfelt exploration of multiverses and family dynamics" },
    { title: "Spider-Man: Into the Spider-Verse", description: "Hilarious, visually stunning animated masterpiece" },
    { title: "Brooklyn Nine-Nine", description: "Feel-good sitcom with quirky characters solving crimes" }
  ],
  "sad": [
    { title: "The Fault in Our Stars", description: "A tender story of love and loss between two teens" },
    { title: "Bojack Horseman", description: "Darkly funny yet devastatingly emotional series" },
    { title: "The Perks of Being a Wallflower", description: "Heartfelt coming-of-age story about outcasts" }
  ],
  "nostalgic": [
    { title: "10 Things I Hate About You", description: "Classic teen rom-com with timeless charm" },
    { title: "Stranger Things", description: "Blend of '80s vibes and supernatural thrills" },
    { title: "The Princess Bride", description: "Classic fairy tale with adventure and wit" }
  ],
  "adventurous": [
    { title: "Dune", description: "Visually breathtaking sci-fi epic" },
    { title: "The Mandalorian", description: "Thrilling Star Wars universe adventure" },
    { title: "Ready Player One", description: "Pop culture-filled VR world adventure" }
  ]
};

export const MovieRecommendations = () => {
  const [mood, setMood] = useState<keyof typeof RECOMMENDATIONS>("happy");

  return (
    <Card className="p-6 shadow-lg bg-gradient-to-r from-genz-purple to-genz-pink text-white">
      <h2 className="text-2xl font-bold mb-4">Movie & Series Recommendations</h2>
      <div className="space-y-4">
        <Select onValueChange={(value: keyof typeof RECOMMENDATIONS) => setMood(value)} value={mood}>
          <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
            <SelectValue placeholder="How are you feeling?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="happy">Feeling Happy</SelectItem>
            <SelectItem value="sad">Need a Good Cry</SelectItem>
            <SelectItem value="nostalgic">Feeling Nostalgic</SelectItem>
            <SelectItem value="adventurous">Want Adventure</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid gap-4">
          {RECOMMENDATIONS[mood].map((rec) => (
            <Card key={rec.title} className="p-4 bg-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-lg">{rec.title}</h3>
              <p className="text-sm opacity-90">{rec.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};