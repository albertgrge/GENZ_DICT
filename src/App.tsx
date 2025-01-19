import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import DictionaryList from "./pages/DictionaryList";
import ShortcutsList from "./pages/ShortcutsList";
import EnglishDictionary from "./pages/EnglishDictionary";
import AllShortcuts from "./pages/AllShortcuts";
import AllEmojis from "./pages/AllEmojis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/dictionary-list" element={<DictionaryList />} />
        <Route path="/shortcuts-list" element={<ShortcutsList />} />
        <Route path="/english-dictionary" element={<EnglishDictionary />} />
        <Route path="/all-shortcuts" element={<AllShortcuts />} />
        <Route path="/all-emojis" element={<AllEmojis />} />
      </Routes>
    </Router>
  );
}

export default App;