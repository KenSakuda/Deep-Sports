import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Sheet>{children}</Sheet>;
    </div>
  );
}
