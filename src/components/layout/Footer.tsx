import { ABOUT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm text-muted">
          © 2025 {ABOUT.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
