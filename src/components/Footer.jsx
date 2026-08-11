import { Smartphone, Mail, MapPin } from "lucide-react";
import logo from '../assets/MordecAI_logo.png';
import email_logo from '../assets/gmail_logo.svg';
import ig_logo from '../assets/ig_logo.svg';
import tiktok_logo from '../assets/tiktok_logo.svg';

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
                <img src={email_logo} className="w-7 h-7"></img>
                <span>bktcgshow@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={ig_logo} className="w-7 h-7"></img>
                <span>@bktcgshow</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={tiktok_logo} className="w-7 h-7"></img>
                <span>@bktcgshow</span>
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
            <a
            href="https://getmordecai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 self-start border border-white/10 bg-white/5 px-4 py-2 transition hover:border-[#E3AE4F] hover:bg-white/10"
          >
            <span className="text-sm text-white/50 transition group-hover:text-white">
              Developed by
            </span>

            <img
              src={logo}
              alt="MordecAI"
              className="h-7 w-auto transition group-hover:scale-105"
            />
          </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;