import { ABOUT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm text-muted">
          © 2026 {ABOUT.name}
        </p>
      </div>
    </footer>
  );
}
