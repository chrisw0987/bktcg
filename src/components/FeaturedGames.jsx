function FeaturedGames() {
  const games = ["Pokémon", "One Piece", "Yu-Gi-Oh!", "Sports Cards", "Magic", "Lorcana"];

  return (
    <section className="bg-[#0B1D5A] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
          Popular At BKTCG
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Cards For Every Collector
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game}
              className="rounded-3xl border border-[#4FCBFF]/20 bg-white/10 p-8 text-2xl font-black shadow-lg backdrop-blur transition hover:-translate-y-2 hover:border-[#FFA500] hover:bg-white/15"
            >
              {game}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames;