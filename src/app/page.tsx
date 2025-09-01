'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/1200/800?random=13"
              alt="BTS concert"
              fill
              className="object-cover"
              data-ai-hint="concert crowd"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter !leading-tight font-headline">
              Bangtan Boutique
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Your one-stop shop for all things BTS. Discover plushies, light sticks, and more.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground font-headline mb-4">Why Shop With Us?</h2>
                <p className="text-muted-foreground mb-6">
                  We are dedicated to bringing you the best, high-quality BTS merchandise. Curated with love by ARMY, for ARMY.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 shrink-0">✓</div>
                    <span><b>Official & Fan-Made Goods:</b> A wide selection of official light sticks and apparel, plus unique fan-created items.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 shrink-0">✓</div>
                    <span><b>AI-Powered Recommendations:</b> Our smart assistant helps you find products based on your viewing history.</span>
                  </li>
                   <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center mr-4 mt-1 shrink-0">✓</div>
                    <span><b>Worldwide Shipping:</b> We ship to ARMYs all across the globe.</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://picsum.photos/600/600?random=14"
                  alt="Happy fans with merchandise"
                  fill
                  className="object-cover"
                  data-ai-hint="happy fans"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
