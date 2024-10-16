import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata = {
	title: "Broodl",
	description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
	const header = (
		<header className="p-4 sm:p-8 flex items-center justify-between gap-4">
			<h1
				className={
					"text-base sm:text-lg textGradient " + fugazOne.className
				}
			>
				Broodl
			</h1>
		</header>
	);

	const footer = (
		<footer className="p-4 sm:p-8 grid place-items-center">
			<p className={"text-indigo-500 " + fugazOne.className}>
				Created with ❤️
			</p>
		</footer>
	);
	return (
		<html lang="en">
			<body
				className={
					"w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
					openSans.className
				}
			>
				{header}
				{children}
				{footer}
			</body>
		</html>
	);
}
