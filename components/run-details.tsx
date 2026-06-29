'use client';

import { useReducedMotion, motion } from 'framer-motion';
import { CLUB } from '@/lib/links';

const cards = [
  {
    title: 'WHEN',
    lines: [CLUB.meetDay, CLUB.meetTime],
  },
  {
    title: 'WHERE',
    lines: [CLUB.location + ', TX'],
    mapLink: CLUB.mapLink,
  },
  {
    title: 'DISTANCE',
    lines: [CLUB.loopDistance + ' loop', 'All paces welcome'],
  },
];

export function RunDetails() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
      };

  return (
    <section
      id="run-details"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center"
          style={{ fontFamily: 'var(--font-oswald)', color: 'var(--color-text)' }}
        >
          Run Details
        </motion.h2>

        {/* Stat cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 rounded-lg p-6 relative"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                borderTop: '3px solid var(--color-brand)',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  color: 'var(--color-brand)',
                  fontFamily: 'var(--font-oswald)',
                  letterSpacing: '0.15em',
                }}
              >
                {card.title}
              </p>
              {card.lines.map((line, j) => (
                <p
                  key={j}
                  className={
                    j === 0
                      ? 'text-2xl font-bold uppercase'
                      : 'text-base mt-1'
                  }
                  style={{
                    fontFamily:
                      j === 0 ? 'var(--font-oswald)' : 'var(--font-inter)',
                    color:
                      j === 0 ? 'var(--color-text)' : 'var(--color-muted)',
                  }}
                >
                  {line}
                </p>
              ))}
              {card.mapLink && (
                <a
                  href={card.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold transition-colors"
                  style={{ color: 'var(--color-brand)' }}
                >
                  Get Directions →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Description paragraph */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center"
          style={{ color: 'var(--color-muted)' }}
        >
          No sign-up needed. No fees. Just show up at the main parking lot on
          Kelly Lane and run. Bring water and sunscreen — the loop is 3 miles
          around Lake Pflugerville. All paces welcome, from walkers to fast
          runners.
        </motion.p>
      </div>
    </section>
  );
}
