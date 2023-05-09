import Head from "next/head"; // Head element
import { BlogTemplate } from "@/components"; // Import that SMEXY blog template
// Is this entire thing retarded? Yes. Issue? Do it yourself. - Aimee
export default function ArticleTemplateNoData(): JSX.Element {
	return (
		<div className="bg-pageBg/90 overflow-x-hidden">
			<Head>
				<title>DEV BLOGS | Thicc Games</title> {/* Title */}
			</Head>
			<BlogTemplate withoutBlogNavigation centeredFooterXL>
				<>
					<header
						className="leading-10 mt-2 relative"
						style={{ transform: "translateY(0px)", opacity: 1 }}
					></header>
					<div>
						<div>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p className="dateItem">Updated: March 29, 2023</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ color: "rgb(255,157,67)", fontSize: 35 }}>
									<strong>
										<u>Alien Update!</u>
									</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ color: "rgb(255,157,67)", fontSize: 35 }}>
									<strong>
										<u>Featuring{/* */}</u>
									</strong>
								</span>
							</p>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>All new world{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Welcome to the all new My Restaurant world!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Adventure around with an entirely new map! {/* */}</span>
							</p>

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/1048082842267177050/1083954365032841358/image.png" />
							</figure>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1087873079021158410/image.png" />
							</figure>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Halloween Event{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>Boo!{/* */}</i> {/* */}
									The Halloween Event has returned! Will you complete all his challenges? 👻{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>There will be 5 challenges. {/* */}</span>
							</p>

							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									Complete each one for a reward better than the last!{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									Complete all 5, and you get an exclusive crate! 📦{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/1083165023293145199/1087876093756846201/image.png" />
							</figure>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>Spooky! He&rsquo;s like a nightmare..{/* */}</i>
								</span>
							</p>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Upgrades{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Introducing upgrades!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									Ever felt like you worked too much for nothing? {/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									That all changes with Upgrades!  Unlock unique upgrades to spice up your restaurant or player! {/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/1078688525316259953/1087926836157218896/Upgrades_V1.gif" />
							</figure>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>Ooh.. So shiny!{/* */}</i>
								</span>
							</p>


							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Basement{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Introducing the basement!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									We had too many items, so we put them in a basement. {/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/1078688525316259953/1087877450660315226/image.png" />
							</figure>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>We didn&rsquo;t steal this from BK Games. Quite the contrary...{/* */}</i>
								</span>
							</p>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Crates{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Crates!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>A new and unique way to get items! {/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "75%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1088087084570513448/JD1JiEL0.gif" />{/* */}
								{/*Change this URL when we can. Temporary!*/}
							</figure>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>It&rsquo;s so addicting...{/* */}</i>
								</span>
							</p>


							{/* Start of changes */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ color: "rgb(255,157,67)", fontSize: 35 }}>
									<strong>
										<u>Changes{/* */}</u>
									</strong>
								</span>
							</p>

							{/* Listing changes */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Rewritten Framework{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									We&rsquo;ve completely redone our internal framework.{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									This should make it much easier to create updates!{/* */}
								</span>
							</p>

							{/* Listing changes */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Bypass{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									We&rsquo;ve developed a new bypass specifically for My Restaurant.{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>This should make the game last very long!{/* */}</span>
							</p>

							{/* Listing changes */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Adjusted Prices{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									We noticed that the prices for items like cash were not adjusted.{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									This has been fixed! Enjoy your cheap cash :D{/* */}
								</span>
							</p>

							{/* Listing changes */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Balanced Economy{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									In anticipation for the much upcoming Auction House update{" "}
									<i>(did I say that? Oops!)</i>, we&rsquo;ve balanced the economy.{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									You start with $50,000.
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									This will help balance the game and breath some fresh life into it!{/* */}
								</span>
							</p>

							{/* Start of "Fixes" section */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>Fixes{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>- Fixed customers being messed up{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									- Fixed a few small bugs with the Framework
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>- Fixed a few bugs with Arcade Networking{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									- Heavily improved the mobile user experience{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									- Changed the wishing well cooldown from 20m to 1m.{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<strong>Good luck, have a fun time with this MASSIVE update! {/* */}</strong>
									<i>
										<strong>~ Thicc Preston &amp; the Dev Team{/* */}</strong>
									</i>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
						</div>
						<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
					</div>
				</>
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
				<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
			</BlogTemplate>
		</div>
	);
}
