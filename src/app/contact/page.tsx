import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-brand-muted/50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            언제, 어디서든 협업이 필요할 땐
          </h1>
        </div>
      </section>

      <div className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
