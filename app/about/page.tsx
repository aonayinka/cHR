const pillars = [
  {
    title: "We're experts",
    description:
      "We provide people solutions rooted in real experience. We analyse the challenges our clients face, advise with their best interests in mind, and deliver pragmatic solutions with an uncompromising focus on quality.",
  },
  {
    title: "We develop partnerships",
    description:
      "We aim to become insiders rather than external consultants. By forming long-term partnerships, we embed ourselves within the business so our clients' success becomes our success.",
  },
  {
    title: "We have integrity",
    description:
      "Integrity sits at the heart of everything we do. If we cannot help, we say so. We listen, align words with actions, and deliver exactly what we promise.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#FFFAFB] text-slate-900">
      <header className="">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            About Us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-green-950 sm:text-5xl">
            People-first consultants delivering pragmatic HR impact.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            At CultivateHR, we are a team of passionate, pragmatic, flexible, and agile professionals dedicated to improving
            organisational performance through people. With years of industry expertise, we bring the experience required to handle even the most challenging projects.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16 text-base text-slate-700 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            CultivateHR Consultancy
          </h2>
          <p className="mt-4 leading-relaxed">
            We apply thoughtful strategy and people insight to drive measurable outcomes. Every engagement is built upon
            our values of expertise, partnership, and integrity. By combining pragmatic action with deep listening, we
            ensure our solutions align with the unique culture of every client.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-white bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {pillar.title}
              </p>
              <p className="mt-4 text-sm text-slate-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
