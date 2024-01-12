import "../styles/globals.css";
import { React, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// mdb ui kit
import "mdb-ui-kit/css/mdb.min.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </>
  );
}

export default App;
