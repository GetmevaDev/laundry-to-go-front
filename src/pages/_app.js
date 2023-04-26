import { Rubik } from "@next/font/google";

import "boxicons/css/boxicons.min.css";
import "@/styles/globals.scss";

export const rubick = Rubik({
  weight: ["300", "500", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${rubick.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
