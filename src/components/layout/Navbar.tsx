import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950 shadow-lg shadow-cyan-400/20">
            N
          </div>

          <div>
            <p className="text-lg font-black tracking-wider text-white">
              NEXUS
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Gaming
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/game"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            Game
          </Link>

          <Link
            href="/leaderboard"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            Leaderboard
          </Link>

          <Link
            href="/news"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            News
          </Link>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden px-4 py-2 text-sm font-semibold text-slate-300 transition hover:text-white sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Join Now
          </Link>
        </div>
      </nav>
    </header>
  );
}