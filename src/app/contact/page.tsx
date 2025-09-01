import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <>
      <AppHeader />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Send us your feedback, questions, or suggestions.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
