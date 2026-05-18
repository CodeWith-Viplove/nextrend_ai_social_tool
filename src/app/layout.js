import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "DevPulse AI - Tech trends to viral content",
  description: "Monitors tech trends and turns them into platform-ready scripts, posts, and threads.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black font-sans">{children}</body>
    </html>
  );
}
