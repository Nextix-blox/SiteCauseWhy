// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NodeCache from "node-cache";

const cache = new NodeCache();

export interface Item {
	title: string;
	description: string;
}

export interface Data {
	items: Item[];
}

const formatNumber = (n: number) => {
	if (n < 1e3) return n;
	if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
	if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
	if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
	if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const refreshTime = 180; // 3 mins

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	let groupMembers = cache.get("GroupMembers");
	if (!groupMembers) {
		const response = await fetch("https://groups.roblox.com/v1/groups/16749166");
		const json = await response.json();
		groupMembers = formatNumber(json.memberCount);

		cache.set("GroupMembers", groupMembers, refreshTime);
	}

	let discordMembers = cache.get("DiscordMembers");
	if (!discordMembers) {
		const response = await fetch(
			"https://discord.com/api/v9/invites/thiccgames?with_counts=true&with_expiration=true"
		);
		const json = await response.json();
		discordMembers = formatNumber(json.approximate_member_count);

		cache.set("DiscordMembers", discordMembers, refreshTime);
	}

	let gameID = cache.get("GameID");
	if (!gameID) {
		const url =
			req.headers.host === "localhost:3000"
				? "http://localhost:3000/api/getPlaceID"
				: `https://${req.headers.host}/api/getPlaceID`;
		const response = await fetch(url);
		const responseText = await response.text();
		gameID = parseInt(responseText);

		cache.set("GameID", gameID, refreshTime);
	}

	let driverID = cache.get("DriverID");
	if (!driverID) {
		const url =
			req.headers.host === "localhost:3000"
				? "http://localhost:3000/api/getDriverID"
				: `https://${req.headers.host}/api/getDriverID`;
		const response = await fetch(url);
		const responseText = await response.text();
		driverID = parseInt(responseText);
	}

	let daysSinceLastTakenDown = cache.get("DaysSinceLastTakenDown");
	let isTakenDown = false;
	if (!daysSinceLastTakenDown) {
		// fetch api from roblox
		// const response = await fetch(`https://assetdelivery.roblox.com/v1/asset/?ID=${driverID}`); // https://develop.roblox.com/v2/assets/${driverID}/versions
		// const json = await response.json();
		// const lastUpdated = new Date(json.Created);

		isTakenDown = true;
		// daysSinceLastTakenDown = formatNumber(Math.floor((new Date().getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)));
	}

	let auctionCount = cache.get("AuctionCount");
	if (!auctionCount) {
		const response = await fetch("https://thiccgames.herokuapp.com/getAuctionCount");
		const json = await response.json();

		if (json.success == true) {
			auctionCount = formatNumber(json.totalAuctionCount);
		} else {
			auctionCount = "BROKEN";
		}
	}

	let playerCount = cache.get("PlayerCount");
	if (!playerCount) {
		const response = await fetch("https://www.roblox.com/places/api-get-details?assetId=" + gameID);
		const json = await response.json();
		playerCount = formatNumber(json.OnlineCount);

		cache.set("PlayerCount", playerCount, refreshTime);
	}

	res.status(200).json({
		items: [
			{
				title: "" + groupMembers,
				description: "group members",
			},

			{
				title: "" + discordMembers,
				description: "discord members",
			},
			{
				title: "" + (isTakenDown ? "61" : daysSinceLastTakenDown), // "BROKEN"
				description: isTakenDown ? "days since last taken down" : "days since last taken down", // first text: "roblox is dumb and broke endpoint"
			},
			{
				title: "" + auctionCount,
				description: "auction items",
			},
			{
				title: "" + playerCount,
				description: "total active users",
			},
		],
	});
}
