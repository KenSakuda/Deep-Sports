import { getPickup } from "@/app/_libs/microcms";
import { RANKING_LIMIT } from "@/app/_constants";
import List from "@/app/_components/List";
import styles from "./index.module.css";

type Props = {
  draftKey?: string;
};

export default async function Pickup({ draftKey }: Props) {
  const data = await getPickup({
    limit: RANKING_LIMIT,
    draftKey,
  }).catch(() => ({ articles: [] }));
  const articles = data.articles;
  return (
    <div>
      <h2 className={styles.sectionTitle}>ピックアップ</h2>
      {articles.length === 0 ? (
        <p>記事がありません。</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <List article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
