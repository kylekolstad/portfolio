import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <section className="max-w-md text-center">
        <p className="mb-2 text-sm font-mono text-[var(--accent-indigo)]">404</p>
        <h1 className="text-3xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
        <Link className="inline-flex px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors" href="/">
          Back home
        </Link>
      </section>
    </main>
  )
}
