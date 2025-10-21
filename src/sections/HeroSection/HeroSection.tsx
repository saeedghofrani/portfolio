import { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const quotes: string[] = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "The function of a good software is to make the complex appear simple. – Grady Booch",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. – Bill Gates",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "In order to be irreplaceable one must always be different. – Coco Chanel",
  ];

  const [quoteOfTheDay, setQuoteOfTheDay] = useState<string>("");

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuoteOfTheDay(randomQuote);
  }, []);

  const handleDownload = () => {
    const filePath = "/assets/cv.pdf";
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'saeed-ghofrani-ivari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-10">
          {/* Professional Headshot - Placeholder for now */}
          <img
            src="https://via.placeholder.com/150"
            alt="Saeed Ghofrani"
            className="mx-auto rounded-full w-36 h-36 object-cover border-4 border-blue-500 shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Saeed Ghofrani
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Backend Developer | Node.js Expert | Architecting Scalable Solutions
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Innovating and building robust, high-performance backend systems with a passion for clean code and scalable architecture.
          </p>
        </div>

        <div className="mb-10">
          <blockquote className="text-2xl italic text-gray-800 dark:text-gray-200 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
            <span className="font-bold text-blue-600 dark:text-blue-400">Quote Of The Day: </span> <q>{quoteOfTheDay}</q>
          </blockquote>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out uppercase tracking-wider"
          >
            Get In Touch
          </a>
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-gray-700 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-800 transform hover:scale-105 transition duration-300 ease-in-out uppercase tracking-wider"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
