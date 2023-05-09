import Head from "next/head";
import Image from "next/image";
import classname from "classnames";
import { Navigation, LatestArticle } from "@/components";
import JoinCommunity from "@/components/organism/JoinCommunity";
import Script from "next/script";
// import styles from "@/styles/Home.module.css";

export default function Home() {
	const mainClasses = classname({
		"relative bg-heroBannerBG mt-[80px] lg:mt-[80px]": true,
	});

	const joinCommunityClasses = classname({
		relative: true,
	});

	const footerClasses = classname({
		"flex flex-col justify-between mt-[6.25rem] lg:mt-[12.5rem] lg:pb-[6.25rem]": true,
	});

	return (
		<>
			<LatestArticle />



			<Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
			<noscript>
				{/* eslint-disable @next/next/no-img-element */}
				<img
					src="https://queue.simpleanalyticscdn.com/noscript.gif"
					alt=""
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</noscript>

			<div className="bg-pageBg/90 overflow-x-hidden">
				<Head>
					<title>DEV BLOGS | Thicc Games</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Navigation />
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
				<JoinCommunity />
				<main className={mainClasses}>
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6870165946302498"
						crossOrigin="anonymous"
					></script>
				</main>

				<footer className={footerClasses}>
					<div className="lg:max-w-7xl m-auto w-full lg:flex lg:flex-row-reverse"></div>
				</footer>
			</div>
		</>
	);
}
