import { useTheme } from "@/components/theme-provider";

export const DictionaryHeader = () => {
  const { theme } = useTheme();
  
  return (
    <div className="backdrop-blur-sm bg-genz-orange/70 dark:bg-genz-orange/50 shadow-lg p-4 md:p-8 rounded-lg border border-orange-200 dark:border-orange-700">
      <img 
        src={theme === "dark" 
          ? "https://i.postimg.cc/mrfTykjZ/Blank-board.png"
          : "https://i.postimg.cc/pT8xk4qN/your-gen-z-dictionary.png"
        }
        alt="Your Gen Z Dictionary"
        className={`mx-auto h-24 md:h-32 mb-2 md:mb-4 transition-all duration-300 ${
          theme === "dark" ? "animate-slide-in" : "animate-slide-in-left"
        }`}
      />
      <p className="text-base md:text-xl text-gray-800 dark:text-gray-100 italic font-medium">
        Boomers' Lifeline to survive in this modern world
      </p>
    </div>
  );
};