const services = [
  {
    title: "HR Consultancy",
    description:
      "Tailored HR frameworks, policies, and advisory support that keep you compliant while nurturing a culture people love.",
    items: ["Strategic HR roadmaps", "Policy reviews", "On-call advisory"],
  },
  {
    title: "Learning & Development",
    description:
      "Capability-building experiences that empower teams with the confidence to lead, manage, and collaborate effectively.",
    items: ["Leadership labs", "Manager bootcamps", "On-demand training"],
  },
  {
    title: "Career Coaching",
    description:
      "One-to-one coaching for graduates, returners, and career shifters to clarify goals and move with purpose.",
    items: ["Graduate pathways", "Return-to-work support", "Mid-career planning"],
  },
];

const supportHighlights = [
  {
    label: "People Foundations",
    detail: "We set up contracts, handbooks, and onboarding journeys that scale with you.",
  },
  {
    label: "On-Demand Expertise",
    detail: "Access senior HR consultants without the full-time overhead, exactly when you need them.",
  },
  {
    label: "Coaching Culture",
    detail: "Equip managers with coaching skills so conversations stay constructive and future-focused.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-[#FFFAFB]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-900">
              People-first partnership
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Cultivate confident teams with bespoke HR and coaching support.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              CultivateHR Consultancy works with founders, leadership teams, and individuals to
              co-create people strategies that unlock growth without unnecessary risk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
              >
                Book a discovery call
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-green-800"
              >
                Explore our services
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-lg shadow-green-900/60">
            <div>
              <p className="text-4xl font-semibold text-slate-900">2023</p>
              <p className="text-sm uppercase tracking-wide text-slate-500">
                Established
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              CultivateHR is a consultancy born to help UK businesses and individuals scale with
              clarity. We provide bespoke HR, coaching, and development services so every team member feels supported.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">70%</p>
                <p className="text-slate-500">clients led by small businesses</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">3+</p>
                <p className="text-slate-500">specialist service pillars</p>
              </div>
            </div>
          </div>
        </div>
      </section>



     {/* Our Services */}
      <section className="border-t border-white bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">Our services</h2>
            <p className="mt-3 text-lg text-slate-600">
              Carefully selected consultants and programmes deliver the exact expertise you need, with flexibility built in.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-emerald-200"
              >
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-900" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}

      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Our story</p>
            <h2 className="mt-4 text-3xl font-semibold">
              Established in 2023 to provide bespoke HR and coaching support throughout the UK.
            </h2>
            <p className="mt-6 text-base text-slate-200">
              CultivateHR Consultancy offers bespoke Human Resources and Coaching services to private individuals and businesses in the UK, supporting business growth and adding value with reduced risk. We provide career coaching for graduates, parents returning to work, and those making early or mid-career changes to gain a clear vision of what is right.
            </p>
            <p className="mt-4 text-base text-slate-200">
              CultivateHR has carefully selected its services and consultants to offer a combination of unique expertise to help you achieve your goals.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-8">
            <h3 className="text-2xl font-semibold text-white">
              How we assist small businesses
            </h3>
            <p className="mt-4 text-sm text-slate-200">
              Smaller organisations rarely have the luxury of an in-house HR team. We become your trusted people partner.
            </p>
            <dl className="mt-8 space-y-6 text-sm">
              {supportHighlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt className="font-semibold text-white">{highlight.label}</dt>
                  <dd className="mt-1 text-slate-300">{highlight.detail}</dd>
                </div>
              ))}
            </dl>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Talk to an HR consultant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
