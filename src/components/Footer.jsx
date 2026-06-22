import { Smartphone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1D5A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* BKTCG */}
          <div>
            <h3 className="text-2xl font-black text-[#FFA500]">
              BKTCG Show
            </h3>

            <p className="mt-4 max-w-sm text-white/70">
              Brooklyn's premier trading card event bringing together
              collectors, vendors, players, and families through a shared
              passion for the hobby.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black text-[#FFA500]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-white/70">
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/events">Upcoming Events</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black text-[#FFA500]">
              Connect With Us
            </h3>

            <div className="mt-4 flex flex-col gap-4 text-white/70">

              <div className="flex items-center gap-3">
                <Smartphone size={18} className="text-[#4FCBFF]" />
                <span>Our Instagram: @bktcgshow</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4FCBFF]" />
                <span>info@bktcgshow.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#4FCBFF]" />
                <span>Brooklyn, NY</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} BKTCG Show. All Rights Reserved.
            </p>

            {/* Powered By */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/50">
                Powered By
              </span>

              <img
                src="/MordecAI_logo.png"
                alt="MordecAI Logo"
                className="h-8 w-auto"
              />
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;