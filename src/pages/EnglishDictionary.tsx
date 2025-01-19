import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import type { DictionaryEntry } from "@/types/dictionary-api";

const EnglishDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          toast({
            title: "Word not found",
            description: "Sorry, we couldn't find any definitions for this word. Try another word or check your spelling.",
            variant: "destructive",
          });
          setResults([]);
          return;
        }
        throw new Error(errorData.message || "Failed to fetch definition");
      }
      const data: DictionaryEntry[] = await response.json();
      setResults(data);
    } catch (error) {
      setResults([]);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            English Dictionary
          </h1>
          <Link to="/">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white/70 transition-colors text-black"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </Link>
        </div>

        <div className="relative flex gap-2">
          <Input
            type="text"
            placeholder="Search English words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full bg-white/90 backdrop-blur-sm shadow-lg search-input text-black placeholder-black/70"
            style={{ 
              color: 'black',
              caretColor: 'black'
            }}
          />
          <Button 
            onClick={handleSearch}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90"
          >
            <img 
              src="https://i.postimg.cc/Y2J60sv5/search.png" 
              alt="Search"
              className="w-5 h-5"
            />
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4 mt-4">
            {results.map((entry, index) => (
              <Card key={`${entry.word}-${index}`} className="p-4 animate-fade-in shadow-md hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {entry.word}
                    </h3>
                    {entry.phonetic && (
                      <span className="text-gray-500">/{entry.phonetic}/</span>
                    )}
                  </div>
                  {entry.meanings.map((meaning, meaningIndex) => (
                    <div key={`${entry.word}-meaning-${meaningIndex}`} className="space-y-2">
                      <h4 className="font-semibold text-purple-600">
                        {meaning.partOfSpeech}
                      </h4>
                      <ul className="space-y-2">
                        {meaning.definitions.map((def, defIndex) => (
                          <li key={`${entry.word}-def-${defIndex}`} className="space-y-1">
                            <p className="text-gray-700 dark:text-gray-200">{def.definition}</p>
                            {def.example && (
                              <p className="text-gray-500 dark:text-gray-400 italic">
                                Example: {def.example}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnglishDictionary;