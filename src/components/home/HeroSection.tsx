import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20 text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-700/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Built with Unreal Engine
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Enter a world
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              beyond reality.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore an immersive universe, challenge powerful enemies,
            unlock achievements, and rise through the global rankings.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-cyan-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Start Playing
            </Link>

            <Link
              href="/game"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              Explore the Game
            </Link>
          </div>

          {/* Game statistics */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-black text-white">
                25K+
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Players
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">
                150+
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Achievements
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">
                4.9
              </p>

              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Player Rating
              </p>
            </div>
          </div>
        </div>

        {/* Game visual placeholder */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-950 p-3 shadow-2xl shadow-cyan-950/50">
            <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 p-10">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />

              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />

              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.35)]" />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  The journey begins
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  NEXUS
                  <span className="block text-slate-400">
                    AWAKENING
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}