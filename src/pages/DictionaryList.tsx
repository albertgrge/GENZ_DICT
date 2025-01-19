import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DICTIONARY } from "@/components/SearchBar.data";

const DictionaryList = () => {
  // Sort words alphabetically
  const sortedWords = [...DICTIONARY].sort((a, b) => 
    a.word.toLowerCase().localeCompare(b.word.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gen Z Dictionary A-Z
          </h1>
          <Link to="/">
            <Button variant="outline">Back to Search</Button>
          </Link>
        </div>
        
        <div className="grid gap-4">
          {sortedWords.map((entry) => (
            <Card key={entry.word} className="p-4 animate-fade-in shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {entry.word}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{entry.definition}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DictionaryList;