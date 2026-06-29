'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Clock, RotateCw } from 'lucide-react';
import { CLUB } from '@/lib/links';

export function MapSection() {
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

  const details = [
    {
      icon: MapPin,
      text: (
        <>
          We start at <strong>Lake Pflugerville Park</strong>, by the main parking lot on Kelly Lane.
        </>
      ),
    },
    {
      icon: RotateCw,
      text: (
        <>
          We run <strong>one ~{CLUB.loopDistance} lap</strong> of the lake — many members run two.
        </>
      ),
    },
    {
      icon: Clock,
      text: (
        <>
          Every <strong>{CLUB.meetDay}</strong> at <strong>{CLUB.meetTime}</strong>, year-round.
        </>
      ),
    },
  ];

  return (
    <section
      id="map"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-center"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Where We Meet
        </motion.h2>
        <motion.p
          {...fadeUp(0.08)}
          className="text-center mb-12"
          style={{ color: 'var(--color-muted)' }}
        >
          {CLUB.location}, Pflugerville, TX
        </motion.p>

        {/* Grid: copy left, map right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-5">
            {details.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--color-brand)' }}
                  strokeWidth={1.75}
                />
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {item.text}
                </p>
              </div>
            ))}

            <a
              href={CLUB.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-semibold transition-colors"
              style={{ color: 'var(--color-brand)' }}
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            {...fadeUp(0.18)}
            className="rounded-lg overflow-hidden border"
            style={{ borderColor: 'var(--color-brand)' }}
          >
            <iframe
              src={CLUB.mapEmbed}
              title="Map of Lake Pflugerville meetup spot"
              className="w-full"
              style={{ height: 400, border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
