export default function LinksList({ links, copy, deleteLink, theme }) {
  return (
    <section id="links" className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 py-6">
      {links.length > 0 && <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Links</h2>}
      <div className="grid gap-6">
        {links.map((link) => (
          <div 
            key={link.slug}
            className={`p-6 rounded-2xl shadow-lg flex flex-col md:flex-row md:justify-between md:items-center transition hover:shadow-2xl hover:scale-105 ${theme === "light" ? "bg-white/80" : "bg-gray-700/70"
              }`}
          >
            <div className="flex-1 flex flex-col md:flex-row md:items-center md:gap-4">
              <p className="break-all font-semibold">{link.original}</p>
              <a href={`/${link.slug}`} target="_blank" className="text-indigo-600 font-medium mt-2 md:mt-0 md:ml-4 hover:underline">
                {link.display}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <button onClick={() => copy(link.slug)} className="bg-green-500 px-5 py-2 rounded-xl hover:bg-green-600 text-white font-medium shadow-sm transition">
                Copy
              </button>
              <button onClick={() => deleteLink(link.slug)} className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 text-white font-medium shadow-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}