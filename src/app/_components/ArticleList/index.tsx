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
  isLarge?: boolean; // 追加済
};

export default function ArticleList({ article, isLarge }: Props) {
  if (article.length === 0) {
    return (
      <p>
        記事は準備中になります。
        <br />
        アップロードまで楽しみにお待ちください。
      </p>
    );
  }
  return (
    <ul>
      {article.map((articles, index) => (
        <li
          key={articles.id}
          className={`${styles.list} ${
            isLarge && index === 0 ? styles.large : ""
          }`}
        >
          <Link href={`/articles/${articles.id}`} className={styles.link}>
            {articles.thumbnail ? (
              <Image
                src={articles.thumbnail.url}
                alt=""
                className={styles.image}
                width={1200}
                height={630}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{articles.title}</dt>
              <dd className={styles.meta}>
                <Category category={articles.category} />
                <Date date={articles.date} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
