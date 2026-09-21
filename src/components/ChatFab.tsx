import { useEffect, useRef, useState } from "react";
import { Facebook, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/** Single floating chat button that expands to Zalo / Facebook options. */
export function ChatFab() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const item =
    "flex items-center gap-2.5 rounded-sm border border-primary/40 bg-background px-4 py-3 text-sm text-foreground shadow-[0_8px_24px_rgba(44,26,14,0.18)] transition-colors hover:border-primary hover:text-primary";

  return (
    <div
      ref={ref}
      className="fixed bottom-[150px] right-4 z-50 flex flex-col items-end gap-2.5 lg:bottom-24 lg:right-8"
    >
      <div
        className={cn(
          "flex flex-col items-end gap-2.5 transition-all duration-200",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer" className={item}>
          <MessageCircle className="h-4 w-4 text-primary" /> Zalo
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer" className={item}>
          <Facebook className="h-4 w-4 text-primary" /> Facebook
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t("Chat với xưởng gốm", "Chat with the studio")}
        className="tap grid place-items-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-[0_10px_28px_rgba(44,26,14,0.3)] transition-colors hover:bg-wood"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
