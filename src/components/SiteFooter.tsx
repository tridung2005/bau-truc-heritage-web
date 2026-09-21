import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Music2, ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "./SiteHeader";
import { PotIcon } from "./PotIcon";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between py-3 text-left md:pointer-events-none md:py-0"
      >
        <h3 className="font-display text-lg">{title}</h3>
        <ChevronDown
          className={cn("h-4 w-4 text-primary transition-transform md:hidden", open && "rotate-180")}
        />
      </button>
      <div className={cn("overflow-hidden md:block", open ? "block pb-4" : "hidden")}>{children}</div>
    </div>
  );
}

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-20 border-t border-primary/40 bg-card sm:mt-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3 md:gap-12 md:py-16 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <PotIcon className="h-7 w-7 text-primary" />
            <span className="font-display text-2xl">Đàng Xem</span>
          </div>
          <p className="mt-3 font-serif text-lg italic text-primary">
            {t("Đất hóa hồn — Tay giữ lửa", "Clay becomes soul — Hands keep the fire")}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t(
              "Gốm thủ công Chăm Bàu Trúc — Di sản Văn hóa Phi vật thể UNESCO 2022.",
              "Handmade Cham pottery from Bàu Trúc — UNESCO Intangible Cultural Heritage 2022.",
            )}
          </p>
        </div>

        <Accordion title={t("Liên Kết", "Links")}>
          <ul className="space-y-1 md:mt-4 md:space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-primary md:min-h-0"
                >
                  {t(l.vi, l.en)}
                </Link>
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion title={t("Kết Nối", "Connect")}>
          <address className="space-y-2 text-sm not-italic leading-relaxed text-muted-foreground md:mt-4">
            <p>{t("Làng Bàu Trúc, xã Ninh Phước, Khánh Hòa", "Bàu Trúc Village, Ninh Phước, Khánh Hòa")}</p>
            <p>{t("7:00 – 17:00 hàng ngày", "7:00 – 17:00 daily")}</p>
            <p>lienhe.dangxem@gmail.com</p>
          </address>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Music2, label: "TikTok" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: ShoppingBag, label: "Shopee" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid min-h-11 min-w-11 place-items-center rounded-sm border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Accordion>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Gốm Bàu Trúc — Nghệ Nhân Đàng Xem. Khánh Hòa, Việt Nam.
        </p>
      </div>
    </footer>
  );
}
