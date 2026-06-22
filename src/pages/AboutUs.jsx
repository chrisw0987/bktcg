function AboutUs() {
  const values = [
    {
      title: "Community First",
      text: "BKTCG Show is built to bring local collectors, vendors, players, and families together in one welcoming space.",
    },
    {
      title: "Safe Trading",
      text: "Dedicated trading zones help collectors connect, make deals, and discover new cards in a safer in-person environment.",
    },
    {
      title: "For Every Collector",
      text: "From competitive players to casual fans and young kids, the show is designed for all ages and experience levels.",
    },
  ];

  const highlights = [
    "10,000 sq. ft. venue",
    "140–150+ vendor tables",
    "Pokémon & One Piece focused",
    "Rare singles & graded slabs",
    "Vintage sealed packs",
    "Custom card merchandise",
  ];

  return (
    <main className="bg-[#2A1E68] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-24 text-center">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            About BKTCG Show
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Brooklyn&apos;s Premier Trading Card Gathering
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            BKTCG Show is a large-scale community event dedicated to trading
            card game enthusiasts, collectors, vendors, players, and families.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#FFA500]">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Built For The Card Community
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-[#2A1E68]/75">
            Our goal is to create an inclusive, high-energy environment where
            local collectors can connect, trade safely, and celebrate card
            culture. Whether you&apos;re hunting for rare Pokémon cards, looking
            for One Piece singles, or just discovering the hobby, BKTCG Show is
            designed to make every collector feel welcome.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0B1D5A] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
              What We Stand For
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              More Than A Card Show
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-[#4FCBFF]/20 bg-white/10 p-8 shadow-lg backdrop-blur transition hover:-translate-y-2 hover:border-[#FFA500]"
              >
                <h3 className="text-2xl font-black text-[#FFA500]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/80">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Scale */}
      <section className="bg-white px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#FFA500]">
              Event Scale
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              A Major TCG Event In Brooklyn
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#2A1E68]/75">
              The first official BKTCG Show launches on July 19, 2026 at
              Brooklyn College, located at 2900 Bedford Ave in Flatbush.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-6 text-center font-bold shadow-lg transition hover:-translate-y-1 hover:border-[#4FCBFF]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#FFA500] via-[#FFD24A] to-[#FFA500] px-6 py-20 text-center text-[#2A1E68]">
        <h2 className="text-3xl font-black md:text-5xl">
          Join The Brooklyn Card Community
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
          Collect, trade, shop, and connect at BKTCG Show.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;