import Head from "next/head";
import Layout from "./Layout";

export default function HMSLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <div className="content">{children}</div>
        <Layout />
      </div>
    </>
  );
}
