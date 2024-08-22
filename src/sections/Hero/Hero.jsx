import React, { useState, useEffect } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./HeroStyles.module.css";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  // Array of quotes - you can add more quotes here in the future
  const quotes = [
    "assembly ain't got shit on me. - rachel green",
    "you can't handle the regex. - jake peralta",
  ];

  // State to store the selected quote
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");

  // Select a random quote when the component mounts
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuoteOfTheDay(randomQuote);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <div className={styles.quoteContainer}>
        <blockquote className={styles.quote}>
        <span>Quote Of The Day: </span> "{quoteOfTheDay}"
        </blockquote>
        </div>
        <div className={styles.header}>
          <h1 className={styles.name}>
            Saeed Ghofrani
            <h2 className={styles.title}>(The Web Developer)</h2>
          </h1>
        </div>
        <p className={styles.description}>
          Hello! I'm Saeed Ghofrani, a passionate web developer with expertise in creating modern and efficient web applications using React. I specialize in delivering high-quality user experiences through clean and maintainable code. My goal is to leverage my skills to build innovative solutions that drive success for businesses and delight users.
        </p>
      </div>
    </section>
  );
}

export default Hero;