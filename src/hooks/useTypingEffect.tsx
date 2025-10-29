import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  shouldStart?: boolean;
}

export const useTypingEffect = ({ text, speed = 50, shouldStart = true }: UseTypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!shouldStart || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, shouldStart]);

  useEffect(() => {
    if (shouldStart) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [shouldStart, text]);

  return displayedText;
};

