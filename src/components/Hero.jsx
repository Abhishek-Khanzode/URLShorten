export default function Hero({ url, setUrl, shortenUrl, theme }) {
    return (
        <header className="pt-28 sm:pt-32 text-center px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Shorten URLs. Share Fast.</h1>
            <p className="text-md sm:text-lg mb-6">Micro SaaS URL shortener for personal & social media use.</p>

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Enter your long URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className={`flex-1 p-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition ${theme === "light"
                            ? "border-gray-300 focus:ring-indigo-500 text-gray-800 bg-white"
                            : "border-gray-600 focus:ring-indigo-400 text-gray-100 bg-gray-800"
                        }`}
                />
                <button
                    onClick={shortenUrl}
                    className={`px-6 py-3 rounded-xl font-medium shadow-md transition ${theme === "light" ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-indigo-500 text-gray-100 hover:bg-indigo-600"
                        }`}
                >
                    Shorten
                </button>
            </div>
        </header>
    );
}