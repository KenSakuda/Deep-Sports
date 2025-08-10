// import { Article } from "@/app/_libs/microcms";
// import Card from "@/app/_components/Card";
// import styles from "./index.module.css";

// type Props = {
//   articles: Article[];
// };

// export default function Cards({ articles }: Props) {
//   if (articles.length === 0) {
//     return <p>記事がありません。</p>;
//   }
//   return (
//     <ul className={styles.cards}>
//       {articles.map((article) => (
//         <li key={article.id}>
//           <Card article={article} />
//         </li>
//       ))}
//     </ul>
//   );
// }

"use client";

import styles from "./index.module.css";
import { Article } from "@/app/_libs/microcms";
import Card from "../Card";
import FeaturedCard from "@/app/_components/FeaturedCard";

type Props = {
  articles: Article[];
};

export default function Cards({ articles }: Props) {
  const featured = articles.slice(0, 4);
  const normal = articles.slice(4);

  return (
    <>
      <div className={styles.featuredGrid}>
        {featured.map((article) => (
          <FeaturedCard key={article.id} article={article} />
        ))}
      </div>
      <div className={styles.normalGrid}>
        {normal.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
