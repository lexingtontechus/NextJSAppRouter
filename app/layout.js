import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";
import Footer from "./components/footer";
import "../styles/index.css";
import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: {
    default: "Next.js App Router Template",
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
      <html lang="en">
        <body>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
