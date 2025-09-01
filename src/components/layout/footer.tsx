import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

const XLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

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
                  <a href="https://x.com/bts_bighit" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                    <XLogo />
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
