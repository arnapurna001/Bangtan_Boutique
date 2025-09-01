'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ProductFiltersProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortBy: string;
  onSortByChange: (sort: 'popularity' | 'price-asc' | 'price-desc') => void;
}

const categories = ['all', 'Stuffed Toys', 'Keychains', 'BTS Bombs', 'Miniatures', 'Animated Pictures'];

export function ProductFilters({
  searchTerm,
  onSearchTermChange,
  category,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortByChange
}: ProductFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter & Sort</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="filters" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline">Advanced Filters</AccordionTrigger>
            <AccordionContent className="pt-4 space-y-6">
              <div className="space-y-2">
                <Label>Category</Label>
                <RadioGroup value={category} onValueChange={onCategoryChange}>
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <RadioGroupItem value={cat} id={`cat-${cat}`} />
                      <Label htmlFor={`cat-${cat}`} className="font-normal capitalize">{cat}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Price Range</Label>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[priceRange[1]]}
                  onValueChange={(value) => onPriceRangeChange([priceRange[0], value[0]])}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sort-by">Sort by</Label>
                <Select value={sortBy} onValueChange={onSortByChange}>
                  <SelectTrigger id="sort-by">
                    <SelectValue placeholder="Sort products" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
