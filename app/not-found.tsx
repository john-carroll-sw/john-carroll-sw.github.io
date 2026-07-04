import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050912] px-6 text-slate-100">
      <section className="max-w-xl border border-cyan-200/15 bg-white/[0.025] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Page not found.</h1>
        <p className="mt-4 leading-7 text-slate-300">
          This route is not part of the portfolio, but the main page is still online.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex border border-cyan-300/30 px-5 py-3 font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/10"
        >
          Return home
        </Link>
      </section>
    </main>
  )
}
