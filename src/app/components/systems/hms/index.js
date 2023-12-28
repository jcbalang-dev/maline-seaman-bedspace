import Head from "next/head";

export default function HMSLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
