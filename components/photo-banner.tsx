'use client';

import Image from 'next/image';
import { useReducedMotion, motion } from 'framer-motion';

export function PhotoBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden" style={{ height: '420px' }}>
      <Image
        src="/club-group-photo-1.png"
        alt="Pflugerville Running Club members gathered at Lake Pflugerville after a Saturday run"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
        sizes="100vw"
        quality={85}
      />

      {/* Dark gradient overlay — heavier at bottom where text sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.82) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-14"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight"
          style={{ fontFamily: 'var(--font-oswald)', color: '#fff' }}
        >
          Show Up. Run. Find Your People.
        </p>
        <p
          className="mt-3 text-base sm:text-lg"
          style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-inter)' }}
        >
          Every Saturday &middot; Lake Pflugerville, TX
        </p>
      </motion.div>
    </section>
  );
}
