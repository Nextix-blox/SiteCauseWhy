import Link from "next/link";
import Image from "next/image";

import twitter from "public/twitter.svg";
import discord from "public/discord.svg";
import roblox from "public/roblox.svg"

import { HTMLAttributes } from "react";
// interface SocialIconListI extends HTMLAttributes<HTMLUListElement> {}

export default function SocialIconList({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
	return (
		<div {...rest}>
			<Link href="https://discord.gg/thiccgames" passHref legacyBehavior>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center sidebarSocialBtn shadow-glowBlue bg-discord cursor-pointer"
				>
					<Image src={discord} alt="discord" />
				</a>
			</Link>
			<Link href="https://twitter.com/thiccgames/" passHref legacyBehavior>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center sidebarSocialBtn shadow-glowLightBlue bg-twitter cursor-pointer"
				>
					<Image src={twitter} alt="twitter" />
				</a>
			</Link>
			<Link href="https://www.roblox.com/groups/16749166/TG#!/" passHref legacyBehavior>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center sidebarSocialBtn shadow-glowGreen bg-roblox cursor-pointer"
				>
					<Image src={roblox} alt="roblox" />
				</a>
			</Link>
		</div>
	);
}
// className="absolute w-full -bottom-[80px] px-4 gap-4 flex"