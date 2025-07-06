// import { getPickup } from "@/app/_libs/microcms";
// import { RANKING_LIMIT } from "@/app/_constants";
// import List from "@/app/_components/List";
// import styles from "./index.module.css";

// type Props = {
//   draftKey?: string;
// };

// export default async function Predict({ draftKey }: Props) {
//   const data = await getPickup({
//     limit: RANKING_LIMIT,
//     draftKey,
//   }).catch(() => ({ articles: [] }));
//   const articles = data.articles;
//   return (
//     <div>
//       <h2 className={styles.sectionTitle}>予測モデル結果</h2>
//       {articles.length === 0 ? (
//         <p>記事がありません。</p>
//       ) : (
//         <ul>
//           {articles.map((article) => (
//             <li key={article.id}>
//               <List article={article} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { getRanking } from "@/app/_libs/microcms";
import { RANKING_LIMIT } from "@/app/_constants";
import List from "@/app/_components/List";
import styles from "./index.module.css";
type Props = {
  draftKey?: string;
};
export default async function Ranking({ draftKey }: Props) {
  const data = await getRanking({
    limit: RANKING_LIMIT,
    draftKey,
  }).catch(() => ({ articles: [] }));
  const articles = data.articles;
  return (
    <div className={styles.rankingContainer}>
      <h2 className={styles.sectionTitle}>予測モデル結果</h2>
      {articles.length === 0 ? (
        <p>記事がありません。</p>
      ) : (
        <ul className={styles.rankingList}>
          {articles.map((article, index) => (
            <li
              key={article.id}
              className={`${styles.rankingItem} ${
                index < 3 ? styles.topRanking : styles.normalRanking
              }`}
            >
              <span
                className={`${styles.rankNumber} ${
                  index === 0
                    ? styles.first
                    : index === 1
                    ? styles.second
                    : index === 2
                    ? styles.third
                    : styles.other
                }`}
              >
                {index + 1}
              </span>
              <List article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
