import * as React from "react";
import "mdb-ui-kit/css/mdb.min.css";
import Head from "next/head";

import Footer from "../footer";
import NavigationMenu from "../navigation-menu";

export default function SimpleLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <NavigationMenu />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}
