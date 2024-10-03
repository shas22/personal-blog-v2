import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway } from 'next/font/google'
import './globals.css'
import NavBar from "./components/ui/navBar";
import Footer from "./components/ui/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const maison = localFont({
  src: "./fonts/MaisonNeue-Light.ttf",
  variable: '--font-maison',
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-raleway',
})

// const mandali = Mandali({
//   weight: '400',
//   subsets: ["latin"]
// })

export const metadata: Metadata = {
  title: "Blog SV",
  description: "Created by Shas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${maison.variable} ${raleway.variable} antialiased`}
      >
        <NavBar />
        <div className="relative flex min-h-dvh flex-col bg-neutral-900 dark:text-white">

          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>

    </html>
  );
}
