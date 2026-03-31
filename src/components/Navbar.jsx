import { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Features", href: "#features" },
        { name: "My Links", href: "#links" },
    ];

    return (
        <nav className="w-full fixed top-0 z-50 px-4 sm:px-8 py-6">
            {/* Navbar Background Blur */}
            <div
                className={`absolute inset-0 -z-10 rounded-md 
          ${theme === "light" ? "bg-white/30" : "bg-gray-900/30"} 
          backdrop-blur-md`}
            ></div>

            {/* Navbar Content */}
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <a href="/">
                    <h1 className={`text-2xl sm:text-3xl font-bold ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}>
                        URLShorten
                    </h1>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6 items-center">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`hover:text-indigo-600 transition ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full shadow transition ${theme === "light" ? "bg-gray-200/50" : "bg-gray-700/50"}`}
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className={`p-2 rounded-md focus:outline-none`}
                    >
                        <h2 className="text-1xl">MENU</h2>
                    </button>
                </div>
            </div>

            {/* Full-page Mobile Menu */}
            <div
                className={`fixed inset-0 backdrop-blur-md z-50 flex flex-col items-center justify-center transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          ${theme === "light" ? "bg-white/20" : "bg-gray-900/20"}`}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className={`absolute top-6 right-6 p-2  transition ${theme === "light"
                            ? " text-black"
                            : " text-white"}`}
                >
                    <h2 className="text-lg font-semibold">CLOSE</h2>
                </button>


                <div className="flex flex-col items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-2xl font-semibold transition 
                ${theme === "light" ? "text-gray-800 hover:text-indigo-500" : "text-white hover:text-indigo-400"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition text-lg"
                    >
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>
            </div>
        </nav>
    );
}