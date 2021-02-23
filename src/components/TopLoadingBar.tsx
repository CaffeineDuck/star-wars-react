import React, { useRef } from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const TopLoadingBar = () => {
	return (
		<div>
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
				/>
			</Head>
		</div>
	);
};

export default TopLoadingBar;
