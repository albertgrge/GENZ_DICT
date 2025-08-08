import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const LOCAL_STORAGE_KEY = "genz_submitted_words";

export const SubmitWord = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry = { word, definition, example, timestamp: new Date().toISOString() };
    let existingWords = [];

    try {
      const storedWords = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedWords) {
        existingWords = JSON.parse(storedWords);
      }
    } catch (error) {
      console.error("Error parsing words from localStorage:", error);
    }

    existingWords.push(newEntry);

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingWords));
      toast({
        title: "Word Submitted!",
        description: "Thank you for contributing! Your word has been saved locally in your browser.",
      });
      setWord("");
      setDefinition("");
      setExample("");
    } catch (error) {
      console.error("Error saving words to localStorage:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error saving your word locally. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-genz-purple to-genz-pink text-transparent bg-clip-text">
        Submit a New Word
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="word" className="block text-sm font-medium text-gray-700">
            Word or Phrase
          </label>
          <Input
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter the word or phrase"
            required
          />
        </div>
        <div>
          <label htmlFor="definition" className="block text-sm font-medium text-gray-700">
            Definition
          </label>
          <Textarea
            id="definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
            placeholder="What does it mean?"
            required
          />
        </div>
        <div>
          <label htmlFor="example" className="block text-sm font-medium text-gray-700">
            Example Usage
          </label>
          <Textarea
            id="example"
            value={example}
            onChange={(e) => setExample(e.target.value)}
            placeholder="How is it used in a sentence?"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-genz-purple to-genz-pink hover:opacity-90">
          Submit the Word
        </Button>
      </form>
    </Card>
  );
};