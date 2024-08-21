import CV from '../../assets/cv.pdf';
import githubIcon from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';
import twitterIcon from '../../assets/twitter-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';
import React from "react";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <div className={styles.header}>
          <h1 className={styles.name}>Saeed Ghofrani <h2 className={styles.title}>(The Web Developer)</h2></h1>
        </div>
        <p className={styles.description}>
          Hello! I'm Saeed Ghofrani, a passionate web developer with expertise in creating modern and efficient web applications using React. I specialize in delivering high-quality user experiences through clean and maintainable code. My goal is to leverage my skills to build innovative solutions that drive success for businesses and delight users.
        </p>
        <div className={styles.socialLinks}>
          <a className={styles.button} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img  src={twitterIcon} alt="Twitter icon" />
          </a>
          <a className={styles.button} href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a className={styles.button} href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;