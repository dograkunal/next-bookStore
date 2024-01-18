import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Library",
  description: "Tech Courses and Books",
  keywords:
    "passive income, small bets, tech courses, tech books, tech tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 mx-auto p-4`}
      >
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-slate-700 text-xl">
              Book Library
            </Link>
          </div>
          <div className="flex-none text-slate-900 mr-5">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <details>
                  <summary>More</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <Link href="/about/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/githubusers">Github Users</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
