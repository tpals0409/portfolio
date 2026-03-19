import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-accent-purple">404</h1>
      <p className="text-lg text-muted">Page not found</p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-accent-purple px-6 py-3 text-white transition-opacity hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
