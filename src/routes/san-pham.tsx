import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ClayImage } from "@/components/ClayImage";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/san-pham")({
  head: () => ({
    meta: [
      { title: "Sản Phẩm Gốm Chăm Bàu Trúc | Đàng Xem" },
      {
        name: "description",
        content:
          "Bình cắm hoa, chén trà, tượng vũ nữ Chăm, bình nước truyền thống và tác phẩm độc bản — gốm thủ công Bàu Trúc từ xưởng Đàng Xem.",
      },
      { property: "og:title", content: "Sản Phẩm Gốm Chăm Bàu Trúc | Đàng Xem" },
      {
        property: "og:description",
        content: "Từng sản phẩm — một câu chuyện. Gốm Chăm thủ công, nung lộ thiên truyền thống.",
      },
    ],
  }),
  component: Products,
});

const FILTERS = ["Tất Cả", "Trang Trí", "Gia Dụng", "Độc Bản", "Workshop"] as const;

const PRODUCTS = [
  {
    vi: "Bình Cắm Hoa Chăm",
    en: "Cham Flower Vase",
    cat: "Trang Trí",
    desc: "Dáng bình cổ cao, hoa văn sóng nước khắc tay, vệt lửa nung loang tự nhiên.",
    price: "850.000₫ – 1.400.000₫",
    seed: "sp-vase",
  },
  {
    vi: "Chén Uống Trà",
    en: "Tea Bowl Set",
    cat: "Gia Dụng",
    desc: "Bộ 4 chén mộc, thành mỏng, giữ nhiệt tốt, chạm tay ấm và nhám nhẹ.",
    price: "520.000₫ / bộ",
    seed: "sp-tea",
  },
  {
    vi: "Tượng Vũ Nữ Chăm",
    en: "Cham Dancer Figurine",
    cat: "Trang Trí",
    desc: "Tượng Apsara nặn tay, mô phỏng điêu khắc tháp Chăm cổ.",
    price: "Liên hệ để biết giá",
    seed: "sp-apsara",
  },
  {
    vi: "Bình Nước Truyền Thống",
    en: "Traditional Water Jug",
    cat: "Gia Dụng",
    desc: "Bình đựng nước kiểu Chăm cổ, thành gốm xốp giúp nước luôn mát.",
    price: "680.000₫",
    seed: "sp-jug",
  },
  {
    vi: "Đĩa Trang Trí",
    en: "Decorative Plate",
    cat: "Trang Trí",
    desc: "Đĩa treo tường khắc hoa văn hình học Chăm, đường kính 28cm.",
    price: "450.000₫",
    seed: "sp-plate",
  },
  {
    vi: "Lọ Hoa Độc Bản",
    en: "One-of-a-kind Vase",
    cat: "Độc Bản",
    unique: true,
    desc: "Tác phẩm duy nhất, kèm Certificate of Authenticity ghi tên nghệ nhân.",
    price: "Liên hệ để biết giá",
    seed: "sp-unique",
  },
  {
    vi: "Bộ Kit Workshop",
    en: "Workshop Clay Kit",
    cat: "Workshop",
    desc: "Đất sét Nu Lanh, vòng tre và dụng cụ miết — dùng trong buổi trải nghiệm.",
    price: "Bao gồm trong workshop",
    seed: "sp-kit",
  },
];

function Products() {
  const [active, setActive] = useState<string>("Tất Cả");
  const list = active === "Tất Cả" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <main>
      <PageHero
        title="Từng Sản Phẩm — Một Câu Chuyện"
        subtitle="Gốm nặn tay, nung lộ thiên bằng rơm và củi. Không sản phẩm nào giống sản phẩm nào."
        seed="products-hero"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-3 border-b border-primary/30 pb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-sm border px-5 py-2 text-sm transition-colors ${
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.vi} delay={i * 70} as="article">
              <div className="flex h-full flex-col rounded-sm border border-border bg-card transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(44,26,14,0.16)]">
                <div className="relative aspect-square overflow-hidden rounded-t-sm">
                  <ClayImage seed={p.seed} alt={`${p.vi} — ${p.en}`} w={700} h={700} className="rounded-none" />
                  {p.unique && (
                    <span className="absolute left-4 top-4 rounded-sm bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-accent-foreground">
                      Độc Bản
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl">{p.vi}</h3>
                  <p className="mt-0.5 font-serif text-sm italic text-wood">{p.en}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <p className="mt-4 text-sm text-primary">{p.price}</p>
                  <Link
                    to="/lien-he"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm border border-primary px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Tìm Hiểu Thêm <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 rounded-sm border border-primary/35 bg-card p-10 text-center">
          <p className="font-serif text-xl italic text-wood">
            Cần sản phẩm theo yêu cầu? Chúng tôi nhận đặt hàng độc bản.
          </p>
          <Link
            to="/lien-he"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-wood"
          >
            Liên Hệ Đặt Hàng <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
