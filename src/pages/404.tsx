import React from "react";
import MainLayout from "../layouts/Main/Main";
import Head from "next/head";

const Custom404 = () => {

  return (
      <div>
        <Head>
          <title>404 - Page Not Found</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h2>404 - Page Not Found</h2>
      </div>
  )
}

Custom404.Layout = MainLayout

export default Custom404