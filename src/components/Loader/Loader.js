import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

export const CustomLoader = () => {
  return (
    <Loader
      className={styles.Loader}
      type="Rings"
      color="#00FA9A"
      height={800}
      width={900}
      timeout={3000}
    />
  );
};
