import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar/Navbar";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
export const myFont = localFont({
  src: './geist_medium.otf',
  variable: '--font-myFont', // Define a CSS variable for the font
  weight: '400', // Specify font-weight if needed
  style: 'normal', // Specify font-style if needed
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={myFont.variable}>
          {children}
        </div></body>
    </html>
  );
}
