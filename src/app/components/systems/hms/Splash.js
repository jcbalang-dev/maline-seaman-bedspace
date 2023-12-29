import React from "react";
import * as styles from "../../../../styles/splash.module.css";
import Image from "next/image";
import Logo from "../../Logo";

const Splash = () => {
  return (
    <>
      <div className={styles.splashContainer} />
      <Logo className={styles.splashLogo} />
    </>
  );
};

export default Splash;
