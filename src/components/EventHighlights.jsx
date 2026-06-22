function EventHighlights() {
  const stats = [
    { number: "10,000+", label: "Cards" },
    { number: "200+", label: "Vendors" },
    { number: "500+", label: "Collectors" },
    { number: "20+", label: "Categories" },
  ];

  return (
    <section className="bg-white px-6 py-20 text-[#2A1E68]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFA500]">
            Event Highlights
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            A Show Built For The Hobby
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-8 text-center shadow-lg transition hover:-translate-y-2 hover:border-[#4FCBFF]"
            >
              <p className="text-4xl font-black text-[#FFA500] md:text-5xl">
                {stat.number}
              </p>

              <p className="mt-3 text-lg font-bold text-[#0B1D5A]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHighlights;