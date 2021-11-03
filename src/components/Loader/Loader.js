import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

export const CustomLoader = () => {
  return (
    <Loader
      className={styles.Loader}
      type="ThreeDots"
      color="#27BF2B"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};
