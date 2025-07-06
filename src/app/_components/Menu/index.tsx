import Link from "next/link";
import styles from "./index.module.css";
import { getAllCategoryList } from "@/app/_libs/microcms";
import { Category } from "@/app/_libs/microcms";

export default async function Menu() {
  const categories: Category[] = await getAllCategoryList();

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <ul className={styles.categoryList}>
          <li className={styles.categoryItem}>
            <Link href="/articles" className={styles.categoryLink}>
              すべて
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className={styles.categoryItem}>
              <Link
                href={`/articles/category/${category.id}`}
                className={styles.categoryLink}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span className={styles.scrollHint}>→</span>
    </div>
  );
}
