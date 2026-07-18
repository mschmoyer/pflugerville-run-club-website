'use client';

import { useReducedMotion, motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import type { RunClubRace } from '@/lib/runsignup';

function formatRaceDate(start: string, end?: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const startDate = new Date(start);
  if (!end) {
    return formatter.format(startDate);
  }

  const endDate = new Date(end);
  return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
}

export function UpcomingRacesList({ races }: { races: RunClubRace[] }) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-50px' },
          transition: { duration: 0.5, delay },
        };

  return (
    <>
      {/* Section heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center"
        style={{ fontFamily: 'var(--font-oswald)', color: 'var(--color-text)' }}
      >
        Upcoming Races
      </motion.h2>

      {races.length === 0 ? (
        <motion.div {...fadeUp(0.1)} className="text-center max-w-xl mx-auto">
          <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
            No upcoming races listed right now — check back soon.
          </p>
          <a
            href="https://runsignup.com/Races/TX/Pflugerville"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold transition-colors"
            style={{ color: 'var(--color-brand)' }}
          >
            Browse Pflugerville races on RunSignup →
          </a>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.map((race, i) => {
            const location =
              race.venueName || race.address || (race.city ? `${race.city}, ${race.state}` : '');

            return (
              <motion.div
                key={race.id}
                {...fadeUp(i * 0.1)}
                className="rounded-lg p-6 relative flex flex-col"
                style={{
                  backgroundColor: 'var(--color-surface-2)',
                  borderTop: '3px solid var(--color-brand)',
                }}
              >
                {race.isAtLakePflugerville && (
                  <span
                    className="inline-block self-start text-xs uppercase tracking-widest font-semibold mb-3 px-2 py-1 rounded"
                    style={{
                      color: 'var(--color-brand)',
                      backgroundColor: 'rgba(255, 85, 0, 0.12)',
                      fontFamily: 'var(--font-oswald)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Lake Pflugerville
                  </span>
                )}

                <h3
                  className="text-xl font-bold uppercase mb-2"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--color-text)' }}
                >
                  {race.name}
                </h3>

                <div
                  className="flex items-center gap-2 text-sm mb-2"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                >
                  <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-brand)' }} strokeWidth={1.75} />
                  <span>{formatRaceDate(race.startDate, race.endDate)}</span>
                </div>

                {location && (
                  <div
                    className="flex items-start gap-2 text-sm mb-3"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand)' }} strokeWidth={1.75} />
                    <span>{location}</span>
                  </div>
                )}

                {race.distances.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {race.distances.map((distance) => (
                      <span
                        key={distance}
                        className="text-xs font-semibold uppercase rounded-full px-3 py-1"
                        style={{
                          color: 'var(--color-brand)',
                          border: '1px solid var(--color-brand)',
                          fontFamily: 'var(--font-oswald)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {distance}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={race.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm font-semibold transition-colors"
                  style={{ color: 'var(--color-brand)' }}
                >
                  Register →
                </a>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
