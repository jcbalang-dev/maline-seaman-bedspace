import * as React from "react";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import Footer from "../footer";
import NavigationMenu from "../navigation-menu";

export default function SimpleLayout({ children }) {
  return (
    <div className="layout">
      <NavigationMenu />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}