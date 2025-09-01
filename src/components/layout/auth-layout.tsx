import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { AppFooter } from './footer';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 p-10 bg-card text-card-foreground rounded-xl shadow-lg">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <h1 className="text-3xl font-bold tracking-tight font-headline">{title}</h1>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </div>
          {children}
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
