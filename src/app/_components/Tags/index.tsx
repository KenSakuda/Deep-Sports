import { Tagtype } from "@/app/_libs/microcms";
import Tag from "@/app/_components/Tag";
import styles from "./index.module.css";

type Props = {
  tags: Tagtype[];
};

export default function Tags({ tags }: Props) {
  if (!tags?.length) return null;
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id} className={styles.item}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
}
