import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-site max-w-xl text-center">
        <p className="font-semibold text-aqua-dark">404</p>
        <h1 className="mt-2 text-4xl font-bold">This page went through the spin cycle</h1>
        <p className="mt-4 text-lg text-ink-soft">We couldn't find that page. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-dark">Home</Link>
          <Link href="/pricing" className="btn-outline">Prices</Link>
          <Link href="/contact" className="btn-outline">Directions</Link>
        </div>
      </div>
    </section>
  );
}
