'use client';

import React, { useState, useEffect } from 'react';
import { personalizedProductRecommendations } from '@/ai/flows/personalized-product-recommendations';
import type { Product } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProductCard } from '@/components/product/product-card';
import { Skeleton } from '@/components/ui/skeleton';

interface RecommendationsProps {
  viewingHistory: Product[];
  allProducts: Product[];
  onProductClick: (product: Product) => void;
}

export function Recommendations({ viewingHistory, allProducts, onProductClick }: RecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (viewingHistory.length > 0) {
      setIsLoading(true);
      const viewingHistoryNames = viewingHistory.map(p => p.name);
      
      personalizedProductRecommendations({ viewingHistory: viewingHistoryNames, numRecommendations: 6 })
        .then(response => {
          const recommendedProducts = response.recommendations
            .map(name => allProducts.find(p => p.name === name))
            .filter((p): p is Product => p !== undefined);
          setRecommendations(recommendedProducts);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [viewingHistory, allProducts]);

  if (viewingHistory.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-foreground font-headline mb-6">
        Recommended For You
      </h2>
      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
        <CarouselContent>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                     <Skeleton className="aspect-square w-full rounded-lg" />
                     <Skeleton className="h-4 w-3/4 mt-4" />
                     <Skeleton className="h-4 w-1/2 mt-2" />
                  </div>
                </CarouselItem>
              ))
            : recommendations.map((product, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1 h-full">
                    <ProductCard product={product} onProductClick={onProductClick} />
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
