'use client';

import { useState, useRef, useEffect } from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';

const GOOGLE_URL =
  'https://calendar.google.com/calendar/render' +
  '?action=TEMPLATE' +
  '&text=Pflugerville+Running+Club+%E2%80%94+Saturday+Lake+Run' +
  '&dates=20260704T080000/20260704T090000' +
  '&ctz=America%2FChicago' +
  '&recur=RRULE:FREQ%3DWEEKLY%3BBYDAY%3DSA' +
  '&location=Lake+Pflugerville%2C+Pflugerville%2C+TX' +
  '&details=Free+weekly+run+around+Lake+Pflugerville.+All+paces+welcome.+No+sign-up+needed.+https://pfrunclub.com/';

const YAHOO_URL =
  'https://calendar.yahoo.com/' +
  '?v=60' +
  '&title=Pflugerville+Running+Club+%E2%80%94+Saturday+Lake+Run' +
  '&st=20260704T130000Z' +
  '&et=20260704T140000Z' +
  '&desc=Free+weekly+run+around+Lake+Pflugerville.+All+paces+welcome.+https://pfrunclub.com/' +
  '&in_loc=Lake+Pflugerville%2C+Pflugerville%2C+TX';

const OPTIONS = [
  { label: 'Google Calendar', href: GOOGLE_URL, external: true, download: undefined },
  { label: 'Apple Calendar',  href: '/pflugerville-run-club.ics', external: false, download: 'pflugerville-run-club.ics' },
  { label: 'Outlook',         href: '/pflugerville-run-club.ics', external: false, download: 'pflugerville-run-club.ics' },
  { label: 'Yahoo Calendar',  href: YAHOO_URL, external: true, download: undefined },
] as const;

export function CalendarButton({ fullWidth = false }: { fullWidth?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide rounded text-sm sm:text-base transition-opacity hover:opacity-80${fullWidth ? ' w-full justify-center' : ''}`}
        style={{
          fontFamily: 'var(--font-oswald)',
          letterSpacing: '0.05em',
          backgroundColor: 'rgba(255,255,255,0.08)',
          color: 'var(--color-text)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <CalendarDays className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-brand)' }} />
        Add to Calendar
        <ChevronDown
          className="w-3 h-3 flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full mt-2 rounded-lg overflow-hidden z-50"
          style={{
            minWidth: '180px',
            backgroundColor: 'var(--color-surface-2)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          {OPTIONS.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target={opt.external ? '_blank' : undefined}
              rel={opt.external ? 'noopener noreferrer' : undefined}
              download={opt.download}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm transition-colors"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-inter)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {opt.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
