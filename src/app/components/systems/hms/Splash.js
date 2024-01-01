import React from "react";
import * as styles from "../../../../styles/splash.module.css";
import Logo from "../../Logo";
import SplashListener from "../SplashListener";

const Splash = () => {
  SplashListener();

  return (
    <>
      <div className={styles.splashContainer} onClick={SplashListener} />
      <Logo className={styles.splashLogo} />
    </>
  );
};

export default Splash;
