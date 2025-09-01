import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <AppHeader />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              About the Founder
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The story behind the purple heart of Bangtan Boutique.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://picsum.photos/400/400"
                  alt="Arnapurna Hota"
                  fill
                  className="object-cover"
                  data-ai-hint="founder portrait"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-primary font-headline mb-2">
                  Arnapurna Hota
                </h2>
                <p className="font-semibold text-muted-foreground mb-4">
                  Founder & Chief ARMY
                </p>
                <div className="space-y-4 text-card-foreground">
                   <p>
                    Arnapurna Hota, the visionary behind Bangtan Boutique, is a lifelong ARMY with an insatiable passion for all things BTS. Her journey began with a simple desire: to create a dedicated space where fellow fans could find high-quality, unique, and lovingly curated merchandise that truly celebrates the spirit of Bangtan.
                  </p>
                  <p>
                    Frustrated by the scattered and often unofficial nature of fan merchandise, Arnapurna decided to build the boutique she always dreamed of. Bangtan Boutique is more than just a store; it's a community hub built by an ARMY, for ARMYs, reflecting the unity and love that BTS inspires worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
