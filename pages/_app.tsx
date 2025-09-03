import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import Curve from "@/components/Curve/Curve"; // import transition wrapper

export default function App({
  Component,
  pageProps,
  router,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {/* Wrap every page with Curve */}
        <Curve key={router.route} backgroundColor="#f1f1f1">
          <Component {...pageProps} />
        </Curve>
      </AnimatePresence>
      <Footer />
    </>
  );
}
