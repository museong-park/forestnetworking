export default function Loading() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 mt-8">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="mb-4">
            <div className="h-4 w-20 rounded bg-stone-200" />
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
            <div className="mb-8 border-b border-border pb-6">
              <div className="mb-4 h-6 w-16 rounded-full bg-stone-200" />
              <div className="mb-4 h-8 w-3/4 rounded bg-stone-200" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="h-4 w-24 rounded bg-stone-200" />
                <div className="h-4 w-32 rounded bg-stone-200" />
                <div className="h-4 w-16 rounded bg-stone-200" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full rounded bg-stone-100" />
              <div className="h-4 w-5/6 rounded bg-stone-100" />
              <div className="h-4 w-4/5 rounded bg-stone-100" />
              <div className="h-4 w-full rounded bg-stone-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
            <div className="mb-6 h-6 w-24 rounded bg-stone-200" />
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-stone-200" />
                  <div className="flex-1 rounded-xl bg-stone-50 p-4">
                    <div className="mb-2 h-4 w-32 rounded bg-stone-200" />
                    <div className="h-4 w-full rounded bg-stone-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
