'use client';

import Image from 'next/image';
import { useReducedMotion, motion, type Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CLUB } from '@/lib/links';
import { CalendarButton } from '@/components/calendar-button';

const ctaButtons = [
  {
    label: 'Join on Meetup',
    href: CLUB.meetup,
    brandColor: '#ED1C40',
  },
  {
    label: 'Find us on Facebook',
    href: CLUB.facebook,
    brandColor: '#1877F2',
  },
  {
    label: 'Strava Club',
    href: CLUB.strava,
    brandColor: '#FC4C02',
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
        {/* Logo with glow + speed particles */}
        <motion.div variants={activeItemVariants} transition={{ duration: 0.5 }} className="relative">
          {/* Pulsing orange glow — extends well beyond logo bounds */}
          <motion.div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              top: '-80px',
              left: '-80px',
              right: '-80px',
              bottom: '-80px',
              background: 'radial-gradient(circle, rgba(255,85,0,0.65) 0%, rgba(255,85,0,0.2) 40%, transparent 70%)',
              filter: 'blur(55px)',
              zIndex: 0,
            }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Speed streaks — span full logo height, clip horizontally only */}
          {!shouldReduceMotion && (
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{ top: 0, left: '-40px', right: '-40px', bottom: 0, zIndex: 1, overflow: 'hidden' }}
            >
              {[
                { top:  '3%', width: 28, height: 3, delay: 0,    duration: 1.1  },
                { top: '12%', width: 18, height: 2, delay: 0.3,  duration: 0.9  },
                { top: '21%', width: 36, height: 3, delay: 0.6,  duration: 1.3  },
                { top: '30%', width: 22, height: 2, delay: 0.15, duration: 1.0  },
                { top: '39%', width: 14, height: 2, delay: 0.8,  duration: 0.85 },
                { top: '48%', width: 30, height: 3, delay: 0.45, duration: 1.2  },
                { top: '57%', width: 24, height: 2, delay: 0.95, duration: 1.05 },
                { top: '66%', width: 32, height: 3, delay: 0.7,  duration: 0.95 },
                { top: '75%', width: 20, height: 2, delay: 0.25, duration: 1.15 },
                { top: '84%', width: 16, height: 2, delay: 0.55, duration: 1.0  },
                { top: '93%', width: 26, height: 3, delay: 0.4,  duration: 1.1  },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: p.top,
                    left: 0,
                    width: p.width,
                    height: p.height,
                    background: 'rgba(255,120,0,0.85)',
                    filter: 'blur(1px)',
                  }}
                  animate={{ x: [-40, 320], opacity: [0, 1, 0] }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeIn',
                  }}
                />
              ))}
            </div>
          )}

          {/* Logo — on top */}
          <div className="relative" style={{ zIndex: 2 }}>
            <Image
              src="/club-logo.png"
              alt={CLUB.name}
              width={400}
              height={400}
              style={{ objectFit: 'contain', width: 'auto', height: '240px' }}
              priority
            />
          </div>
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
          <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-brand)' }} />
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
              style={{
                backgroundColor: btn.brandColor,
                color: '#fff',
                fontFamily: 'var(--font-oswald)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              {btn.label}
            </a>
          ))}
          <CalendarButton />
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
