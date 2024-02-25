import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Times Website",
  description: "Daily times new website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TanstackProvider>
          {/* <Navbar /> */}

          <main>{children}</main>

          {/* <Footer /> */}
        </TanstackProvider>
      </body>
    </html>
  );
}
