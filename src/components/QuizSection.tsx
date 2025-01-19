import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const QUIZ_SETS = {
  "lexicon": {
    name: "Gen Z Lexicon",
    questions: [
      {
        question: "What does the term 'sus' mean?",
        options: ["Suspicious", "Surprising", "Super", "Superficial"],
        correct: 0
      },
      {
        question: "What is 'bet' used to express?",
        options: ["Agreement or confirmation", "A wager", "Compliment", "Excitement"],
        correct: 0
      },
      {
        question: "'FOMO' stands for:",
        options: ["Fear of Missing Out", "Feelings of My Own", "Fear of Making Out", "Finding Our Missing Objects"],
        correct: 0
      },
      {
        question: "What does 'lit' mean in Gen Z slang?",
        options: ["Literal", "Boring", "Awesome or exciting", "Stressed"],
        correct: 2
      },
      {
        question: "'Cringe' refers to:",
        options: ["Something embarrassing or awkward", "Something very cool", "Something that makes you laugh", "A form of dance"],
        correct: 0
      },
      {
        question: "What does 'slay' mean?",
        options: ["To lose", "To do something excellently", "To argue", "To sleep"],
        correct: 1
      },
      {
        question: "'Stan' is a term used to mean:",
        options: ["To dislike", "To support enthusiastically", "To wait for", "To ignore"],
        correct: 1
      },
      {
        question: "'No cap' means:",
        options: ["No limits", "No exaggeration", "No lies", "No hat"],
        correct: 2
      },
      {
        question: "What does 'mood' imply in Gen Z language?",
        options: ["A style or vibe", "A state of mind", "A particular emotion or feeling", "A hobby"],
        correct: 0
      },
      {
        question: "'Flex' is used to describe:",
        options: ["A display of strength", "To boast or show off", "To relax", "A dance move"],
        correct: 1
      }
    ]
  },
  "memes": {
    name: "Gen Z Memes & Trends",
    questions: [
      {
        question: "The phrase 'Ok boomer' is often used to refer to:",
        options: ["Young people", "Older people with outdated views", "People who make great decisions", "Boomers only in the 80s"],
        correct: 1
      },
      {
        question: "The meme 'This ain't it, chief' means:",
        options: ["Something is perfect", "Disapproval of something", "Praise for someone's work", "Something irrelevant"],
        correct: 1
      },
      {
        question: "The 'Among Us' meme is most closely associated with:",
        options: ["Video games", "Cooking", "Shopping trends", "A fashion line"],
        correct: 0
      },
      {
        question: "'Yeet' is often used as:",
        options: ["An expression of excitement", "A term for throwing something with force", "A way to compliment", "A dance move"],
        correct: 1
      },
      {
        question: "The 'Vibe check' refers to:",
        options: ["Testing someone's mood", "Playing music", "Checking weather conditions", "Reviewing fashion trends"],
        correct: 0
      },
      {
        question: "'I'm baby' is an expression used to convey:",
        options: ["Being a child", "Being emotionally needy or cute", "Extreme confidence", "Anger"],
        correct: 1
      },
      {
        question: "What does 'Weird flex but okay' imply?",
        options: ["Approval of something strange", "Dismissal of an odd bragging statement", "Encouragement to show off", "Disappointment"],
        correct: 1
      },
      {
        question: "What was 'The Ice Bucket Challenge'?",
        options: ["A dance challenge", "A charity challenge to raise awareness for ALS", "A cooking challenge", "A meme with water"],
        correct: 1
      },
      {
        question: "What does 'Cancel culture' mean?",
        options: ["To forgive past mistakes", "Publicly boycotting or shunning a person or brand", "Apologizing publicly", "Celebrating someone's success"],
        correct: 1
      },
      {
        question: "'Simp' is used to describe someone who:",
        options: ["Is overly supportive or affectionate toward someone else", "Is unfriendly", "Acts selflessly for others", "Rejects relationships"],
        correct: 0
      }
    ]
  },
  "influencers": {
    name: "Gen Z Influencers & Pop Culture",
    questions: [
      {
        question: "Who is Charli D'Amelio?",
        options: ["A famous actor", "A TikTok dancer and influencer", "A YouTube star", "A singer"],
        correct: 1
      },
      {
        question: "'The Hype House' is associated with:",
        options: ["A YouTube group", "A reality TV show", "A group of influencers and TikTok stars", "A music band"],
        correct: 2
      },
      {
        question: "TikTok is primarily known for:",
        options: ["Cooking tutorials", "Short videos with lip-syncing, dances, and challenges", "Social networking", "Blogging"],
        correct: 1
      },
      {
        question: "The 'Renegade' dance went viral on TikTok, created by:",
        options: ["Addison Rae", "Charli D'Amelio", "Jalaiah Harmon", "Khabane Lame"],
        correct: 2
      },
      {
        question: "Who is Lil Nas X?",
        options: ["A famous chef", "A controversial rapper and social media personality", "A reality TV star", "A fashion designer"],
        correct: 1
      },
      {
        question: "'VSCO girl' refers to:",
        options: ["A style trend featuring eco-friendly and laid-back aesthetics", "A popular app for selfies", "A TikTok dance", "A popular YouTube channel"],
        correct: 0
      },
      {
        question: "What is 'Spill the tea'?",
        options: ["To share gossip or information", "To complain", "To tell a joke", "To reveal a secret recipe"],
        correct: 0
      },
      {
        question: "Who is Addison Rae?",
        options: ["A popular Instagram model", "A TikTok star who also acts", "A famous YouTube content creator", "A pop singer"],
        correct: 1
      },
      {
        question: "What does 'FYP' stand for on TikTok?",
        options: ["Your personal feed", "For your post", "For you page (TikTok's recommended page)", "First year post"],
        correct: 2
      },
      {
        question: "What is 'Savage Love'?",
        options: ["A popular meme", "A famous song by Jawsh 685 and Jason Derulo", "A viral TikTok challenge", "A trend for couples"],
        correct: 1
      }
    ]
  }
} as const;

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedSet, setSelectedSet] = useState<keyof typeof QUIZ_SETS>("lexicon"); // Changed from "general" to "lexicon"

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === QUIZ_SETS[selectedSet].questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < QUIZ_SETS[selectedSet].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleSetChange = (value: string) => {
    setSelectedSet(value as keyof typeof QUIZ_SETS);
    resetQuiz();
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-genz-purple/90 via-genz-pink/90 to-genz-orange/90 dark:from-genz-purple/80 dark:via-genz-pink/80 dark:to-genz-orange/80 text-white shadow-lg rounded-xl backdrop-blur-sm border border-white/20">
      <h2 className="text-2xl font-bold mb-6">Test Your Gen Z Knowledge!</h2>
      
      <div className="mb-6">
        <Select onValueChange={handleSetChange} value={selectedSet}>
          <SelectTrigger className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 transition-colors">
            <SelectValue placeholder="Select quiz set" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(QUIZ_SETS).map(([key, set]) => (
              <SelectItem key={key} value={key}>
                {set.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!showResults ? (
        <div className="space-y-4">
          <p className="text-lg mb-4 font-medium">{QUIZ_SETS[selectedSet].questions[currentQuestion].question}</p>
          <div className="grid grid-cols-1 gap-3">
            {QUIZ_SETS[selectedSet].questions[currentQuestion].options.map((option, index) => (
              <Button
                key={option}
                onClick={() => handleAnswer(index)}
                variant="outline"
                className="w-full text-left bg-white/10 hover:bg-white/20 border-white/30 transition-all duration-200 shadow-md hover:shadow-lg text-white font-medium py-4"
              >
                {option}
              </Button>
            ))}
          </div>
          <p className="text-sm mt-4">
            Question {currentQuestion + 1} of {QUIZ_SETS[selectedSet].questions.length}
          </p>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Quiz Complete! 🎉</h3>
          <p className="text-2xl">
            Your score: {score}/{QUIZ_SETS[selectedSet].questions.length}
          </p>
          <p className="text-lg">
            {score === QUIZ_SETS[selectedSet].questions.length
              ? "You're totally Gen Z! 🔥"
              : score >= QUIZ_SETS[selectedSet].questions.length / 2
              ? "Pretty good! You're getting there! 💪"
              : "Time to study up on your Gen Z slang! 📚"}
          </p>
          <Button 
            onClick={resetQuiz} 
            className="mt-4 bg-white/20 hover:bg-white/30 transition-colors shadow-md hover:shadow-lg border border-white/30"
          >
            Try Again
          </Button>
        </div>
      )}
    </Card>
  );
};
