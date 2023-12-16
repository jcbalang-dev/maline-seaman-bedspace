import * as React from "react";
// import "mdb-ui-kit/css/mdb.min.css";
// import "mdb-ui-kit/js/mdb.min.js";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}