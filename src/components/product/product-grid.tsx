'use client';

import React from 'react';
import type { Product } from '@/lib/products';
import { ProductCard } from './product-card';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-96 bg-card rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground">No Products Found</h2>
        <p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
      ))}
    </div>
  );
}
