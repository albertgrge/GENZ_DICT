import { WordOfDay } from "@/components/WordOfDay";
import { SearchBar } from "@/components/SearchBar";
import { DidYouKnow } from "@/components/DidYouKnow";
import { QuizSection } from "@/components/QuizSection";
import { EmojiSearch } from "@/components/EmojiSearch";
import { EmoticonTranslator } from "@/components/EmoticonTranslator";
import { Footer } from "@/components/Footer";
import { SubmitWord } from "@/components/SubmitWord";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 space-y-4 md:space-y-8">
        <div className="flex justify-end mb-2 md:mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-white/80 dark:bg-gray-800/80"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
              <Moon className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </Button>
        </div>

        <div className="w-full">
          <SearchBar />
        </div>

        <div className="grid gap-4 md:gap-8">
          <div className="text-lg md:text-xl font-bold mb-2">
            Emoji Translator <span className="text-sm md:text-base">(<img src="https://i.postimg.cc/Kvt9tsHM/pngwing-com-2.png" alt="emoji" className="inline-block h-6 w-6" />)</span>
          </div>
          <EmojiSearch />
          <div className="text-lg md:text-xl font-bold mb-2">
            Emoticon Translator <span className="text-sm md:text-base">( ͡❛ ͜ʖ ͡❛)</span>
          </div>
          <EmoticonTranslator />
          <WordOfDay />
          <DidYouKnow />
        </div>

        <QuizSection />
        <SubmitWord />
        
        <div className="text-center mt-4 md:mt-8">
          <Link 
            to="/movies" 
            className="inline-block w-full md:w-auto px-6 py-3 bg-gradient-to-r from-genz-purple to-genz-pink text-white rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base shadow-md hover:shadow-lg"
          >
            Check Out Movie Recommendations
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;