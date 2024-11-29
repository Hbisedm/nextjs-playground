import { BackButton } from "@/components/client/BackButton";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

  return (
    <div>
      <BackButton/>
      <h1>Settings Layout</h1>
      {children}
    </div>
  );

}