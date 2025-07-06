// import { getRanking } from "@/app/_libs/microcms";
// import { RANKING_LIMIT } from "@/app/_constants";
// import List from "@/app/_components/List";
// import styles from "./index.module.css";
// import Image from "next/image";
// type Props = {
//   draftKey?: string;
// };
// export default async function Ranking({ draftKey }: Props) {
//   const data = await getRanking({
//     limit: RANKING_LIMIT,
//     draftKey,
//   }).catch(() => ({ articles: [] }));
//   const articles = data.articles;
//   return (
//     <div className={styles.rankingContainer}>
//       <h2 className={styles.sectionTitle}>週間ランキング</h2>
//       {articles.length === 0 ? (
//         <p>記事がありません。</p>
//       ) : (
//         <ul className={styles.rankingList}>
//           {articles.map((article, index) => (
//             <li
//               key={article.id}
//               className={`${styles.rankingItem} ${
//                 index < 3 ? styles.topRanking : styles.normalRanking
//               }`}
//             >
//               {/* 1~3位は王冠アイコンを表示 */}
//               {index < 3 ? (
//                 <Image
//                   src={
//                     index === 0
//                       ? "/crown-gold.svg"
//                       : index === 1
//                       ? "/crown-silver.svg"
//                       : "/crown-bronze.svg"
//                   }
//                   alt={`${index + 1}位`}
//                   width={24}
//                   height={24}
//                   className={styles.rankIcon}
//                 />
//               ) : (
//                 // 4位以降は通常の丸い順位表示
//                 <span className={`${styles.rankNumber} ${styles.other}`}>
//                   {index + 1}
//                 </span>
//               )}
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
      <h2 className={styles.sectionTitle}>週間ランキング</h2>
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
