import { Tagtype } from "@/app/_libs/microcms";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  tag: Tagtype;
};

export default function Tag({ tag }: Props) {
  return (
    <Link href={`/tag/${tag.id}`} className={styles.tag}>
      #{tag.name}
    </Link>
  );
}
