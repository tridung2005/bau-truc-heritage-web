import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { PotIcon } from "./PotIcon";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { useCart } from "@/lib/cart";

export const NAV_LINKS = [
  { to: "/", vi: "Trang Chủ", en: "Home" },
  { to: "/san-pham", vi: "Sản Phẩm", en: "Products" },
  { to: "/trai-nghiem", vi: "Trải Nghiệm", en: "Experience" },
  { to: "/ve-chung-toi", vi: "Về Chúng Tôi", en: "About Us" },
  { to: "/lien-he", vi: "Liên Hệ", en: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const controls = (
    <div className="flex items-center gap-2">
      <div className="flex items-center rounded-sm border border-border">
        {(["vi", "en"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={cn(
              "px-2.5 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors",
              lang === l ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary",
            )}
          >
            {l === "vi" ? "VIE" : "ENG"}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t("Đổi nền sáng/tối", "Toggle light/dark theme")}
        className="rounded-sm border border-border p-2 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        aria-label={t("Mở giỏ hàng", "Open cart")}
        className="relative rounded-sm border border-border p-2 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
      >
        <ShoppingBag className="h-4 w-4" />
        {count > 0 && (
          <span className="absolute -right-2 -top-2 min-w-5 rounded-full bg-primary px-1.5 py-0.5 text-[10px] leading-none text-primary-foreground">
            {count}
          </span>
        )}
      </button>
    </div>
  );

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

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/75" }}
                className="text-sm tracking-wide transition-colors hover:text-primary"
              >
                {t(l.vi, l.en)}
              </Link>
            ))}
          </nav>
          {controls}
        </div>

        <div className="flex items-center gap-2 justify-self-end lg:hidden">
          {controls}
          <button
            type="button"
            aria-label={t("Mở menu", "Open menu")}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
              {t(l.vi, l.en)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
