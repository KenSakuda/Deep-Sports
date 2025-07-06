import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import SearchField from "@/app/_components/SearchField";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo_Deep Sports.png"
          alt="Deep Sports"
          className={styles.logo}
          width={240}
          height={50}
          priority
        />
      </Link>
      <div className={styles.searchWrapper}>
        <SearchField />
      </div>
    </header>
  );
}
