'use client';

import Image from 'next/image';
import { useReducedMotion, motion, type Variants } from 'framer-motion';
import { CLUB } from '@/lib/links';

const ctaButtons = [
  {
    label: 'Join on Meetup',
    href: CLUB.meetup,
    primary: true,
  },
  {
    label: 'Find us on Facebook',
    href: CLUB.facebook,
    primary: false,
  },
  {
    label: 'Strava Club',
    href: CLUB.strava,
    primary: false,
  },
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const reducedItemVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const activeItemVariants = shouldReduceMotion ? reducedItemVariants : itemVariants;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Decorative gradient blob background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Orange sunrise blob */}
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80vw',
            height: '60vh',
            background:
              'radial-gradient(ellipse at center, rgba(255,85,0,0.18) 0%, rgba(0,51,170,0.12) 50%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Deep blue lake blob */}
        <div
          className="absolute"
          style={{
            bottom: '0',
            left: '0',
            right: '0',
            height: '50vh',
            background:
              'radial-gradient(ellipse at 30% 100%, rgba(0,51,170,0.20) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Secondary orange glow */}
        <div
          className="absolute"
          style={{
            top: '30%',
            right: '-10%',
            width: '40vw',
            height: '40vw',
            background:
              'radial-gradient(circle, rgba(255,85,0,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Logo */}
        <motion.div variants={activeItemVariants} transition={{ duration: 0.5 }}>
          <Image
            src="/club-logo.png"
            alt={CLUB.name}
            width={200}
            height={200}
            style={{ objectFit: 'contain', width: 'auto', height: '120px' }}
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={activeItemVariants}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full border"
            style={{
              color: 'var(--color-brand)',
              borderColor: 'var(--color-brand)',
              fontFamily: 'var(--font-oswald)',
              letterSpacing: '0.15em',
            }}
          >
            Free &bull; All Paces Welcome &bull; Pflugerville, TX
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={activeItemVariants}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold uppercase leading-none tracking-tight"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Run the Lake.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={activeItemVariants}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Every {CLUB.meetDay} at {CLUB.meetTime}
        </motion.p>

        {/* Location */}
        <motion.p
          variants={activeItemVariants}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl flex items-center gap-2"
          style={{ color: 'var(--color-muted)' }}
        >
          <span>📍</span>
          <span>{CLUB.location}, TX</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={activeItemVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
        >
          {ctaButtons.map((btn) => (
            <a
              key={btn.href}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-bold uppercase tracking-wide rounded text-sm sm:text-base transition-all"
              style={
                btn.primary
                  ? {
                      backgroundColor: 'var(--color-brand)',
                      color: '#fff',
                      fontFamily: 'var(--font-oswald)',
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: 'var(--color-text)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      fontFamily: 'var(--font-oswald)',
                    }
              }
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldReduceMotion ? 0 : 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 8, 0],
                  transition: { repeat: Infinity, duration: 1.5 },
                }
          }
          style={{ color: 'var(--color-muted)' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
