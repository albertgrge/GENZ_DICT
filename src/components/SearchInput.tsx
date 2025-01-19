import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const SearchInput = ({ placeholder, value, onChange, onSearch }: SearchInputProps) => {
  return (
    <div className="relative flex gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        className="w-full bg-white/90 backdrop-blur-sm shadow-lg search-input"
      />
      <Button 
        onClick={onSearch}
        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90"
      >
        <img 
          src="https://i.postimg.cc/Y2J60sv5/search.png" 
          alt="Search"
          className="w-5 h-5"
        />
      </Button>
    </div>
  );
};