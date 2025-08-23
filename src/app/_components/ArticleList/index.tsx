// import styles from "./index.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import Category from "../Category";
// import Date from "../Date";
// import { Article } from "@/app/_libs/microcms";

// type Props = {
//   article: Article[];
//     isLarge?: boolean;
// };

// export default function ArticleList({ article }: Props) {
//   if (article.length === 0) {
//     return <p>記事は準備中になります。<br/>
//     アップロードまで楽しみにお待ちください。</p>;
//   }
//   return (
//     <ul>
//       {article.map((articles) => (
//         <li key={articles.id} className={styles.list}>
//           <Link href={`/articles/${articles.id}`} className={styles.link}>
//             {articles.thumbnail ? (
//               <Image
//                 src={articles.thumbnail.url}
//                 alt=""
//                 className={styles.image}
//                 width={1200}
//                 height={630}
//               />
//             ) : (
//               <Image
//                 className={styles.image}
//                 src="/no-image.png"
//                 alt="No Image"
//                 width={1200}
//                 height={630}
//               />
//             )}
//             <dl className={styles.content}>
//               <dt className={styles.title}>{articles.title}</dt>
//               <dd className={styles.meta}>
//                 <Category category={articles.category} />
//                 <Date date={articles.date} />
//               </dd>
//             </dl>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import { Article } from "@/app/_libs/microcms";

type Props = {
  article: Article[];
  /** true の場合、配列の先頭（index=0）のみワイド表示 */
  isLarge?: boolean;
};

export default function ArticleList({ article, isLarge }: Props) {
  if (!article || article.length === 0) {
    return (
      <p className={styles.empty}>
        記事は準備中になります。
        <br />
        アップロードまで楽しみにお待ちください。
      </p>
    );
  }

  return (
    <ul className={styles.listWrapper}>
      {article.map((a, index) => {
        const large = Boolean(isLarge && index === 0);

        return (
          <li
            key={a.id}
            className={`${styles.list} ${large ? styles.large : ""}`}
          >
            <Link href={`/articles/${a.id}`} className={styles.link}>
              {/* サムネイル */}
              <div
                className={`${styles.thumb} ${large ? styles.thumbLarge : ""}`}
              >
                <Image
                  src={a.thumbnail?.url ?? "/no-image.png"}
                  alt={a.title}
                  fill
                  className={styles.image}
                  sizes={
                    large
                      ? "(max-width: 1024px) 100vw, 750px"
                      : "(max-width: 640px) 100vw, 260px"
                  }
                  priority={index === 0}
                />
              </div>

              {/* テキスト */}
              <dl className={styles.content}>
                <dt
                  className={`${styles.title} ${
                    large ? styles.titleLarge : ""
                  }`}
                >
                  {a.title}
                </dt>
                <dd className={styles.meta}>
                  <Category category={a.category} />
                  <Date date={a.date} />
                </dd>
                {a.description && !large && (
                  <dd className={styles.excerpt}>{a.description}</dd>
                )}
              </dl>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
