import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Sub({ children, className }: Props) {
  return <div className={`${styles.sub} ${className || ""}`}>{children}</div>;
}
