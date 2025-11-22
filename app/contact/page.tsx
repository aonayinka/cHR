const contactOptions = [
  {
    title: "Consultations",
    detail: "Book a 30-minute HR consultation to discuss your goals.",
    action: { label: "Book a call", href: "/contact" },
  },
  {
    title: "Email",
    detail: "Prefer writing it down? Reach us anytime.",
    action: { label: "hello@cultivatehr.com", href: "mailto:hello@cultivatehr.com" },
  },
  {
    title: "Phone",
    detail: "Weekdays 9am – 5pm (UK time).",
    action: { label: "+44 170 525 1234", href: "tel:+441705251234" },
  },
];

const ContactPage = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Get in touch
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Tell us about your people priorities.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Whether you need on-demand HR guidance, learning programmes, or career coaching,
            we&apos;re here to help you build confident teams.
          </p>
          <a
            href="https://wa.me/44705251234"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 md:hidden"
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Send us a note</h2>
          <p className="mt-3 text-sm text-slate-600">
            Share a few details and we&apos;ll get back within two business days.
          </p>
          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company (optional)
              </label>
              <input
                id="company"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                placeholder="CultivateHR"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                placeholder="Tell us about your HR or coaching needs"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
            >
              Submit enquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-white/70 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Ways to reach us</h2>
            <div className="mt-6 space-y-6">
              {contactOptions.map((option) => (
                <div key={option.title} className="rounded-2xl border border-slate-100 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {option.title}
                  </p>
                  <p className="mt-2 text-base text-slate-700">{option.detail}</p>
                  <a
                    href={option.action.href}
                    className="mt-3 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    {option.action.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h3 className="text-xl font-semibold text-emerald-900">WhatsApp support</h3>
            <p className="mt-3 text-sm text-emerald-800">
              On mobile, tap below to send us a WhatsApp message and we&apos;ll reply within a few hours.
            </p>
            <a
              href="https://wa.me/44705251234"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
