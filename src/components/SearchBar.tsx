import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { DICTIONARY, SHORTCUTS } from "./SearchBar.data";
import { useIsMobile } from "@/hooks/use-mobile";
import { DictionaryHeader } from "./DictionaryHeader";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { X } from "lucide-react";

export const SearchBar = () => {
  const [dictionaryTerm, setDictionaryTerm] = useState("");
  const [shortcutTerm, setShortcutTerm] = useState("");
  const [results, setResults] = useState<typeof DICTIONARY>([]);
  const [shortcutResults, setShortcutResults] = useState<[string, string][]>([]);
  const [urbanResults, setUrbanResults] = useState<any[]>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleDictionarySearch = async () => {
    if (dictionaryTerm.trim() === "") {
      setResults([]);
      setUrbanResults([]);
      return;
    }

    const filtered = DICTIONARY.filter((entry) =>
      entry.word.toLowerCase().includes(dictionaryTerm.toLowerCase())
    );
    setResults(filtered);

    try {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'd82d81bdeamsh9352ba08fdbb6f1p112759jsn27b851fb941c',
          'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
      };

      const response = await fetch(
        `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${encodeURIComponent(dictionaryTerm)}`,
        options
      );

      if (!response.ok) {
        throw new Error('Failed to fetch from Urban Dictionary');
      }

      const data = await response.json();
      setUrbanResults(data.list || []);

      if (filtered.length === 0 && data.list.length === 0) {
        toast({
          title: "No results found in Gen Z Dictionary",
          description: (
            <div className="space-y-2">
              <p>Try searching in Chatting Shortcuts instead!</p>
              <div className="flex gap-2">
                <Link to="/dictionary-list">
                  <Button variant="outline" size="sm">View All Dictionary Words</Button>
                </Link>
                <Link to="/all-shortcuts">
                  <Button variant="outline" size="sm">View All Shortcuts</Button>
                </Link>
              </div>
            </div>
          ),
        });
      }
    } catch (error) {
      console.error('Urban Dictionary API error:', error);
      setUrbanResults([]);
    }
  };

  const handleShortcutSearch = () => {
    if (shortcutTerm.trim() === "") {
      setShortcutResults([]);
      return;
    }

    const filtered = Object.entries(SHORTCUTS.General).filter(([shortcut]) =>
      shortcut.toLowerCase().includes(shortcutTerm.toLowerCase())
    );
    setShortcutResults(filtered);

    if (filtered.length === 0) {
      toast({
        title: "No results found in Shortcuts",
        description: (
          <div className="space-y-2">
            <p>No shortcuts found for your search.</p>
            <div className="flex gap-2">
              <Link to="/all-shortcuts">
                <Button variant="outline" size="sm">View All Shortcuts</Button>
              </Link>
              <Link to="/all-emojis">
                <Button variant="outline" size="sm">View All Emojis</Button>
              </Link>
            </div>
          </div>
        ),
      });
    }
  };

  const clearDictionaryResults = () => {
    setResults([]);
    setUrbanResults([]);
    setDictionaryTerm("");
  };

  const clearShortcutResults = () => {
    setShortcutResults([]);
    setShortcutTerm("");
  };

  return (
    <div className="space-y-4">
      <DictionaryHeader />

      <div className="space-y-4">
        <SearchInput
          placeholder="Search Gen Z terms..."
          value={dictionaryTerm}
          onChange={(e) => setDictionaryTerm(e.target.value)}
          onSearch={handleDictionarySearch}
        />

        {(results.length > 0 || urbanResults.length > 0) && (
          <div className="relative">
            <Button
              onClick={clearDictionaryResults}
              className="absolute -top-2 right-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              variant="ghost"
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>
            <SearchResults
              results={results}
              urbanResults={urbanResults}
              onClear={clearDictionaryResults}
            />
          </div>
        )}

        <SearchInput
          placeholder="Search chatting shortcuts..."
          value={shortcutTerm}
          onChange={(e) => setShortcutTerm(e.target.value)}
          onSearch={handleShortcutSearch}
        />

        {shortcutResults.length > 0 && (
          <div className="relative">
            <Button
              onClick={clearShortcutResults}
              className="absolute -top-2 right-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              variant="ghost"
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="space-y-2 mt-4">
              {shortcutResults.map(([shortcut, meaning]) => (
                <div key={shortcut} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {shortcut}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <Link 
          to="/english-dictionary" 
          className="inline-block w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
        >
          Open English Dictionary
        </Link>
      </div>
    </div>
  );
};