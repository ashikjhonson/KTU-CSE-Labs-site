import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KTU Labs",
  description: "Site for KTU-CSE lab programs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className="flex flex-col justify-between align-middle min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
