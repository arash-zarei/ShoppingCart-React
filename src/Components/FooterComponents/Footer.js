import React from "react";

//CSS
import styles from "./Footer.module.css";

//Logo Font
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="https://www.instagram.com/arashzarei.js/" target="_blank">
          <Unicons.UilInstagram />
        </a>
        <a href="https://t.me/arashzarei_js" target="_blank">
          <Unicons.UilTelegram />
        </a>
        <a href="https://github.com/arashzareiJS" target="_blank">
          <Unicons.UilGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/arash-zarei-60867b231/"
          target="_blank"
        >
          <Unicons.UilLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
