'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CLUB } from '@/lib/links';

const navLinks = [
  { label: 'Run Details', href: '#run-details' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Club logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/club-logo.png"
            alt={CLUB.name}
            height={40}
            width={160}
            style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide transition-colors"
              style={{
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-inter)',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--color-text)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--color-muted)';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CLUB.meetup}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded text-white transition-colors"
            style={{
              backgroundColor: 'var(--color-brand)',
              fontFamily: 'var(--font-oswald)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor =
                'var(--color-brand-dark)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor =
                'var(--color-brand)';
            }}
          >
            Join Us
          </a>
        </nav>

        {/* Mobile: just Join Us button */}
        <div className="md:hidden">
          <a
            href={CLUB.meetup}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded text-white"
            style={{
              backgroundColor: 'var(--color-brand)',
              fontFamily: 'var(--font-oswald)',
            }}
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
}
