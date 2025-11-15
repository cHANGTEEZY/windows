import Footer from "@/components/footer";
import { url } from "inspector";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-screen -z-10"
      style={{ backgroundImage: `url('/assets/windows7-bg.jpg')` }}
    >
      <main>{children}</main>
      <Footer />
    </div>
  );
}
