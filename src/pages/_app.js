import "../styles/globals.css";
import { React, useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// mdb ui kit
import "mdb-ui-kit/css/mdb.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <Component {...pageProps} />;
}
