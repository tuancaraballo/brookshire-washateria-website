import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-site max-w-xl text-center">
        <Image src="/images/logo-mark.png" alt="" width={544} height={673} sizes="80px" className="mx-auto mb-6 h-24 w-auto" />
        <p className="font-semibold text-sky-dark">404</p>
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
