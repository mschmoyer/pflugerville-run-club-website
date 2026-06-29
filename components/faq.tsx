'use client';

import { useReducedMotion, motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do I need to be fast?',
    answer:
      'No! We welcome all paces — walkers to sub-7-minute milers. Everyone is welcome at the Pflugerville Running Club.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes, completely free. No registration, no fees, ever.',
  },
  {
    question: 'Where do I park?',
    answer:
      'Main parking lot on Kelly Lane at Lake Pflugerville. Arrive a few minutes early to snag a spot — it fills up on busy Saturdays.',
  },
  {
    question: 'What if it rains?',
    answer:
      'We run in light rain! Check the Facebook group for weather cancellations if conditions look severe.',
  },
  {
    question: 'Do I need to sign up?',
    answer:
      'Nope. Just show up at the Lake Pflugerville main lot at 8:00 AM on Saturday. No registration required.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Water, sunscreen, and a good attitude. The loop is 3 miles around the lake — scenic and well-shaded in spots.',
  },
];

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.5 },
      };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-surface-2)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <motion.h2
          {...fadeUp}
          className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center"
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--color-text)',
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
              })}
        >
          <Accordion className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-lg px-5"
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <AccordionTrigger
                  className="text-left font-semibold py-4 hover:no-underline"
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    color: 'var(--color-text)',
                    fontSize: '1.05rem',
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-4"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
