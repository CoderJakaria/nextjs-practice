import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header /> {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
