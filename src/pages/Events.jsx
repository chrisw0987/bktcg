import { useState } from "react";

function Events() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showFloorplan, setShowFloorplan] = useState(false);

  const event = {
    title: "BKTCG Show",
    date: "July 19, 2026",
    time: "10:00 AM – 5:00 PM EDT",
    generalAdmissionTime: "11:00 AM – 5:00 PM EDT",
    earlyBirdTime: "10:00 AM – 5:00 PM EDT",
    location: "Brooklyn College",
    address: "2900 Bedford Ave, Brooklyn, NY 11210",
    neighborhood: "Flatbush",
    venueSize: "10,000 sq. ft.",
    vendors: "150+ vendors",
    focus:
      "Pokémon, One Piece, graded slabs, vintage packs, sealed products, and more",
    ticketLink:
      "https://www.eventeny.com/events/bktcgshow-30309/?srsltid=AfmBOorm_xPUkg0unAn_ITQN30c2Xz1A4noied-G0jyMIwCzVZ1v0KBd",
    vendorLink: "https://www.eventeny.com/events/vendor/?id=48671",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Brooklyn%20College%202900%20Bedford%20Ave%20Brooklyn%20NY%2011210",
    appleMaps:
      "https://maps.apple.com/?q=Brooklyn%20College%202900%20Bedford%20Ave%20Brooklyn%20NY%2011210",
  };

  return (
    <main className="bg-[#2A1E68] text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-24 text-center">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            Upcoming Events
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            BKTCG Show&apos;s First Official Event
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Join Brooklyn&apos;s trading card community for a full day of
            buying, selling, trading, and collecting.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto max-w-6xl rounded-3xl border-2 border-[#4FCBFF]/20 bg-[#F8F7FF] p-8 shadow-[0_15px_40px_rgba(0,0,0,.15)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
            <div>
              <p className="font-bold uppercase tracking-widest text-[#FFA500]">
                July 19, 2026
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                {event.title}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2A1E68]/75">
                Brooklyn&apos;s premiere large-scale TCG gathering featuring
                vendors, collectors, dedicated trading zones, rare singles,
                graded cards, sealed products, and custom merchandise.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow">
                  <p className="font-black text-[#0B1D5A]">Date</p>
                  <p className="mt-1 text-[#2A1E68]/75">{event.date}</p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow">
                  <p className="font-black text-[#0B1D5A]">Time</p>
                  <p className="mt-1 text-[#2A1E68]/75">{event.time}</p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow">
                  <p className="font-black text-[#0B1D5A]">Venue</p>
                  <p className="mt-1 text-[#2A1E68]/75">{event.location}</p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow">
                  <p className="font-black text-[#0B1D5A]">Area</p>
                  <p className="mt-1 text-[#2A1E68]/75">
                    {event.neighborhood}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={event.ticketLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 text-center font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
                >
                  Get Tickets
                </a>

                <a
                  href={event.vendorLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl border-2 border-[#2A1E68] px-8 py-3 text-center font-bold text-[#2A1E68] transition hover:scale-105 hover:bg-[#2A1E68] hover:text-white"
                >
                  Apply To Be A Vendor
                </a>
              </div>

              
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#2A1E68] to-[#5B2DB8] p-8 text-white shadow-2xl">
              <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
                Event Details
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-3xl font-black text-[#FFA500]">
                    {event.venueSize}
                  </p>
                  <p className="text-white/75">Large event venue</p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#FFA500]">
                    {event.vendors}
                  </p>
                  <p className="text-white/75">Vendor setup expected</p>
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
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="h-fit rounded-2xl border border-[#2A1E68]/10 bg-white shadow">
                  <button
                    type="button"
                    onClick={() => setShowMoreInfo(!showMoreInfo)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-black text-[#0B1D5A]"
                  >
                    <span>More Info</span>
                    <span className="text-[#FFA500]">
                      {showMoreInfo ? "▲" : "▼"}
                    </span>
                  </button>

                  {showMoreInfo && (
                    <div className="space-y-6 border-t border-[#2A1E68]/10 px-6 py-6">
                      <div>
                        <h3 className="font-black text-[#FFA500]">
                          General Show Info
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#2A1E68]/75">
                          Brooklyn&apos;s large-scale TCG show in Flatbush with
                          vendors, rare singles, graded slabs, sealed products,
                          trading zones, and hidden gems.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-black text-[#FFA500]">Location</h3>
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
                          Early Bird: {event.earlyBirdTime}
                          <br />
                          General Admission: {event.generalAdmissionTime}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-black text-[#FFA500]">
                          Ticket Types
                        </h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#2A1E68]/75">
                          <li>Early Bird Admission — entry at 10:00 AM</li>
                          <li>General Admission — entry at 11:00 AM</li>
                          <li>Under 5 Admission — free with paying adult</li>
                          <li>Additional Vendor Pass — message before purchase</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="h-fit rounded-2xl border border-[#2A1E68]/10 bg-white shadow">
                  <button
                    type="button"
                    onClick={() => setShowFloorplan(!showFloorplan)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-black text-[#0B1D5A]"
                  >
                    <span>Floorplan</span>
                    <span className="text-[#FFA500]">
                      {showFloorplan ? "▲" : "▼"}
                    </span>
                  </button>

                  {showFloorplan && (
                    <div className="border-t border-[#2A1E68]/10 px-6 py-6">
                      <p className="mb-4 text-sm text-[#2A1E68]/75">
                        Preview the vendor table layout for the BKTCG Show.
                      </p>

                      <div className="overflow-hidden rounded-2xl border border-[#4FCBFF]/20 bg-white shadow-lg">
                        <img
                          src="/brooklyn_show_floorplan_preview.jpg"
                          alt="BKTCG Show Floorplan"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
        </div>
      </section>
    </main>
  );
}

export default Events;