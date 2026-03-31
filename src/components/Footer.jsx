import { FaGithubSquare } from "react-icons/fa";

export default function Footer({ theme }) {
    return (
        <footer className={`min-h-screen flex flex-col justify-between py-16 px-6 sm:px-12 transition-colors duration-500 ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"}`}>
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                <div className="flex flex-col justify-start">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 tracking-wide text-indigo-600">About</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        Personal-use URL shortener designed for speed, ease, and sharing across social media. Perfect for micro SaaS or startup tools.
                    </p>
                </div>

                <div className="flex flex-col justify-start">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 tracking-wide text-indigo-600">Quick Links</h3>
                    <ul className="text-sm sm:text-base space-y-2">
                        <li>
                            <a href="#features" className="hover:text-indigo-500 transition-colors duration-300">Features</a>
                        </li>
                        <li>
                            <a href="#links" className="hover:text-indigo-500 transition-colors duration-300">My Links</a>
                        </li>
                        <li>
                            <a href="https://webdevwithabhi.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300 font-medium">
                                Made by Webdevwithabhi
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col justify-start">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 tracking-wide text-indigo-600">Contact</h3>
                    <a href="https://webdevwithabhi.in" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base mb-2">
                        🌐 Website: webdevwithabhi.in
                    </a>
                    <p className="text-sm sm:text-base mt-2 mb-3 text-gray-500 dark:text-gray-400">Follow on social media for updates and new features.</p>
                    <div className="flex items-center justify-start gap-5 text-2xl">
                        <a
                            href="https://github.com/Abhishek-Khanzode/URLShorten"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:text-gray-700 transition-colors duration-300 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}
                        >
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

            <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} URLShorten. All rights reserved.
            </div>
        </footer>
    );
}