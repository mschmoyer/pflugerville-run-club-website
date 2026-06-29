'use client';

import { useReducedMotion, motion } from 'framer-motion';
import { CLUB } from '@/lib/links';

const platforms = [
  {
    name: 'Facebook Group',
    description: 'Join 200+ members sharing runs, photos, and encouragement.',
    href: CLUB.facebook,
    label: 'Visit Facebook',
  },
  {
    name: 'Meetup',
    description: 'RSVP for upcoming runs and see who is showing up each week.',
    href: CLUB.meetup,
    label: 'Visit Meetup',
  },
  {
    name: 'Strava Club',
    description: 'Track your runs, log miles, and see club activity.',
    href: CLUB.strava,
    label: 'Visit Strava',
  },
];

export function Connect() {
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
    <section
      id="community"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-center"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Find Your People
        </motion.h2>
        <motion.p
          {...fadeUp(0.08)}
          className="text-center mb-12"
          style={{ color: 'var(--color-muted)' }}
        >
          Connect with the club across the platforms you already use.
        </motion.p>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.1 + i * 0.1)}
              className="flex flex-col justify-between p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div>
                <h3
                  className="text-2xl font-bold uppercase mb-3"
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    color: 'var(--color-text)',
                  }}
                >
                  {platform.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {platform.description}
                </p>
              </div>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded border transition-all"
                style={{
                  color: 'var(--color-brand)',
                  borderColor: 'var(--color-brand)',
                  fontFamily: 'var(--font-oswald)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    'var(--color-brand)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    'transparent';
                  (e.currentTarget as HTMLElement).style.color =
                    'var(--color-brand)';
                }}
              >
                {platform.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
