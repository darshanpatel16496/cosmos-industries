import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6">
      <div className="text-center">
        <h1 className="text-8xl font-black text-[var(--color-primary)]">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-[var(--color-primary)] px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}