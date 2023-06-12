import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";

import { Rubik } from "@next/font/google";

import "boxicons/css/boxicons.min.css";
import "@/styles/globals.scss";

export const rubick = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main className={`${rubick.variable}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.65,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size"
        >
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6QCMGD');
          `}
          </Script>

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
