'use client';

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type AuthFormProps = {
  type: 'login' | 'signup';
};

export function AuthForm({ type }: AuthFormProps) {
  const isSignup = type === 'signup';
  const formSchema = isSignup ? signupSchema : loginSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: isSignup
      ? { name: '', email: '', password: '' }
      : { email: '', password: '' },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: Implement actual authentication logic
    console.log(values);
    alert('Authentication successful! (mock)');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {isSignup && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Kim Taehyung" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg">
          {isSignup ? 'Create Account' : 'Sign In'}
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <Link href="/signup" className="font-semibold text-primary hover:underline">
                Sign up
              </Link>
            </>
          )}
        </div>
      </form>
    </Form>
  );
}
