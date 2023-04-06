import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";

import "../styles/index.css";
import "../styles/globals.css";

export const metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="w-full bg-primary-500 mx-auto">
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
