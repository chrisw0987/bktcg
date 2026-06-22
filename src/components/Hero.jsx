import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-24 text-center text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <img
          src="/bktcg-logo.png"
          alt="BKTCG Show"
          className="mx-auto mb-8 w-72 drop-shadow-2xl md:w-96"
        />

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Brooklyn <span className="text-[#FFA500]">TCG</span> Show
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
          The Home of Brooklyn's Trading Card Community, Where Brooklyn's Collectors Come Together
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/events"
            className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
          >
            Get Tickets
          </Link>

          <Link
            to="/events"
            className="rounded-xl border border-white/30 px-8 py-3 font-bold text-white transition hover:bg-white/10"
          >
            View Events
          </Link>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;