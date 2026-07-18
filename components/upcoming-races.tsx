import { getUpcomingRaces } from '@/lib/runsignup';
import { UpcomingRacesList } from '@/components/upcoming-races-list';

export async function UpcomingRaces() {
  const races = await getUpcomingRaces();

  return (
    <section
      id="upcoming-races"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        <UpcomingRacesList races={races} />
      </div>
    </section>
  );
}
