function ContactUs() {
  const inputClasses =
    "rounded-xl border border-white/15 bg-white/10 px-6 py-5 text-white outline-none backdrop-blur-md placeholder:text-white/50 transition focus:border-[#FFA500] focus:bg-white/15";

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-20 text-white">
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FFA500]/10 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-[#4FCBFF]/10 blur-[120px]" />

      <section className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left: Contact Form */}
        <div>
          <p className="font-bold uppercase tracking-[0.35em] text-[#FFA500]">
            Get In Touch
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Contact Us & Meet Our Team
            <span className="text-[#4FCBFF]">!</span>
          </h1>

          <form
  name="contact"
  method="POST"
  data-netlify="true"
  className="mt-14 space-y-6"
>
  <input type="hidden" name="form-name" value="contact" />

  <div className="grid gap-6 md:grid-cols-2">
    <input name="name" type="text" placeholder="Your Name" className={inputClasses} required />
    <input name="email" type="email" placeholder="Email Address" className={inputClasses} required />
    <input name="phone" type="tel" placeholder="Phone Number" className={inputClasses} />
    <input name="subject" type="text" placeholder="Subject" className={inputClasses} required />
  </div>

  <textarea
    name="message"
    placeholder="Write Message..."
    rows="6"
    className={`${inputClasses} w-full`}
    required
  />

  <button
    type="submit"
    className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-4 font-black text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,.45)]"
  >
    Send Message →
  </button>
</form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <p className="font-bold uppercase tracking-[0.35em] text-[#FFA500]">
            Information
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Contact Information
            <span className="text-[#4FCBFF]">!</span>
          </h2>

          <div className="mt-14 space-y-4">

  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
    <h3 className="text-xl font-black text-[#FFA500]">
      Event Venue
    </h3>

    <p className="mt-2 text-[#4FCBFF]">
      Brooklyn College
    </p>

    <p className="text-sm text-white/70">
      2900 Bedford Ave, Brooklyn, NY
    </p>
  </div>

  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
    <h3 className="text-xl font-black text-[#FFA500]">
      Social Media
    </h3>

    <p className="mt-2 text-sm text-white/70">
      Reach out on Instagram
    </p>

    <p className="text-[#4FCBFF]">
      @bktcgshow
    </p>
  </div>

  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
    <h3 className="text-xl font-black text-[#FFA500]">
      Email
    </h3>

    <p className="mt-2 text-sm text-white/70">
      Contact us At: info@bktcgshow.com
    </p>
  </div>

</div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;