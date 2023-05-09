import { Header, ImageSlider2, CarouselComp } from "src/components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// interface CarouselCompI {}

const fallbackDataArray = {
	items: [
		{
			title: "???",
			description: "group members",
		},
		{
			title: "???",
			description: "discord members",
		},
		{
			title: "???",
			description: "days since last taken down",
		},
		{
			title: "???",
			description: "auction items",
		},
		{
			title: "???",
			description: "total active users",
		},
	],
};

export interface Item {
	title: string;
	description: string;
}

export interface Data {
	items: Item[];
}

export const getData = async (): Promise<Data> => {
	const response = await fetch("/api/getThiccNumbers");
	const json = await response.json();

	return json;
};

export default function ScreenTwo(): JSX.Element {
	const [bigNumbers, setBigNumbers] = useState<Data>(fallbackDataArray);
	const { ref, inView } = useInView({
		triggerOnce: true,
		/* Optional options */
		threshold: 0.65,
	});

	useEffect(() => {
		if (inView) {
			getData().then(data => setBigNumbers(data));
		}
	}, [inView]);

	return (

		<div className="py-40 bg-screenTwoBg lg:bg-screenTwoBgLg bg-no-repeat bg-cover transform px-4">
			<Header
				state={inView}
				directionStart="translateX(30px)"
				directionEnd="translateX(0px)"
				className="leading-6 relative pt-14"
				title="Some THICC Numbers"
				description="Ever wonder why we're called THICC Games?"
				titleStyle="title text-size34 lg:text-size50"
				descriptionStyle="description lg:text-size22 mt-2 lg:mt-4"
			/>

			<div className="pt-14 w-full pb-10 flex flex-col lg:flex-row md:justify-center items-center lg:gap-4 xl:gap-8">
				<Header
					state={inView}
					directionStart="translateY(30px)"
					directionEnd="translateY(0px)"
					className="infoButton bg-pagePink shadow-glowPink rounded-t-[40px] lg:rounded-[40px]"
					title={bigNumbers && bigNumbers.items[0].title}
					description={bigNumbers && bigNumbers.items[0].description}
					titleStyle="text-center font-bold text-size50 text-white relativePushTop2"
					descriptionStyle="text-center font-bold text-xl text-white mt-4 relativePushTop1"
				/>

				<span ref={ref} />
				<Header
					state={inView}
					directionStart="translateY(30px)"
					directionEnd="translateY(0px)"
					className="infoButton bg-pageBlue shadow-glowBlue lg:rounded-[40px]"
					title={bigNumbers && bigNumbers.items[1].title}
					description={bigNumbers && bigNumbers.items[1].description}
					titleStyle="text-center font-bold text-size50 text-white relative relativePushTop2"
					descriptionStyle="text-center font-bold text-xl text-white mt-4 relativePushTop1"
				/>
				<div className="hidden xl:block">{/* <Image src={arrowGrey} alt="arrowGrey" /> */}</div>
				<Header
					state={inView}
					directionStart="translateY(30px)"
					directionEnd="translateY(0px)"
					className="infoButton bg-pageRed shadow-glowRed rounded-b-[40px] lg:rounded-[40px]"
					title={bigNumbers && bigNumbers.items[2].title}
					description={bigNumbers && bigNumbers.items[2].description}
					titleStyle="text-center font-bold text-size50 text-white relativePushTop2"
					descriptionStyle="text-center font-bold text-xl text-white mt-4 relativePushTop1"
				/>
			</div>

			<div className="pt-14 w-full pb-10 flex flex-col lg:flex-row md:justify-center items-center lg:gap-4 xl:gap-8">
				<Header
					state={inView}
					directionStart="translateY(30px)"
					directionEnd="translateY(0px)"
					className="infoButton bg-pageGreen shadow-glowGreen rounded-b-[40px] lg:rounded-[40px]"
					title={bigNumbers && bigNumbers.items[3].title}
					description={bigNumbers && bigNumbers.items[3].description}
					titleStyle="text-center font-bold text-size50 text-white relativePushTop2"
					descriptionStyle="text-center font-bold text-xl text-white mt-4 relativePushTop1"
				/>
				<span ref={ref} />

				<Header
					state={inView}
					directionStart="translateY(30px)"
					directionEnd="translateY(0px)"
					className="infoButton bg-pageOrange shadow-glowOrange rounded-b-[40px] lg:rounded-[40px]"
					title={bigNumbers && bigNumbers.items[4].title}
					description={bigNumbers && bigNumbers.items[4].description}
					titleStyle="text-center font-bold text-size50 text-white relativePushTop2"
					descriptionStyle="text-center font-bold text-xl text-white mt-4 relativePushTop1"
				/>

			</div>
		</div>

	);
}
