export const CLUB = {
  name: 'Pflugerville Running Club',
  tagline: 'Run the lake. Find your people.',
  meetDay: 'Saturdays',
  meetTime: '8:00 AM',
  location: 'Lake Pflugerville',
  loopDistance: '3 miles',
  facebook: 'https://www.facebook.com/groups/1554958678157657/',
  meetup: 'https://www.meetup.com/pflugerville-running-club/',
  strava: 'https://www.strava.com/clubs/780280',
  mapLink: 'https://maps.google.com/?q=Lake+Pflugerville+TX',
  mapEmbed: 'https://www.google.com/maps?q=30.4428682,-97.566095&z=15&t=k&output=embed',
  trailheadNote: 'Meet at the Lake Pflugerville main parking lot on Kelly Lane',
};

export const EVENTS = {
  runSignupBaseUrl: 'https://runsignup.com/Rest/races',
  city: 'Pflugerville',
  state: 'TX',
  resultsPerPage: 50,
  revalidateSeconds: 3600,
  // Substrings (lowercased) used to detect races held at Lake Pflugerville Park
  lakeVenueMatchers: ['lake pflugerville', '18216 weiss'],
  // Fallback link shown when no races are available
  raceSearchUrl: 'https://runsignup.com/Races/TX/Pflugerville',
};
