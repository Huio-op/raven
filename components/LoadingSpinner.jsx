import React from "react";
import styles from "../styles/loading.module.css";

export default function LoadingSpinner() {
  return (
    <div className={`${styles.spinnerContainer}`}>
      <div className={`${styles.loadingSpinner}`}>
      </div>
    </div>
  );
}