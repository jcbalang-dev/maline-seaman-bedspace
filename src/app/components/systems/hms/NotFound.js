import React from "react";
import * as styles from "../../../../styles/not-found.module.css";
import Logo from "../../Logo";
const { Button } = require("antd");
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Logo className={styles.notFoundLogo} />
      <span className={styles.notFoundFirstAppTitle}>
        MALINE'S BEDSPACE SEAMAN'S
      </span>
      <p className={styles.notFoundSecondAppTitle}>DORMITORY & TRANSIENT INN</p>

      <div className={styles.notFoundContainer} />
      <div className={styles.notFoundHeaderContainer}>
        <h1 className={styles.notFoundHeader}>
          40 <span className={styles.notFoundRotationContainer}>4</span>
        </h1>
      </div>
      <div className={styles.pageNotFound}>
        <h3>Oops! Page not found</h3>
      </div>
      <p className={styles.notFoundParagraph}>
        The page you are looking for might have been removed or
      </p>
      <p className={styles.notFoundTemporarilyContainer}>
        temporarily unavailable.
      </p>
      <div className={styles.notFoundButtonContainer}>
        <Link href="/">
          <a>
            <Button className={styles.notFoundButton}>Back to HomePage</Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
