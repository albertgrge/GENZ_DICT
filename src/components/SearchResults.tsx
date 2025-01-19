import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface SearchResult {
  word: string;
  definition: string;
}

interface UrbanResult {
  defid: number;
  word: string;
  definition: string;
  example?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  urbanResults: UrbanResult[];
  onClear: () => void;
}

export const SearchResults = ({ results, urbanResults, onClear }: SearchResultsProps) => {
  if (results.length === 0 && urbanResults.length === 0) return null;

  return (
    <div className="space-y-2 mt-4 relative">
      <Button
        onClick={onClear}
        className="absolute -top-2 right-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        variant="ghost"
        size="sm"
      >
        <X className="h-4 w-4" />
      </Button>
      {results.map((result) => (
        <Card key={result.word} className="p-4 animate-fade-in shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {result.word}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{result.definition}</p>
        </Card>
      ))}
      {urbanResults.map((result) => (
        <Card key={result.defid} className="p-4 animate-fade-in shadow-md hover:shadow-lg transition-shadow border-t-2 border-purple-200">
          <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {result.word}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{result.definition}</p>
          {result.example && (
            <p className="text-gray-500 dark:text-gray-400 italic mt-2 text-sm">Example: {result.example}</p>
          )}
        </Card>
      ))}
    </div>
  );
};