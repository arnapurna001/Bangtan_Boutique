'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShoppingBag } from 'lucide-react';
import type { Product } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      className="w-full overflow-hidden group cursor-pointer flex flex-col h-full"
      onClick={() => onProductClick(product)}
      onKeyDown={(e) => e.key === 'Enter' && onProductClick(product)}
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <CardHeader className="p-0 border-b">
        <div className="overflow-hidden relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={product['data-ai-hint']}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <CardTitle className="text-lg font-semibold leading-tight mb-1">{product.name}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className="text-xl font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`}>
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
