import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "two" | "one";
  className?: string;
};

export default function Sheet({ children, variant = "two", className }: Props) {
  return (
    <div
      className={[
        styles.sheet,
        variant === "one" ? styles.one : "",
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
