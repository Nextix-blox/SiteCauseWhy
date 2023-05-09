import Head from "next/head";
import classname from "classnames";
import { Navigation, BlogItem } from "@/components";
import Script from "next/script";
import JoinCommunity from "@/components/organism/JoinCommunity";
// import styles from "@/styles/Home.module.css";
import dymmyImage from "public/blog.webp";
import { getRobloxURL } from "@/functions/getRobloxURL";

export default function Home() {
	const mainClasses = classname({
		"relative bg-heroBannerBG mt-[80px] lg:mt-[80px]": true,
	});

	const footerClasses = classname({
		"flex flex-col justify-between mt-[6.25rem] lg:mt-[12.5rem] lg:pb-[6.25rem]": true,
	});

	return (
		<>
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
					<title>Thicc Games | Home</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Navigation/>
				<main className={mainClasses}>
					<BlogItem
						blogHeader="Latest Update"
						headerTitle="My Restaurant - Princess Update!"
						headerDescription="Hear ye, hear ye! The My Restaurant Princess update is here! Prepare to be dazzled with a brand new Princess Customer, regal furniture pieces, and a host of tweaks and improvements. Join us in a culinary adventure fit for royalty!"
						linkText="Check it out!"
						linkHref={"/post/category/my-restaurant/my-restaurant-princess-update"}
						withInView
						blogImgSrc={dymmyImage}
						frontpage
						dummy
						ratioImg={0.75}
					/>


				</main>

				<footer className={footerClasses}>
					<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
					<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
					<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
					<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
					<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>

					<JoinCommunity/>
					<div className="lg:max-w-7xl m-auto w-full lg:flex lg:flex-row-reverse"></div>
				</footer>
			</div>
		</>
	);
}
