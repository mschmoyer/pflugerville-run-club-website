import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { RunDetails } from '@/components/run-details';
import { MapSection } from '@/components/map-section';
import { WhyRun } from '@/components/why-run';
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
        <WhyRun />
        <Connect />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
