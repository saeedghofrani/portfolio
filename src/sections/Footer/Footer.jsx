import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Saeed Ghofrani. All rights reserved.<br />
      </p>
    </section>
  );
}

export default Footer;
