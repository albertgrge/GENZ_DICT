import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const FACTS = [
  "'Sus' (suspicious) gained popularity from the game Among Us, where players identified impostors.",
  "The phrase 'no cap' originated in hip-hop culture, meaning 'no lie' or 'for real.'",
  "'Stan' (devoted fan) comes from Eminems 2000 song 'Stan,' about an obsessive fan.",
  "The phrase 'vibe check' started as a joke on TikTok but evolved into a way to gauge someone's mood.",
  "'Drip' (stylish clothing or appearance) is a slang term rooted in hip-hop fashion culture.",
  "'Cheugy' (outdated or trying too hard) was coined by a group of friends in 2013 but gained traction on TikTok.",
  "The term 'main character energy' is inspired by movies where the protagonist commands attention and control.",
  "The 🔥 emoji (fire) is used to signify something impressive or excellent, often in music or fashion.",
  "'Glow-up' (personal transformation) reflects the idea of improving oneself, physically or mentally.",
  "'Finsta' (fake Instagram account) refers to a second, private account used for personal posts.",
  "The term 'Rizz' (charisma or charm) is short for 'charisma' and popularized on social media platforms like TikTok.",
  "'Periodt' (emphatic period) is derived from African American Vernacular English (AAVE) to emphasize a statement.",
  "'Simp' originally meant a foolish person but evolved into someone overly kind or submissive for romantic attention.",
  "The phrase 'we outside' indicates socializing or enjoying life beyond the confines of home.",
  "The '💀' emoji (skull) now represents laughing so hard it feels like you are dying.",
  "'Cottagecore' (aesthetic lifestyle) romanticizes rural living, often featuring florals, baking, and cozy homes.",
  "The concept of 'cancel culture' (calling out public figures for wrongdoing) stems from accountability movements online.",
  "The phrase 'it is giving' became a way to describe vibes or moods, often humorously.",
  "The slang 'NPC' (non-player character) describes someone unoriginal or robotic in behavior, inspired by video games."
];

export const DidYouKnow = () => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % FACTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-4 bg-gradient-to-r from-genz-orange to-genz-pink text-white overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="text-2xl">💡</span>
        <div className="animate-slide-in" key={currentFact}>
          <h3 className="font-bold mb-1">Did you know?</h3>
          <p className="text-sm">{FACTS[currentFact]}</p>
        </div>
      </div>
    </Card>
  );
};