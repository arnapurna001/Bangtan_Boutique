'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShoppingBag, Share2, Heart } from 'lucide-react';
import type { Product } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ProductViewDialogProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductViewDialog({ product, isOpen, onOpenChange }: ProductViewDialogProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: 'Link Copied!', description: 'Product link copied to your clipboard.' });
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0">
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
        </VisuallyHidden>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-l-lg"
              data-ai-hint={product['data-ai-hint']}
            />
          </div>
          <div className="flex flex-col p-8">
            <h2 className="text-3xl font-bold font-headline mb-2">{product.name}</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-semibold">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-muted-foreground">{product.category}</span>
            </div>
            <p className="text-muted-foreground flex-grow mb-6">{product.description}</p>
            <p className="text-4xl font-extrabold text-primary mb-6">${product.price.toFixed(2)}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
              </Button>
               <Button size="lg" variant="ghost" onClick={handleShare}>
                <Share2 className="mr-2 h-5 w-5" /> Share
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
