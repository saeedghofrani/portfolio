import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const HeroSection: React.FC = () => {
  const [shouldStartName, setShouldStartName] = useState(false);
  const [shouldStartTitle, setShouldStartTitle] = useState(false);
  const [shouldStartDescription, setShouldStartDescription] = useState(false);

  const quoteText =
    '"Code is like humor. When you have to explain it, it\'s bad." - Cory House';
  const nameText = "Saeed Ghofrani";
  const titleText = "Software Engineer";
  const descriptionText =
    "Backend Development Expert | Node.js Specialist | Building Scalable Solutions";

  const shouldStartQuote = true;
  const typedQuote = useTypingEffect({
    text: quoteText,
    speed: 30,
    shouldStart: shouldStartQuote,
  });
  const typedName = useTypingEffect({
    text: nameText,
    speed: 100,
    shouldStart: shouldStartName,
  });
  const typedTitle = useTypingEffect({
    text: titleText,
    speed: 100,
    shouldStart: shouldStartTitle,
  });
  const typedDescription = useTypingEffect({
    text: descriptionText,
    speed: 30,
    shouldStart: shouldStartDescription,
  });

  useEffect(() => {
    if (shouldStartQuote && typedQuote === quoteText) {
      setTimeout(() => setShouldStartName(true), 300);
    }
  }, [typedQuote, quoteText, shouldStartQuote]);

  useEffect(() => {
    if (shouldStartName && typedName === nameText) {
      setTimeout(() => setShouldStartTitle(true), 300);
    }
  }, [typedName, nameText, shouldStartName]);

  useEffect(() => {
    if (shouldStartTitle && typedTitle === titleText) {
      setTimeout(() => setShouldStartDescription(true), 300);
    }
  }, [typedTitle, titleText, shouldStartTitle]);

  return (
    <section className="py-16 px-8 text-gray-100">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="hero-title mb-6 text-white">
          {typedName}
          {shouldStartName && typedName !== nameText && (
            <span className="animate-pulse">|</span>
          )}
        </h1>
        <h2 className="hero-subtitle mb-6 text-emerald-400">
          {typedTitle}
          {shouldStartTitle && typedTitle !== titleText && (
            <span className="animate-pulse">|</span>
          )}
        </h2>
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="text-3xl md:text-5xl text-gray-300 italic pl-8 py-8 bg-gray-800/30 backdrop-blur-sm ">
            {typedQuote}
            {shouldStartQuote && typedQuote !== quoteText && (
              <span className="animate-pulse">|</span>
            )}
          </div>
        </div>
        <p className="text-xl mb-8 text-gray-300">
          {typedDescription}
          {shouldStartDescription && typedDescription !== descriptionText && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
