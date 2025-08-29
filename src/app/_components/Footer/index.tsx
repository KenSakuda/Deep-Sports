import styles from "./index.module.css";
import Link from "next/link";
import { FaXTwitter, FaInstagram } from "react-icons/fa6"; //FaYoutube

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>OTHERS</h4>
          <ul className={styles.itemList}>
            <li className={styles.item}>
              <Link href="/ads">広告掲載について</Link>
            </li>
            <li className={styles.item}>
              <Link href="/sitepolicy">サイトポリシー</Link>
            </li>
            <li className={styles.item}>
              <Link href="/commic-entries">漫画原稿募集</Link>
            </li>
            <li className={styles.item}>
              <Link href="/contact">お問い合わせ</Link>
            </li>
            <li className={styles.item}>
              <Link href="https://www.b-mystory.com">運営会社について</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>FOLLOW US</h4>
          <ul className={styles.itemList}>
            <li className={styles.item}>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className={styles.icon} />
                <span>X（旧:Twitter）</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="https://www.instagram.com/deepsports_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.icon} />
                <span>Instagram</span>
              </Link>
            </li>
            {/* <li className={styles.item}>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className={styles.icon} />
                <span>YouTube</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className={styles.copyright}>
        <p>© 2025 MyStory Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
