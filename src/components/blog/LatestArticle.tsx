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
							<p className="dateItem">Updated: April 16, 2023</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ color: "rgb(255,157,67)", fontSize: 35 }}>
									<strong>
										<u>Princess Update!</u>
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
									<strong>New Princess Customer and Princess Quest{/* */}</strong>
								</span>
							</p>

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}><i>Simply splendid! </i>A graceful <strong>Princess customer </strong>has arrived...</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Her majesty needs your help, visit the global leaderboard to recieve your <strong>quest</strong> and claim glory!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Look out for this new customer in your restaurant!{/* */}</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>

							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1097345571448168548/small_Screenshot_2023_04_06_171602_1ae22e4fe4_1.png" />
							</figure>


							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Princess Restaurant Theme{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<i>Embark on a fabulous culinary adventure with the new Princess-themed restaurant!</i>{/* */}

								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Feel regal in the new <strong>Princess Themed restaurant</strong>, sure to make her highness feel right at home! {/* */}</span>
							</p>


							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1097346726714675260/large_Screenshot_2023_04_06_171539_537cb5b371.png" />
							</figure>


							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Princess Chair{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Introducing the majestic Princess Chair!</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}> Check out the new <strong>Princess Chair</strong>, now in the shop!</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}> <i>This new item will attract the Princess Customer to your restaurant!</i></span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1097347377985228880/medium_Screenshot_2023_04_06_171513_abeaa2dd40.png" />
							</figure>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Princess Table{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Every meal should be a fairy tale!</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}> Make your dining experience enchanting with the new <strong>Princess Table</strong>!</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}> <i>This new item will attract the Princess Customer to your restaurant!</i></span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1097347821981683853/small_Screenshot_2023_04_06_171526_72e54a842a.png" />
							</figure>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Princess Crown{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Get ready to rule with grace with the <strong>Princess Crown</strong></span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>The crowning jewel of any fancy collection, with this, you will be the talk of the kingdom.</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}> <i>Increases the chance that a Princess customer will visit your restaurant by displaying the Princess Crown!</i></span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/989011348992172082/1097347821981683853/small_Screenshot_2023_04_06_171526_72e54a842a.png" />
							</figure>

							{/* Start of new "MAJOR" feature */}

							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 21 }}>
									<strong>New Optimization Tools{/* */}</strong>
								</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Explore our all <strong>new settings for Animations and Customers Rendered</strong>.</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>Allowing players to customize their game experience whether they&rsquo;re playing for <i>leisure or for restuarant glory</i>!</span>
							</p>
							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<figure className="image image_resized" style={{ width: "50%" }}>
								<img src="https://cdn.discordapp.com/attachments/1048082842267177050/1097040207959826483/image.png" />
							</figure>

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
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									- General bug fixes
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
							- All new achievement UI system
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
							- Expanded global leaderboard
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
							- Level up progression tweaks
									{/* */}
								</span>
							</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
							- Added teleport home button
									{/* */}
								</span>
							</p>
							{/* Listing changes */}



							{/* Start of "Fixes" section */}



							<p style={{ textAlign: "center" }}>&nbsp;{/* */}</p>
							<p style={{ textAlign: "center" }}>
								<span style={{ fontSize: 17 }}>
									<strong>Good luck, have a fun time with this awesome update! {/* */}</strong>
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
