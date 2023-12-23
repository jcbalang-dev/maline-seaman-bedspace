import * as React from "react";
// import "mdb-ui-kit/css/mdb.min.css";
// import "mdb-ui-kit/js/mdb.min.js";
import Head from "next/head";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}
