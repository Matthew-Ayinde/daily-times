import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const HKGrotesk = localFont({
  src: [
    { path: "../../font/HKGrotesk-Light.otf", weight: "300", style: "light" },
    {
      path: "../../font/HKGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    { path: "../../font/HKGrotesk-Medium.otf", weight: "500", style: "medium" },
    {
      path: "../../font/HKGrotesk-SemiBold.otf",
      weight: "600",
      style: "semibold",
    },
    { path: "../../font/HKGrotesk-Bold.otf", weight: "700", style: "bold" },
    {
      path: "../../font/HKGrotesk-ExtraBold.otf",
      weight: "800",
      style: "extrabold",
    },
    { path: "../../font/HKGrotesk-Black.otf", weight: "900", style: "black" },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${HKGrotesk.className} font-sans`}
        suppressHydrationWarning={true}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
