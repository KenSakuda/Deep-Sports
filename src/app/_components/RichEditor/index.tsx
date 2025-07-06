import styles from "./index.module.css";

type Props = {
  content: string;
};

export default function RichEditor({ content }: Props) {
  return (
    <div
      className={styles.richEditor}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
