'use client';

import { useReducedMotion, motion } from 'framer-motion';

const items = [
  {
    emoji: '🆓',
    title: "It's Free",
    description: 'No fees, no sign-ups. Just show up and run.',
  },
  {
    emoji: '🏃',
    title: 'All Paces',
    description: 'From walkers to speedsters — everyone belongs.',
  },
  {
    emoji: '🌅',
    title: 'Scenic Route',
    description: '3-mile lake loop at sunrise. Hard to beat.',
  },
  {
    emoji: '🤝',
    title: 'Community',
    description: 'Meet your new running friends every week.',
  },
  {
    emoji: '📅',
    title: 'Consistent',
    description: 'Same time every Saturday, year-round.',
  },
  {
    emoji: '💪',
    title: 'Accountability',
    description: 'Show up, get it done, feel amazing.',
  },
];

export function WhyRun() {
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
      id="why-us"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface-2)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Why Run With Us
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.08)}
              className="group p-5 sm:p-6 rounded-lg transition-all cursor-default"
              style={{
                backgroundColor: '#141414',
                borderLeft: '3px solid transparent',
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { borderColor: 'var(--color-brand)', scale: 1.01 }
              }
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3
                className="text-xl font-bold uppercase mb-1"
                style={{
                  fontFamily: 'var(--font-oswald)',
                  color: 'var(--color-text)',
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
