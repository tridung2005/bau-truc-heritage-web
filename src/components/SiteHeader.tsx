import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PotIcon } from "./PotIcon";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { to: "/", label: "Trang Chủ" },
  { to: "/san-pham", label: "Sản Phẩm" },
  { to: "/trai-nghiem", label: "Trải Nghiệm" },
  { to: "/ve-chung-toi", label: "Về Chúng Tôi" },
  { to: "/lien-he", label: "Liên Hệ" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background shadow-[0_2px_16px_rgba(44,26,14,0.12)]" : "bg-background/0",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <PotIcon className="h-7 w-7 shrink-0 text-primary" />
          <span className="truncate font-display text-2xl tracking-tight text-foreground">Đàng Xem</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/75" }}
              className="text-sm tracking-wide transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end rounded-sm border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block border-b border-border/60 py-3.5 text-base text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
