import { getUpcomingRaces } from '@/lib/runsignup';
import { UpcomingRacesList } from '@/components/upcoming-races-list';

export async function UpcomingRaces() {
  const races = (await getUpcomingRaces()).filter(
    (race) => race.isAtLakePflugerville,
  );

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
