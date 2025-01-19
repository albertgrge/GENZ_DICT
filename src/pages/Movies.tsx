import { MovieRecommendations } from "@/components/MovieRecommendations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Movies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-genz-purple to-genz-pink text-transparent bg-clip-text">
          Gen Z Movie & Series Guide
        </h1>
        <MovieRecommendations />
      </div>
    </div>
  );
};

export default Movies;