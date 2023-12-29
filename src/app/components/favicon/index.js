import Head from "next/head";

const Favicon = () => {
  const faviconImage = "/images/website/icon/logo.ico";
  return (
    <Head>
      <link rel="icon" href={faviconImage} />
    </Head>
  );
};

export default Favicon;
