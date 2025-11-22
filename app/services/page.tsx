const serviceGroups = [
  {
    title: "HR Consultancy",
    description:
      "We become your dedicated HR partner, ensuring your people infrastructure is compliant, engaging, and ready for growth.",
    services: [
      {
        name: "Workplace Planning",
        detail:
          "Plan for your future workforce with job descriptions, temp sourcing, and employee engagement surveys.",
      },
      {
        name: "Employee Relations & Conflict Resolution",
        detail:
          "Lean on a single point of contact for expert guidance through employee relations challenges.",
      },
      {
        name: "Documentation",
        detail:
          "Employment contracts and documentation tailored to support how your business operates.",
      },
      {
        name: "Tailor-made Company Handbook",
        detail:
          "Policies and procedures that express your vision and give teams clarity on what success looks like.",
      },
    ],
  },
  {
    title: "Learning & Development",
    description:
      "Equip your teams and managers with the skills to deliver at their best across every stage of growth.",
    services: [
      {
        name: "Employee Training",
        detail:
          "Bespoke skills workshops for teams delivered in-person or via Zoom to match your schedules.",
      },
      {
        name: "Management Training",
        detail:
          "Quality coaching for line managers so they unlock performance and lead with confidence.",
      },
      {
        name: "EDI",
        detail:
          "Support designing equality, diversity, and inclusion programmes aligned to your goals.",
      },
      {
        name: "Employee Wellbeing",
        detail:
          "Interactive wellbeing programmes covering financial, emotional, physical, and mental health.",
      },
    ],
  },
  {
    title: "Career Coaching",
    description:
      "Coaching for graduates, returners, and career changers to build a clear roadmap and move forward.",
    services: [
      {
        name: "CV Guidance",
        detail:
          "Craft CVs that cut through the noise and showcase the strengths employers want to see.",
      },
      {
        name: "LinkedIn Revamp",
        detail:
          "Refresh your professional story with a step-by-step profile revamp and positioning guidance.",
      },
      {
        name: "Interview Preparation",
        detail:
          "Practice with tools and techniques that build confidence before every conversation.",
      },
      {
        name: "1-1 Career Coaching",
        detail:
          "Personalised coaching to remove barriers, find purpose, and reset with intention.",
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Bespoke HR, development, and coaching support.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            CultivateHR combines consultancy expertise with practical programmes that meet you where you are. Every
            engagement is tailored so your people feel supported from day one.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white bg-white/80 p-8 shadow-sm shadow-emerald-50">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">{group.title}</h2>
                  <p className="mt-3 max-w-3xl text-base text-slate-600">{group.description}</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Start a project
                </a>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {group.services.map((service) => (
                  <div key={service.name} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                    <p className="mt-3 text-sm text-slate-700">{service.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Ready when you are
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Let&apos;s create the people strategy your team deserves.
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Pick the support you need or mix-and-match services. Our consultants will co-design a roadmap that fits your
            timelines, budget, and ambitions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
            >
              Book a consultation
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-200"
            >
              Learn more about us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
