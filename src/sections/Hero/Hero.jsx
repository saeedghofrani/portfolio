import React, { useState, useEffect } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./HeroStyles.module.css";

function Hero() {

  // Array of quotes - you can add more quotes here in the future
  const quotes = [
    "assembly ain't got shit on me. - rachel green",
    "you can't handle the regex. - jake peralta",
    "Could I be any more out of memory? - Chanandler Bung",
    "Pivot! Pivot your data structures! - Ross Geller",
    "You can’t just Ctrl+C your problems away. - Leslie Knope",
    "Smelly code, smelly code, what are they feeding you? - Phoebe Buffay",
    "How you doin’… with that API integration? - Joey Tribbiani",
    "This code is a Moo Point, it's like a cow's opinion, it doesn’t matter. - Joey Tribbiani",
    "Just when I thought I was out… they pull me back into the debugger. - George Costanza",
    "It's not a bug, it's a feature. - Tony Stark",
    "May the source be with you. - Obi-Wan Kenobi",
    "Sometimes even God ask's me, What the fuck is that. - deadpool",
    "I'm not in danger, Skyler. I am the one who create the Bug's. - Walter White",
    "That's one small step for a junior, one giant Debugging for the senior. - Neil Armstrong",
    "How The Fuck Is That Working. - Mark Zuckerberg",
    "Why The Fuck That Didn't Work. - Mark Zuckerberg",
    "It's Working On My System. - Elon Musk",
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
            <h2 className={styles.title}>
              Back End Developer | Expert in Node.js | Dedicated to Excellence
            </h2>
          </h1>
        </div>
        <p className={styles.description}>
          Hello! I'm Saeed Ghofrani, Backend Engineer with more than 3 years of
          experience building scalable web applications. Skilled in server-side
          programming and passionate about contributing to innovative projects
          at a forward-thinking company. #nerd #crazy-developer #nightmare-of-bugs
        </p>
      </div>
    </section>
  );
}

export default Hero;
