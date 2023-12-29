import React from "react";
import * as styles from "../../../../styles/splash.module.css";
import Image from "next/image";

const Splash = () => {
  return (
    <>
      <div className={styles.splashContainer} />
      <Image
        src={"/images/website/logo/logo.png"}
        className={styles.splashLogo}
      />
    </>
  );
};

export default Splash;
