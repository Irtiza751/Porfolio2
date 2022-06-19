import { GitHub, Instagram, Linkedin } from "react-feather";

const links = [
	{ name: "Projects", anchor: "#projects" },
	{ name: "Technologies", anchor: "#tech" },
	{ name: "About", anchor: "#about" },
	{ name: "Blogs", anchor: "/blogs" },
];

export default function Header() {
	return (
		<header className="border-b-2 border-gray-400/10 py-8 mb-2">
			<nav className="container flex justify-between">
				<div className="w-44">
					<img src="/assets/images/logo.svg" alt="" />
				</div>
				<ul className="lg:flex md:flex gap-x-8 text-lg hidden">
					{links.map(link => (
						<a href="#" key={link.name} className="hover:text-gray-200">{link.name}</a>
					))}
				</ul>

				<ul className="flex gap-x-8">
					<li>
						<a target="_blank" className="hover:text-gray-200">
							<GitHub size={24} />
						</a>
					</li>
					<li>
						<a target="_blank" className="hover:text-gray-200">
							<Linkedin size={24} />
						</a>
					</li>
					<li>
						<a target="_blank" className="hover:text-gray-200">
							<Instagram size={24} />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}