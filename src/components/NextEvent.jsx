import { Link } from "react-router-dom";

function NextEvent() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFA500]">
            Next Event
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-5xl">
            Your Ticket To BKTCG Show
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border-4 border-[#2A1E68] bg-gradient-to-r from-[#FFA500] via-[#FFD24A] to-[#FFA500] shadow-[0_25px_60px_rgba(0,0,0,.2)]">

          {/* Ticket Notches */}
          <div className="absolute left-0 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute right-0 top-1/2 h-14 w-14 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

          <div className="grid md:grid-cols-[1.3fr_auto_.7fr]">

            {/* Main Ticket */}
            <div className="p-8 md:p-10">
              <p className="font-black tracking-[0.25em] text-[#2A1E68]">
                BKTCG SHOW
              </p>

              <h3 className="mt-4 text-3xl font-black text-[#0B1D5A] md:text-5xl">
                Brooklyn TCG Show
              </h3>

              <p className="mt-3 text-lg font-medium text-[#2A1E68]">
                Brooklyn College • Flatbush, NY
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Date
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    July 19, 2026
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Venue
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    Brooklyn College
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Experience
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    Buy • Sell • Trade
                  </p>
                </div>
              </div>
            </div>

            {/* Perforation */}
            <div className="relative hidden md:block w-[2px]">
              <div className="absolute inset-y-0 left-1/2 border-l-4 border-dashed border-[#2A1E68]/30" />
            </div>

            {/* Admit One Section */}
            <div className="flex flex-col items-center justify-center bg-[#2A1E68] p-8 text-center text-white">

              <p className="text-sm font-bold tracking-[0.3em] text-[#4FCBFF]">
                ADMIT ONE
              </p>

              <p className="mt-3 text-6xl font-black text-[#FFA500]">
                07
              </p>

              <p className="text-2xl font-black">
                19
              </p>

              <p className="mt-4 text-sm text-white/70">
                FIRST OFFICIAL SHOW
              </p>

              <Link
                to="/events"
                className="mt-6 rounded-xl bg-[#FFA500] px-6 py-3 font-black text-[#2A1E68] transition hover:scale-105"
              >
                Get Tickets
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NextEvent;