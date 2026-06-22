import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#2A1E68]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src="/bktcg-logo.png"
            alt="BKTCG Show Logo"
            className="h-16 w-auto drop-shadow-xl"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            to="/"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            About Us
          </Link>

          <Link
            to="/events"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Events
          </Link>

          <Link
            to="/contact"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Contact Us
          </Link>
        </div>

        {/* Ticket Button */}
        <button
          onClick={() => window.open("https://www.eventeny.com/events/bktcgshow-30309/?srsltid=AfmBOorm_xPUkg0unAn_ITQN30c2Xz1A4noied-G0jyMIwCzVZ1v0KBd", "_blank")}
          className="
            rounded-xl
            bg-gradient-to-r
            from-[#FFA500]
            to-[#FFD24A]
            px-6
            py-3
            font-bold
            text-[#0B1D5A]
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(255,165,0,.5)]
          "
        >
          Get Tickets
        </button>

      </div>
    </nav>
  );
}

export default Navbar;