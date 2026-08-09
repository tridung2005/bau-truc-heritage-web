import { createFileRoute } from "@tanstack/react-router";
import { ClayImage } from "@/components/ClayImage";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionTitle } from "@/components/PageHero";

export const Route = createFileRoute("/ve-chung-toi")({
  head: () => ({
    meta: [
      { title: "Về Chúng Tôi — Nghệ Nhân Đàng Xem | Gốm Chăm Bàu Trúc" },
      {
        name: "description",
        content:
          "Hành trình từ 2009 đến nay của xưởng gốm Chăm Đàng Xem tại làng Bàu Trúc: giá trị cốt lõi, di sản UNESCO 2022 và chứng nhận nguồn gốc sản phẩm.",
      },
      { property: "og:title", content: "Về Chúng Tôi — Nghệ Nhân Đàng Xem" },
      {
        property: "og:description",
        content: "Người gìn giữ linh hồn gốm Chăm tại làng Bàu Trúc, Khánh Hòa.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2009", text: "Cơ sở được thành lập tại làng Bàu Trúc, Khánh Hòa." },
  { year: "2015", text: "Mở rộng dịch vụ trải nghiệm làm gốm cho khách du lịch." },
  { year: "2022", text: "Gốm Chăm Bàu Trúc được UNESCO công nhận Di sản Văn hóa Phi vật thể." },
  { year: "2023", text: "Hợp tác với Amanoi Resort — đưa gốm Bàu Trúc vào không gian cao cấp." },
  { year: "2026", text: "Bước đầu số hóa — mở rộng kênh phân phối online." },
];

const VALUES = [
  { vi: "Độc Bản", en: "Uniqueness", d: "Mỗi sản phẩm chỉ tồn tại một lần." },
  { vi: "Nguyên Bản", en: "Authenticity", d: "Đúng kỹ thuật Chăm truyền đời, không rút ngắn." },
  { vi: "Bền Vững", en: "Sustainability", d: "Đất, rơm, củi — nguyên liệu địa phương, ít can thiệp." },
  { vi: "Sáng Tạo", en: "Innovation", d: "Dáng gốm mới cho không gian sống đương đại." },
  { vi: "Trải Nghiệm Chiều Sâu", en: "Meaningful Experience", d: "Khách không xem — khách làm." },
  { vi: "Minh Bạch", en: "Integrity", d: "Rõ nguồn gốc, rõ nghệ nhân, rõ giá." },
];

function About() {
  return (
    <main>
      <PageHero
        title="Người Gìn Giữ Linh Hồn Gốm Chăm"
        subtitle="Nghệ nhân Đàng Xem — làng Bàu Trúc, xã Ninh Phước, Khánh Hòa"
        seed="about-hero"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="aspect-3/4 overflow-hidden rounded-sm border border-primary/25">
              <ClayImage seed="about-portrait" alt="Chân dung nghệ nhân Đàng Xem" w={800} h={1060} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle eyebrow="Hành trình">Câu Chuyện Của Chúng Tôi</SectionTitle>
            <ol className="border-l border-primary/35">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="font-display text-2xl text-primary">{t.year}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Giá trị cốt lõi">Sáu Điều Chúng Tôi Giữ</SectionTitle>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.vi} delay={i * 70}>
                <div className="border-t border-primary/40 pt-5">
                  <h3 className="font-display text-xl">{v.vi}</h3>
                  <p className="mt-0.5 font-serif text-sm italic text-wood">{v.en}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Di Sản Văn Hóa Phi Vật Thể UNESCO 2022
            </h2>
            <p className="mt-6 text-base leading-loose opacity-95">
              Nghệ thuật làm gốm Chăm Bàu Trúc là một trong những làng gốm cổ nhất Đông Nam Á còn tồn tại.
              Được UNESCO ghi danh năm 2022, chúng tôi gánh trên vai trách nhiệm gìn giữ di sản này cho các
              thế hệ sau.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Chứng nhận">Certificate of Authenticity</SectionTitle>
            <p className="text-base leading-loose text-muted-foreground">
              Mỗi sản phẩm kèm Certificate of Authenticity — xác nhận nguồn gốc và tên nghệ nhân tạo ra.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-sm border border-primary/40 bg-paper p-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary">Certificate of Authenticity</p>
              <p className="mt-5 font-display text-2xl">Gốm Chăm Bàu Trúc</p>
              <div className="mx-auto my-6 h-px w-24 bg-primary/50" />
              <p className="text-sm text-muted-foreground">Tác phẩm số ____ / độc bản</p>
              <p className="mt-1 text-sm text-muted-foreground">Nghệ nhân: Đàng Xem</p>
              <p className="mt-8 font-serif text-lg italic text-wood">Đất hóa hồn — Tay giữ lửa</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
