import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="container-shell flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-neutral-900 sm:text-xl"
        >
          Bulgaria Resorts
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600">
          <Link href="/what-to-expect" className="transition hover:text-neutral-900">
            What to expect
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200/60 py-10">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Bulgaria Resorts</p>
        <p className="text-xs text-neutral-400">Early access. Subject to change.</p>
      </div>
    </footer>
  );
}
