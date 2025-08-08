import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"faq" | "terms" | "privacy" | "contact" | "acknowledgment">("faq");

  const renderModalContent = () => {
    switch (modalContent) {
      case "faq":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
            <div className="text-gray-600">
              <h4 className="font-semibold">General Questions</h4>
              <p>What is the Your Gen Z Dictionary app?</p>
              <p>The Your Gen Z Dictionary app is a fun and interactive tool designed to help you understand and use popular Gen Z slang, emojis, and cultural references.</p>
              
              <h4 className="font-semibold mt-4">Who is this app for?</h4>
              <p>This app is for anyone who wants to decode Gen Z lingo, whether you&apos;re a parent, teacher, coworker, or even a curious Gen Z-er.</p>
              
              <h4 className="font-semibold mt-4">Is the content updated regularly?</h4>
              <p>Yes! We frequently update the app with the latest slang, emojis, and trends to keep you in the loop.</p>
              
              <h4 className="font-semibold mt-4">Features</h4>
              <p>- Search for specific slang terms</p>
              <p>- Explore emoji meanings</p>
              <p>- Learn trending phrases</p>
              <p>- View example sentences</p>
            </div>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Terms of Use</h3>
            <div className="text-gray-600">
              <h4 className="font-semibold">1. Introduction</h4>
              <p>Welcome to the Gen Z Dictionary app! By using our app, you agree to these terms. If you do not agree, please refrain from using the app.</p>
              
              <h4 className="font-semibold mt-4">2. Eligibility</h4>
              <p>To use this app, you must be at least 13 years old. If you&apos;re under 18, you must have permission from a parent or guardian.</p>
              
              <h4 className="font-semibold mt-4">3. License to Use the App</h4>
              <p>We grant you a limited, non-exclusive, and non-transferable license to use the app for personal, non-commercial purposes.</p>
            </div>
          </div>
        );
      case "privacy":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Privacy Policy</h3>
            <div className="text-gray-600">
              <h4 className="font-semibold">Information We Collect</h4>
              <p>Personal Information: Name, email address (if provided during registration or feedback).</p>
              <p>Usage Data: Information about how you use the app, such as search history and favorite terms.</p>
              <p>Device Data: Technical details like device type, operating system, and app version.</p>
              
              <h4 className="font-semibold mt-4">How We Use Your Information</h4>
              <p>We use your information to improve app functionality and user experience, personalize content recommendations, and communicate updates.</p>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="text-gray-600">
              Hello! I&apos;m Albert George, a passionate problem solver who spends his days immersed in code, 
              mathematical puzzles, and intellectual challenges. When I&apos;m not tangled in algorithms, you&apos;ll find me 
              exploring new places or gazing at the stars, marveling at the universe. Contact me on the following mail: mahatirtusher@gmail.com
            </p>
          </div>
        );
      case "acknowledgment":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Acknowledgment</h3>
            <p className="text-gray-600">
              I would like to express my heartfelt gratitude to Albert George for her unwavering support 
              and encouragement throughout the development of Gen Z Dictionary Version 2. Her insightful suggestions, 
              motivating words, and constant belief in my abilities played a pivotal role in pushing me to refine and 
              enhance the project. Without her encouragement, this version would not have come to life in the way it has. 
              Thank you for being an integral part of this journey and for always inspiring me to reach greater heights.
            </p>
          </div>
        );
    }
  };

  return (
    <footer className="mt-16 py-8 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 quick-links">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => {
                    setModalContent("faq");
                    setIsOpen(true);
                  }}
                  className="hover:text-purple-600"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalContent("terms");
                    setIsOpen(true);
                  }}
                  className="hover:text-purple-600"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalContent("privacy");
                    setIsOpen(true);
                  }}
                  className="hover:text-purple-600"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalContent("contact");
                    setIsOpen(true);
                  }}
                  className="hover:text-purple-600"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalContent("acknowledgment");
                    setIsOpen(true);
                  }}
                  className="hover:text-purple-600"
                >
                  Acknowledgment
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2025 Your Gen Z Dictionary. All rights reserved. Developed by Albert George
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{modalContent.toUpperCase()}</DialogTitle>
          </DialogHeader>
          {renderModalContent()}
        </DialogContent>
      </Dialog>
    </footer>
  );
};