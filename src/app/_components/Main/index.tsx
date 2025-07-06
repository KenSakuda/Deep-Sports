import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Main({ children, className }: Props) {
  return (
    <main className={`${styles.main} ${className || ""}`}>{children}</main>
  );
}
