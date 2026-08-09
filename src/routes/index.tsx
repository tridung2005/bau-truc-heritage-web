import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Landmark } from "lucide-react";
import { ClayImage } from "@/components/ClayImage";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/PageHero";
import { PotIcon } from "@/components/PotIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gốm Bàu Trúc — Nghệ Nhân Đàng Xem | Gốm Chăm thủ công Khánh Hòa" },
      {
        name: "description",
        content:
          "Gốm Chăm Bàu Trúc thủ công 100% từ xưởng Nghệ nhân Đàng Xem, Khánh Hòa. Di sản UNESCO 2022. Sản phẩm độc bản và workshop trải nghiệm làm gốm.",
      },
      { property: "og:title", content: "Gốm Bàu Trúc — Nghệ Nhân Đàng Xem" },
      {
        property: "og:description",
        content: "Đất hóa hồn — Tay giữ lửa. Gốm thủ công Chăm Bàu Trúc, Di sản UNESCO 2022.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  { icon: PotIcon, title: "100% Thủ Công", desc: "Không khuôn, không bàn xoay máy — tạo hình hoàn toàn bằng tay." },
  { icon: Leaf, title: "Nguyên Liệu Tự Nhiên", desc: "Đất sét lấy từ cánh đồng Nu Lanh, pha cát mịn sông Quao." },
  { icon: Landmark, title: "Di Sản UNESCO", desc: "Nghệ thuật gốm Chăm Bàu Trúc được ghi danh năm 2022." },
];

const FEATURED = [
  {
    name: "Bình Trang Trí",
    seed: "baotruc-vase",
    desc: "Bình gốm trang trí với hoa văn Chăm khắc tay, màu nung tự nhiên loang đặc trưng.",
  },
  {
    name: "Đồ Gia Dụng",
    seed: "baotruc-house",
    desc: "Nồi, chén, ấm gốm mộc — giữ nhiệt tốt, an toàn, dùng được mỗi ngày.",
  },
  {
    name: "Sản Phẩm Độc Bản",
    seed: "baotruc-unique",
    desc: "Tác phẩm duy nhất, không lặp lại, kèm giấy chứng nhận tên nghệ nhân.",
  },
];

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="grain relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ClayImage seed="baotruc-hero-clay" alt="Nghệ nhân Chăm tạo hình gốm bằng tay" w={1800} h={1200} className="rounded-none" />
          <div className="absolute inset-0 bg-background/78" />
        </div>

        <div className="absolute right-5 top-24 z-10 lg:right-8">
          <span className="inline-flex items-center gap-2 rounded-sm border border-accent bg-accent/25 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground">
            <Landmark className="h-3.5 w-3.5" /> UNESCO Heritage 2022
          </span>
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Làng gốm Bàu Trúc · Khánh Hòa</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Đất hóa hồn — Tay giữ lửa
            </h1>
            <p className="mt-6 font-serif text-xl italic text-wood sm:text-2xl">
              Gốm thủ công Chăm Bàu Trúc | Di sản UNESCO 2022
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mỗi sản phẩm là một phiên bản duy nhất — được tạo ra hoàn toàn bằng đôi bàn tay của nghệ nhân
              Chăm, từ đất sét tự nhiên làng Bàu Trúc, Khánh Hòa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/san-pham"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-wood"
              >
                Khám Phá Sản Phẩm <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/trai-nghiem"
                className="inline-flex items-center rounded-sm border border-primary px-7 py-3.5 text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Đặt Lịch Trải Nghiệm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="rule-clay border-b border-primary/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-3 lg:px-8">
          {TRUST.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90} className="flex gap-4">
              <Icon className="mt-1 h-8 w-8 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="aspect-4/3 overflow-hidden rounded-sm border border-primary/25">
              <ClayImage seed="baotruc-artisan" alt="Nghệ nhân Đàng Xem bên lò nung gốm" w={1000} h={750} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Câu chuyện</p>
            <h2 className="font-display text-3xl sm:text-4xl">Hơn 15 năm giữ lửa nghề Chăm</h2>
            <p className="mt-6 text-base leading-loose text-muted-foreground">
              Từ năm 2009, Nghệ nhân Đàng Xem đã gìn giữ và phát triển nghề gốm truyền thống của người Chăm
              tại làng Bàu Trúc. Mỗi sản phẩm mang trong mình hàng trăm năm lịch sử và dấu ấn riêng của đôi
              bàn tay tạo ra nó.
            </p>
            <Link
              to="/ve-chung-toi"
              className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm text-primary transition-colors hover:text-wood"
            >
              Đọc thêm câu chuyện của chúng tôi →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Bộ sưu tập">Sản Phẩm Nổi Bật</SectionTitle>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} as="article">
              <div className="group flex h-full flex-col rounded-sm border border-border bg-card transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(44,26,14,0.16)]">
                <div className="aspect-square overflow-hidden rounded-t-sm">
                  <ClayImage seed={p.seed} alt={p.name} w={700} h={700} className="rounded-none" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <Link
                    to="/san-pham"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-primary px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Xem Thêm <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience teaser */}
      <section className="grain relative mt-16 overflow-hidden bg-card">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Trải Nghiệm Làm Gốm Cùng Nghệ Nhân</h2>
            <p className="mt-6 text-base leading-loose text-muted-foreground">
              Đặt tay vào đất sét — cảm nhận hàng trăm năm văn hóa Chăm qua đôi bàn tay của chính bạn.
              Workshop phù hợp cho cá nhân, gia đình và đoàn tour.
            </p>
            <Link
              to="/trai-nghiem"
              className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-wood"
            >
              Đặt Lịch Ngay <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl">Đối Tác Tin Cậy</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 font-serif text-xl text-wood">
            <span>Amanoi Resort</span>
            <span className="hidden h-5 w-px bg-primary/40 sm:block" />
            <span>Tour lữ hành địa phương</span>
            <span className="hidden h-5 w-px bg-primary/40 sm:block" />
            <span>UNESCO</span>
          </div>
        </Reveal>
      </section>

      {/* Social feed */}
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl">Theo Dõi Hành Trình Gốm</h2>
          <p className="mt-3 text-sm tracking-wide text-primary">@dangxem.baoutruc</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="aspect-square overflow-hidden rounded-sm border border-border">
                <ClayImage seed={`baotruc-feed-${n}`} alt={`Ảnh xưởng gốm ${n}`} w={600} h={600} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" aria-label="TikTok" className="rounded-sm border border-primary/40 p-2.5 text-primary hover:bg-primary hover:text-primary-foreground">
            <MusicIcon />
          </a>
          <a href="#" aria-label="Instagram" className="rounded-sm border border-primary/40 p-2.5 text-primary hover:bg-primary hover:text-primary-foreground">
            <InstaIcon />
          </a>
        </div>
      </section>
    </main>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M16 3c.4 2.3 1.9 4 4 4.3v3c-1.5 0-2.9-.4-4-1.2v6.2A6.3 6.3 0 1 1 9.7 9v3.1a3.2 3.2 0 1 0 3.2 3.2V3H16Z" />
    </svg>
  );
}

function InstaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
