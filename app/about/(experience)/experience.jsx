import Link from "next/link";
export default function Experience() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2023 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              <Link href={"https://sainistudio.com/"} target="_blank">
                Saini Studio
              </Link>
            </h3>
            <h4 className=" font-light text-md mb-4">
              Fullstack Web Developer | Full-time
            </h4>
            <p className="text-justify">
              Held a full-time position focused on developing and maintaining
              scalable web applications using modern technologies. Collaborated
              with cross-functional teams to deliver high-quality, robust
              solutions tailored to meet dynamic business requirements.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Next.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Wordpress
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Html
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Node
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Figma
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2024 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
				<Link href={"https://www.fiverr.com/divyanshusaini9/buying?source=avatar_menu_profile"}target="_blank">Fiverr</Link>
			</h3>
            <h4 className=" font-light text-md mb-4">
              Website Developer | Freelance
            </h4>
            <p className="text-justify">
              Design and develop responsive websites for clients, utilizing
              HTML, CSS, JavaScript, WordPress, and Figma. Deliver tailored,
              high-quality solutions aligned with client goals and brand
              identity, ensuring optimized user experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Wordpress Developer
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React Js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Next Js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Problem Solving
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2023 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-black"><Link href={"https://www.upwork.com/freelancers/~01eb5c901a68743255"}target="_blank">Upwork</Link></h3>
            <h4 className=" font-light text-md mb-4">
              Web Developer | Freelance
            </h4>
            <p className="text-justify">
              Specialized in crafting innovative solutions using Laravel and
              Next.js, enhancing client satisfaction and project efficiency.
              Contributed expertise in both frontend and backend development
              during collaborative team projects, leading to successful project
              completions
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                React
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Next.js
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Laravel
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                MySql
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
