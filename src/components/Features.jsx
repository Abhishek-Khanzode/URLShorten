export default function Features({ theme }) {
    const features = [
        { title: "Fast & Easy", desc: "Shorten your links in a single click and share instantly." },
        { title: "Manage Links", desc: "View, copy, and delete your shortened URLs anytime." },
        { title: "Micro SaaS Ready", desc: "Lightweight, fast, and perfect for small projects or startup tools." },
    ];

    return (
        <section id="features" className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
            {features.map((f, idx) => (
                <div
                    key={idx}
                    className={`p-6 rounded-2xl shadow-lg text-center transition hover:shadow-2xl ${theme === "light" ? "bg-white" : "bg-gray-800"
                        }`}
                >
                    <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}>{f.title}</h3>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-sm sm:text-base`}>{f.desc}</p>
                </div>
            ))}
        </section>
    );
}