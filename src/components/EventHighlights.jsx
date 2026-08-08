function EventHighlights() {
  const highlights = [
    {
      value: "140+",
      label: "Tables",
      description: "A packed vendor floor to explore",
    },
    {
      value: "2",
      label: "Featured TCGs",
      description: "Pokémon & One Piece",
    },
    {
      value: "Brooklyn",
      label: "Local Community",
      description: "Hosted at Brooklyn College",
    },
    {
      value: "All Ages",
      label: "Welcome",
      description: "Collectors new and experienced",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 text-[#2A1E68]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#FFA500]">
            Event Highlights
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Why Attend BKTCG?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#2A1E68]/65">
            A Brooklyn card show built around collecting, community, and the
            hobby.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#FFA500]"
            >
              <p className="text-4xl font-black text-[#FFA500]">
                {item.value}
              </p>

              <p className="mt-3 text-lg font-black text-[#0B1D5A]">
                {item.label}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#2A1E68]/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHighlights;