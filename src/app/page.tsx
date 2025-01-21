import Image from "next/image";
import styles from "./page.module.css";
import localFont from 'next/font/local';
import instagramIcon from "./images/instagram.png";
import emailIcon from "./images/email.png";
import facebookIcon from "./images/facebook.png";
import Link from "next/link";

const chantalFont = localFont({
  src: './fonts/Chantal.ttf',
})

export default function Home() {
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Dusty Flyer's logo"
          width={320}
          height={255}
          priority
        />
        <h2 className={`${chantalFont.className} ${styles.subtitle}`}>The ride of your life, guaranteed</h2>
        <div className={styles.iconContainer}>
            <Link
              href="https://www.instagram.com/dustyflyersclub/"
              target="_blank"
              rel="noreferrer"
            >
              <Image className={styles.icon} src={instagramIcon} alt="Instagram Icon" />
            </Link>
            <Link
              href="https://www.facebook.com/dustyflyersclub/"
              target="_blank"
              rel="noreferrer"
            >
              <Image className={styles.icon}  src={facebookIcon} alt="Facebook Icon" />
            </Link>
            <Link
              href="mailto:info@dustyflyersclub.club"
              target="_blank"
              rel="noreferrer"
            >
              <Image className={styles.emailIcon}  src={emailIcon} alt="Email Icon" />
            </Link>
          </div>
        </div>
      <div className={styles.bgImg}>
    </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
