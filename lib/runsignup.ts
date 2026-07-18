import { EVENTS } from '@/lib/links';

export interface RunClubRace {
  id: string;
  name: string;
  startDate: string;        // ISO 8601, e.g. "2026-07-25"
  endDate?: string;         // ISO 8601, optional
  distances: string[];      // e.g. ["5K", "10K", "Half Marathon"]
  venueName: string;        // "" if unknown
  address: string;          // street/full address line, "" if unknown
  city: string;
  state: string;
  registrationUrl: string;  // external URL to register
  isAtLakePflugerville: boolean;
}

// Local shape of the RunSignup "Get Races" API response.
// Field names are best-effort based on public docs; parsing is defensive
// throughout since the exact response could not be verified live.
interface RawRunSignupAddress {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

interface RawRunSignupEvent {
  name?: string;
  distance?: string;
  start_time?: string;
}

interface RawRunSignupRace {
  race_id?: number | string;
  name?: string;
  next_date?: string;
  last_date?: string;
  url?: string;
  address?: RawRunSignupAddress;
  events?: RawRunSignupEvent[];
}

interface RawRunSignupResponse {
  races?: { race?: RawRunSignupRace }[];
}

function toIsoDateOnly(value: unknown): string {
  if (typeof value !== 'string' || value.trim() === '') return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return '';
  return parsed.toISOString().slice(0, 10);
}

function normalizeRegistrationUrl(url: unknown): string {
  if (typeof url !== 'string' || url.trim() === '') return EVENTS.raceSearchUrl;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://runsignup.com${url.startsWith('/') ? '' : '/'}${url}`;
}

function collectDistances(events: unknown): string[] {
  if (!Array.isArray(events)) return [];
  const seen = new Set<string>();
  for (const raw of events) {
    if (!raw || typeof raw !== 'object') continue;
    const event = raw as RawRunSignupEvent;
    const label = (event.distance ?? event.name ?? '').toString().trim();
    if (label) seen.add(label);
  }
  return Array.from(seen);
}

function matchesLakeVenue(race: RunClubRace): boolean {
  const haystack = `${race.name} ${race.address} ${race.venueName}`.toLowerCase();
  return EVENTS.lakeVenueMatchers.some((matcher) => haystack.includes(matcher));
}

function deriveFallbackId(name: string, startDate: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `${slug || 'race'}-${startDate || 'unknown'}`;
}

function mapRawRace(raw: RawRunSignupRace): RunClubRace | null {
  const name = raw.name ?? '';
  const startDate = toIsoDateOnly(raw.next_date);
  if (!startDate) return null;

  const rawEndDate = toIsoDateOnly(raw.last_date);
  const endDate = rawEndDate && rawEndDate !== startDate ? rawEndDate : undefined;

  const address = raw.address ?? {};
  const venueName = address.name ?? '';
  const addressLine = address.street ?? '';
  const city = address.city ?? EVENTS.city;
  const state = address.state ?? EVENTS.state;

  const id = raw.race_id !== undefined && raw.race_id !== null && String(raw.race_id).trim() !== ''
    ? String(raw.race_id)
    : deriveFallbackId(name, startDate);

  const race: RunClubRace = {
    id,
    name,
    startDate,
    endDate,
    distances: collectDistances(raw.events),
    venueName,
    address: addressLine,
    city,
    state,
    registrationUrl: normalizeRegistrationUrl(raw.url),
    isAtLakePflugerville: false,
  };

  race.isAtLakePflugerville = matchesLakeVenue(race);
  return race;
}

function buildRequestUrl(): string {
  const params = new URLSearchParams({
    format: 'json',
    state: EVENTS.state,
    city: EVENTS.city,
    start_date: 'today',
    events: 'T',
    only_partner_races: 'F',
    results_per_page: String(EVENTS.resultsPerPage),
  });
  return `${EVENTS.runSignupBaseUrl}?${params.toString()}`;
}

export async function getUpcomingRaces(): Promise<RunClubRace[]> {
  try {
    const url = buildRequestUrl();
    const res = await fetch(url, {
      next: { revalidate: EVENTS.revalidateSeconds },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      throw new Error(`RunSignup request failed with status ${res.status}`);
    }

    const data: unknown = await res.json();
    const response = (data ?? {}) as RawRunSignupResponse;
    const rawRaces = Array.isArray(response.races) ? response.races : [];

    const races = rawRaces
      .map((entry) => entry?.race)
      .filter((race): race is RawRunSignupRace => race !== undefined && race !== null)
      .map(mapRawRace)
      .filter((race): race is RunClubRace => race !== null);

    const todayIso = new Date().toISOString().slice(0, 10);
    const upcoming = races.filter((race) => race.startDate >= todayIso);

    upcoming.sort((a, b) => {
      if (a.startDate !== b.startDate) return a.startDate < b.startDate ? -1 : 1;
      if (a.isAtLakePflugerville !== b.isAtLakePflugerville) {
        return a.isAtLakePflugerville ? -1 : 1;
      }
      return 0;
    });

    return upcoming;
  } catch (err) {
    console.error('[runsignup] Failed to fetch upcoming races', err);
    return [];
  }
}
