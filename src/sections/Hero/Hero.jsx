import CV from '../../assets/cv.pdf';
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
      </div>
    </section>
  );
}

export default Hero;