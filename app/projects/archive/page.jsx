"use client"
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import FixedButon from "@/components/FixedButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const projects = [
	{
		year: "2023",
		title: "Full Stack Website",
		tech: "NextJS, Gemini AI, TailwindCSS, Figma UI, Next Auth",
		github: "https://github.com/divyanshsaini962/techblogg",
		preview: "https://www.techblogservice.online/",
	},
	{
		year: "2023",
		title: "WordPress Website",
		tech: "WordPress, Figma Ui, Custom Css,",
		preview: "https://sainistudio.com/",
	},
	{
		year: "2022",
		title: "Frontend Website",
		tech: "Html, Css, Javascript",
		github: "https://github.com/divyanshsaini962/sanskarpvcdoor/",
		preview:
			"https://divyanshsaini962.github.io/sanskarpvcdoor/",
	},
	 {
	 	year: "2021",
	 	title: "React Website",
	 	tech: "Javascript, React Js, Next Js, Figma UI",
	 	github: "https://github.com/divyanshsaini962/Saini-studio",
	 	preview: "https://saini-studio.vercel.app/",
	 },
	 {
	 	year: "2021",
	 	title: "React Web App",
	 	tech: "Javascript, React Js, Mongodb, Aws, TailwindCSS",
	 	github: "https://github.com/divyanshsaini962/Saini-Price-Tracker",
	 	preview: "https://saini-price-tracker.vercel.app/",
	 },
	// {
	// 	year: "2023",
	// 	title: "Aleph Discord Bot",
	// 	tech: "Python, Serp API, Discord.py",
	// 	github: "https://github.com/Divyanshu/aleph-discord-bot",
	// },
	// {
	// 	year: "2023",
	// 	title: "LPTK CUP UM 2023",
	// 	tech: "PHP, Laravel, Bootstrap, MySQL, jQuery, DataTables",
	// 	github: "",
	// 	preview: "",
	// },
	// {
	// 	year: "2023",
	// 	title: "NU INO Website",
	// 	tech: "PHP, Laravel, Livewire Bootstrap, MySQL, jQuery, DataTables",
	// 	github: "",
	// 	preview: "",
	// },
	// {
	// 	year: "2023",
	// 	title: "Unmuh Jember Landing Page",
	// 	tech: "HTML, CSS, Javascript",
	// 	github: "https://github.com/Divyanshu/unmuh-jember-landing-page",
	// 	preview: "https://Divyanshu.github.io/unmuh-jember-landing-page/",
	// },
	// {
	// 	year: "2022",
	// 	title: "Divyanshu Website",
	// 	tech: "Javascript, Next Js, TailwindCSS",
	// 	github: "https://github.com/Divyanshu/Divyanshu-porto-1",
	// 	preview: "https://Divyanshu.my.id",
	// },
	// {
	// 	year: "2023",
	// 	title: "Python audio tranlator",
	// 	tech: "Python, Assembly AI",
	// 	github: "https://github.com/Divyanshu/python-audio-translation",
	// 	preview: "",
	// },
	// {
	// 	year: "2023",
	// 	title: "A4 Education website",
	// 	tech: "PHP, Laravel, Bootstrap, MySQL, jQuery, DataTables",
	// 	github: "https://github.com/Divyanshu/A4",
	// 	preview: "",
	// },
	// {
	// 	year: "2023",
	// 	title: "Cry Cast crypto forecast",
	// 	tech: "PHP, Laravel, Bootstrap, MySQL",
	// 	github: "https://github.com/Divyanshu/cry-cast",
	// 	preview: "",
	// },
	// {
	// 	year: "2023",
	// 	title: "Mini Harbor",
	// 	tech: "Python, Pygame",
	// 	github: "https://github.com/Divyanshu/mini-harbor",
	// 	preview: "",
	// },
];
export default function Page () {
  return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/projects">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="min-h-screen w-screen mt-10 md:mt-0  p-10 flex justify-center items-center flex-col mb-10">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -250,
							}}
							animate={{
								opacity: 1,
								x: 50,
							}}
							transition={{
								delay: 0.5,
								duration: 1,
								type: "spring",
							}}></motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,
								duration: 1,
								type: "spring",
							}}></motion.div>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								duration: 1,
								type: "spring",
							}}>
							Archive
						</motion.h1>
					</div>

					<div className="mx-auto container md:px-10 grid grid-cols-1 mb-">
						{/* invisible table */}
						<table className="space-y-3">
							<thead>
								<tr className=" hover:shadow-md  transition-all ease duration-500">
									<th className="text-start">Year</th>
									<th className="text-start">Title</th>
									<th className="text-start">Technology</th>
									<th className="text-start">Link</th>
								</tr>
							</thead>
							<tbody>
								{projects.map((project, index) => (
									<tr
										key={index}
										className="hover:shadow-md transition-all ease duration-500">
										<td>{project.year}</td>
										<td>{project.title}</td>
										<td>{project.tech}</td>
										<td>
											<div className="flex flex-row justify-center items-center">
												{project.github && (
													<a
														href={project.github}
														title="Link to GitHub"
														target="_blank">
														<FontAwesomeIcon
															icon={faGithub}
															className="text-xl mr-2"
														/>
													</a>
												)}
												{project.preview && (
													<a
														href={project.preview}
														title="Link to project preview"
														target="_blank"
														>
														<FontAwesomeIcon
															icon={
																faArrowUpRightFromSquare
															}
															className="text-xl"
														/>
													</a>
												)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</>
  );
}