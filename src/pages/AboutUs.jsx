function AboutUs() {
  const values = [
    {
      title: "Community First",
      text: "BKTCG Show brings collectors, vendors, players, and families together through a shared love of the hobby.",
    },
    {
      title: "Trade & Connect",
      text: "The show creates space for collectors to meet, trade, make deals, and discover cards in person.",
    },
    {
      title: "For Every Collector",
      text: "From longtime collectors to kids discovering their first cards, BKTCG Show is built to welcome every experience level.",
    },
  ];

  const highlights = [
    "Brooklyn-based events",
    "Pokémon & One Piece focused",
    "Large vendor floors",
    "Singles & graded slabs",
    "Sealed products",
    "Collector community",
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
            Brooklyn&apos;s Trading Card Community
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            BKTCG Show is a Brooklyn-based trading card event built around
            collecting, community, and bringing people in the hobby together.
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
            collectors can shop, trade, connect, and celebrate card culture.
            Whether you&apos;re hunting for Pokémon, searching for One Piece
            cards, meeting vendors, or just discovering the hobby, BKTCG Show
            is designed to make the experience welcoming and exciting.
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

      {/* What To Expect */}
      <section className="bg-white px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#FFA500]">
              The BKTCG Experience
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What You&apos;ll Find At Our Shows
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#2A1E68]/75">
              BKTCG events bring together vendors, collectors, and card fans
              from across the community for a full day centered around the
              hobby.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-6 text-center font-bold shadow-lg transition hover:-translate-y-1 hover:border-[#FFA500]"
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
          Buy, sell, trade, collect, and connect at BKTCG Show.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;