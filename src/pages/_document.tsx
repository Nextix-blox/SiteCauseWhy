import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
				<meta name="keywords" content="thicc games, roblox, video games, mr, my resturant, resturant" />
				<meta name="robots" content="index, follow" />
				<meta
					name="description"
					content="Indie game studio that makes free-to-play games for our community 🧡"
				/>
				<meta httpEquiv="content-language" content="en-US" />
				<meta property="og:title" content="THICC Games" />
				<meta
					property="og:description"
					content="Indie game studio that makes free-to-play games for our community 🧡"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://media.discordapp.net/attachments/1060220001300250775/1068374054307905656/118653340.png"
				/>
				<meta property="og:url" content="https://www.thicc.games" />
				<meta property="og:locale" content="en-US" />
				<meta property="og:site_name" content="thicc.games" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ThiccGames" />
				<meta name="twitter:creator" content="@ThiccGames" />
				<meta name="twitter:title" content="THICC Games" />
				<meta
					name="twitter:description"
					content="Indie game studio that makes free-to-play games for our community 🧡"
				/>
				<meta
					name="twitter:image"
					content="https://media.discordapp.net/attachments/1060220001300250775/1068374054307905656/118653340.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
