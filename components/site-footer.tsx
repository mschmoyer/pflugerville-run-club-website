import { CLUB } from '@/lib/links';

const socialLinks = [
  { label: 'Facebook', href: CLUB.facebook },
  { label: 'Meetup', href: CLUB.meetup },
  { label: 'Strava', href: CLUB.strava },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t py-10 px-4 sm:px-6"
      style={{
        backgroundColor: '#141414',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left: name + tagline */}
        <div className="text-center md:text-left">
          <p
            className="text-lg font-bold uppercase"
            style={{
              fontFamily: 'var(--font-oswald)',
              color: 'var(--color-brand)',
            }}
          >
            {CLUB.name}
          </p>
          <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
            {CLUB.tagline}
          </p>
        </div>

        {/* Right: social links */}
        <nav className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#F5F5F5]"
              style={{ color: 'var(--color-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div
        className="max-w-6xl mx-auto mt-8 pt-6 border-t text-center"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          &copy; 2025 Pflugerville Running Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
