import { useState } from "react";
import events from "../data/events";

function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [openMoreInfoId, setOpenMoreInfoId] = useState(null);
  const [openFloorplanId, setOpenFloorplanId] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => new Date(`${event.date}T23:59:59`) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events
    .filter((event) => new Date(`${event.date}T23:59:59`) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedEvents =
    activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const toggleMoreInfo = (id) => {
    setOpenMoreInfoId(openMoreInfoId === id ? null : id);
  };

  const toggleFloorplan = (id) => {
    setOpenFloorplanId(openFloorplanId === id ? null : id);
  };

  return (
    <main className="bg-[#2A1E68] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-24 text-center">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            BKTCG Events
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Find Your Next Show
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Explore upcoming BKTCG events, ticket information, vendor
            opportunities, floorplans, and previous shows.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="bg-white px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-2xl bg-[#2A1E68]/5 p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("upcoming")}
                className={`rounded-xl px-6 py-3 font-bold transition ${
                  activeTab === "upcoming"
                    ? "bg-[#2A1E68] text-white shadow"
                    : "text-[#2A1E68]/65 hover:text-[#2A1E68]"
                }`}
              >
                Upcoming Events
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("past")}
                className={`rounded-xl px-6 py-3 font-bold transition ${
                  activeTab === "past"
                    ? "bg-[#2A1E68] text-white shadow"
                    : "text-[#2A1E68]/65 hover:text-[#2A1E68]"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {activeTab === "upcoming" && displayedEvents.length === 0 && (
            <div className="mx-auto max-w-4xl rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-10 text-center shadow-lg">
              <p className="font-bold uppercase tracking-widest text-[#FFA500]">
                Stay Tuned
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                No Upcoming Shows Yet
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-[#2A1E68]/70">
                Follow BKTCG for announcements about future shows, ticket
                releases, and vendor opportunities.
              </p>

              <a
                href="https://www.instagram.com/bktcgshow"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
              >
                Follow @bktcgshow
              </a>
            </div>
          )}

          <div className="space-y-12">
            {displayedEvents.map((event) => {
              const isUpcoming = activeTab === "upcoming";

              return (
                <div
                  key={event.id}
                  className="rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-8 shadow-[0_15px_40px_rgba(0,0,0,.15)] md:p-12"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
                    {/* Main Info */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-bold uppercase tracking-widest text-[#FFA500]">
                          {event.displayDate}
                        </p>

                        {!isUpcoming && (
                          <span className="rounded-full bg-[#2A1E68]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#2A1E68]">
                            Past Event
                          </span>
                        )}
                      </div>

                      <h2 className="mt-3 text-3xl font-black md:text-5xl">
                        {event.title}
                      </h2>

                      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2A1E68]/75">
                        {event.description}
                      </p>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white p-5 shadow">
                          <p className="font-black text-[#0B1D5A]">Date</p>
                          <p className="mt-1 text-[#2A1E68]/75">
                            {event.displayDate}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow">
                          <p className="font-black text-[#0B1D5A]">Time</p>
                          <p className="mt-1 text-[#2A1E68]/75">
                            {event.time}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow">
                          <p className="font-black text-[#0B1D5A]">Venue</p>
                          <p className="mt-1 text-[#2A1E68]/75">
                            {event.location}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow">
                          <p className="font-black text-[#0B1D5A]">Area</p>
                          <p className="mt-1 text-[#2A1E68]/75">
                            {event.neighborhood}
                          </p>
                        </div>
                      </div>

                      {isUpcoming && (
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                          <a
                            href={event.ticketLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 text-center font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
                          >
                            Get Tickets
                          </a>

                          {event.vendorLink && (
                            <a
                              href={event.vendorLink}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-xl border-2 border-[#2A1E68] px-8 py-3 text-center font-bold text-[#2A1E68] transition hover:bg-[#2A1E68] hover:text-white"
                            >
                              Apply To Be A Vendor
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#2A1E68] to-[#5B2DB8] p-8 text-white shadow-2xl">
                      <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
                        {isUpcoming ? "Event Details" : "Show Highlights"}
                      </p>

                      <div className="mt-6 space-y-5">
                        <div>
                          <p className="text-3xl font-black text-[#FFA500]">
                            {event.venueSize}
                          </p>
                          <p className="text-white/75">Event scale</p>
                        </div>

                        <div>
                          <p className="text-3xl font-black text-[#FFA500]">
                            {event.vendors}
                          </p>
                          <p className="text-white/75">
                            {isUpcoming ? "Expected setup" : "Show setup"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xl font-black text-[#FFA500]">
                            Main Focus
                          </p>
                          <p className="mt-1 text-white/75">{event.focus}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* More Info */}
                    <div className="h-fit rounded-2xl border border-[#2A1E68]/10 bg-white shadow">
                      <button
                        type="button"
                        onClick={() => toggleMoreInfo(event.id)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left font-black text-[#0B1D5A]"
                      >
                        <span>{isUpcoming ? "More Info" : "View Event"}</span>

                        <span className="text-[#FFA500]">
                          {openMoreInfoId === event.id ? "▲" : "▼"}
                        </span>
                      </button>

                      {openMoreInfoId === event.id && (
                        <div className="space-y-6 border-t border-[#2A1E68]/10 px-6 py-6">
                          <div>
                            <h3 className="font-black text-[#FFA500]">
                              General Show Info
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[#2A1E68]/75">
                              {event.description}
                            </p>
                          </div>

                          <div>
                            <h3 className="font-black text-[#FFA500]">
                              Location
                            </h3>

                            <p className="mt-2 text-sm text-[#2A1E68]/75">
                              {event.location}
                              <br />
                              {event.address}
                            </p>

                            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                              <a
                                href={event.googleMaps}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl bg-[#2A1E68] px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-[#35267F]"
                              >
                                Google Maps
                              </a>

                              <a
                                href={event.appleMaps}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-[#2A1E68] px-4 py-2 text-center text-sm font-bold text-[#2A1E68] transition hover:bg-[#2A1E68] hover:text-white"
                              >
                                Apple Maps
                              </a>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-black text-[#FFA500]">
                              Show Hours
                            </h3>

                            <p className="mt-2 text-sm text-[#2A1E68]/75">
                              {event.time}
                            </p>
                          </div>

                          {event.ticketTypes?.length > 0 && (
                            <div>
                              <h3 className="font-black text-[#FFA500]">
                                Ticket Types
                              </h3>

                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#2A1E68]/75">
                                {event.ticketTypes.map((ticket) => (
                                  <li key={ticket}>{ticket}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Floorplan */}
                    <div className="h-fit rounded-2xl border border-[#2A1E68]/10 bg-white shadow">
                      <button
                        type="button"
                        onClick={() => toggleFloorplan(event.id)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left font-black text-[#0B1D5A]"
                      >
                        <span>Floorplan</span>

                        <span className="text-[#FFA500]">
                          {openFloorplanId === event.id ? "▲" : "▼"}
                        </span>
                      </button>

                      {openFloorplanId === event.id && (
                        <div className="border-t border-[#2A1E68]/10 px-6 py-6">
                          {event.floorplan ? (
                            <>
                              <p className="mb-4 text-sm text-[#2A1E68]/75">
                                View the vendor table layout for this BKTCG
                                Show.
                              </p>

                              <div className="overflow-hidden rounded-2xl border border-[#4FCBFF]/20 bg-white shadow-lg">
                                <img
                                  src={event.floorplan}
                                  alt={`${event.title} floorplan`}
                                  className="w-full object-contain"
                                />
                              </div>
                            </>
                          ) : (
                            <div className="py-6 text-center">
                              <p className="font-black text-[#0B1D5A]">
                                Floorplan Coming Soon
                              </p>

                              <p className="mt-2 text-sm text-[#2A1E68]/65">
                                The vendor layout will be added once it becomes
                                available.
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;