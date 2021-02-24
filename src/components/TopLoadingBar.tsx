import React, { useRef } from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import '../Styles/TopLoadingBar.module.css'

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const TopLoadingBar = () => {
	return (
		<div>
			<Head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
			</Head>
		</div>
	);
};

export default TopLoadingBar;
