import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

export function AppFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">Your one-stop shop for all things BTS.</p>
          </div>
          <div className="grid grid-cols-2 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Stuffed Toys</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Keychains</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">BTS Bombs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com/bts_bighit" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/bts.bighitofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.facebook.com/bangtan.official" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bangtan Boutique. All Rights Reserved. Not affiliated with HYBE or Big Hit Music.</p>
        </div>
      </div>
    </footer>
  );
}
