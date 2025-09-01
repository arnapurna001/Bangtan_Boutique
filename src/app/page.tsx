'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { products as allProducts, type Product } from '@/lib/products';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { ProductGrid } from '@/components/product/product-grid';
import { ProductFilters } from '@/components/product/product-filters';
import { ProductViewDialog } from '@/components/product/product-view-dialog';
import { Recommendations } from '@/components/recommendations/recommendations';
import { cn } from '@/lib/utils';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc'>('popularity');
  const [viewingHistory, setViewingHistory] = useState<Product[]>([]);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductClick = (product: Product) => {
    setActiveProduct(product);
    setViewingHistory((prev) => {
      const isAlreadyViewed = prev.some((p) => p.id === product.id);
      if (isAlreadyViewed) {
        return [product, ...prev.filter((p) => p.id !== product.id)];
      }
      return [product, ...prev].slice(0, 10);
    });
  };

  const filteredProducts = useMemo(() => {
    let products = allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) =>
        category === 'all' ? true : product.category === category
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

    if (sortBy === 'popularity') {
      products = products.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'price-asc') {
      products = products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      products = products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [searchTerm, category, priceRange, sortBy]);
  
  // Disable body scroll when dialog is open
  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeProduct]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 -z-10 transition-opacity duration-500',
          isScrolled ? 'bg-background/80 backdrop-blur-xl' : 'opacity-0'
        )}
      />
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Discover Your Favorite Bangtan Merch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From plushies to light sticks, find everything you need to show your love for BTS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <aside className="lg:col-span-1 sticky top-24">
            <ProductFilters
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
              category={category}
              onCategoryChange={setCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              sortBy={sortBy}
              onSortByChange={setSortBy}
            />
          </aside>

          <div className="lg:col-span-3">
            <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
          </div>
        </div>
        
        {viewingHistory.length > 0 && (
          <Recommendations viewingHistory={viewingHistory} allProducts={allProducts} onProductClick={handleProductClick} />
        )}
      </main>
      <AppFooter />
      <ProductViewDialog
        product={activeProduct}
        isOpen={!!activeProduct}
        onOpenChange={(open) => !open && setActiveProduct(null)}
      />
    </>
  );
}
