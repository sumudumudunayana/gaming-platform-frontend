const features = [
  {
    number: '01',
    title: 'Immersive World',
    description:
      'Explore a cinematic world powered by Unreal Engine, filled with detailed environments, hidden locations, and unforgettable encounters.',
  },
  {
    number: '02',
    title: 'Competitive Rankings',
    description:
      'Compete against players, improve your performance, earn experience points, and climb the global leaderboard.',
  },
  {
    number: '03',
    title: 'Epic Challenges',
    description:
      'Complete challenging missions, defeat powerful enemies, and unlock exclusive achievements as you progress.',
  },
  {
    number: '04',
    title: 'Player Progression',
    description:
      'Build your player profile, increase your level, track your statistics, and showcase your accomplishments.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      {/* Background glow */}
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Game Experience
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            More than a game.
            <span className="block text-slate-500">
              Become part of the world.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            Discover an evolving gaming experience where every challenge,
            achievement, and victory contributes to your journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]"
            >
              <div className="absolute right-6 top-3 text-7xl font-black text-white/[0.025] transition group-hover:text-cyan-400/[0.05]">
                {feature.number}
              </div>

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-sm font-black text-cyan-400">
                  {feature.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-8 h-px w-12 bg-cyan-400/50 transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}