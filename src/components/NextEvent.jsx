import events from "../data/events";

function NextEvent() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => {
      const eventDate = new Date(`${event.date}T00:00:00`);
      return eventDate >= today;
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T00:00:00`);
      const dateB = new Date(`${b.date}T00:00:00`);
      return dateA - dateB;
    });

  const nextEvent = upcomingEvents[0];

  if (!nextEvent) {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFA500]">
            Next Event
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-5xl">
            More Shows Coming Soon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#2A1E68]/70">
            Stay tuned for the next BKTCG Show announcement.
          </p>

          <a
            href="/events"
            className="mt-8 inline-block rounded-xl bg-[#2A1E68] px-7 py-3 font-bold text-white transition hover:bg-[#35267F]"
          >
            View Events
          </a>
        </div>
      </section>
    );
  }

  const [, month, day] = nextEvent.date.split("-");

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-[#FFA500]">
            Next Event
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-5xl">
            Your Ticket To BKTCG Show
          </h2>
        </div>

        {/* Ticket */}
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
                {nextEvent.title}
              </h3>

              <p className="mt-3 text-lg font-medium text-[#2A1E68]">
                {nextEvent.location} • {nextEvent.address}, NY
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Date
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    {nextEvent.displayDate}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Time
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    {nextEvent.time}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-[#2A1E68]/70">
                    Event Size
                  </p>

                  <p className="mt-1 font-black text-[#0B1D5A]">
                    {nextEvent.vendors}
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
            <div className="relative hidden w-[2px] md:block">
              <div className="absolute inset-y-0 left-1/2 border-l-4 border-dashed border-[#2A1E68]/30" />
            </div>

            {/* Admit One */}
            <div className="flex flex-col items-center justify-center bg-[#2A1E68] p-8 text-center text-white">
              <p className="text-sm font-bold tracking-[0.3em] text-[#4FCBFF]">
                ADMIT ONE
              </p>

              <p className="mt-3 text-6xl font-black text-[#FFA500]">
                {month}
              </p>

              <p className="text-2xl font-black">
                {day}
              </p>

              <p className="mt-4 text-sm font-bold text-white/70">
                {nextEvent.location.toUpperCase()}
              </p>

              <a
                href={nextEvent.ticketLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-xl bg-[#FFA500] px-6 py-3 font-black text-[#2A1E68] transition hover:scale-105"
              >
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextEvent;