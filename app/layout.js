import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";
import Footer from "./components/footer";
import "../styles/index.css";
import "../styles/globals.css";

import { Sora } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "red",
          colorText: "white",
        },
      }}
    >
      <html lang="en" className={sora.className}>
        <body className="w-full px-8">
          {/*className="w-full bg-blue-500 mx-auto"*/}
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
