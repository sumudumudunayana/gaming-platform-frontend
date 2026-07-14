import { Profile } from '@/types/profile';

async function getProfiles(): Promise<Profile[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not configured');
  }

  const response = await fetch(`${apiUrl}/profiles`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Unable to retrieve player profiles');
  }

  return response.json();
}

export default async function Home() {
  const profiles = await getProfiles();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Unreal Gaming Platform
        </p>

        <h1 className="text-4xl font-bold">
          Player Profiles
        </h1>

        <p className="mt-3 text-slate-400">
          Player information retrieved from NestJS and Supabase.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {profile.display_name ?? 'New Player'}
                  </h2>

                  <p className="text-sm text-cyan-400">
                    @{profile.username}
                  </p>
                </div>

                <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-300">
                  Level {profile.player_level}
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                {profile.bio ?? 'This player has not added a bio yet.'}
              </p>

              <div className="mt-6 border-t border-slate-800 pt-4">
                <p className="text-sm text-slate-300">
                  Experience points:{' '}
                  <span className="font-semibold text-white">
                    {profile.experience_points}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}