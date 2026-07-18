import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { RunDetails } from '@/components/run-details';
import { MapSection } from '@/components/map-section';
import { UpcomingRaces } from '@/components/upcoming-races';
import { WhyRun } from '@/components/why-run';
import { PhotoBanner } from '@/components/photo-banner';
import { Connect } from '@/components/connect';
import { FAQ } from '@/components/faq';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RunDetails />
        <MapSection />
        <UpcomingRaces />
        <WhyRun />
        <PhotoBanner />
        <Connect />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
