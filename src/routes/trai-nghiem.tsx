import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ClayImage } from "@/components/ClayImage";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionTitle } from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/trai-nghiem")({
  head: () => ({
    meta: [
      { title: "Workshop Trải Nghiệm Làm Gốm Chăm | Đàng Xem, Khánh Hòa" },
      {
        name: "description",
        content:
          "Tự tay nặn gốm cùng nghệ nhân Chăm tại xưởng Đàng Xem, làng Bàu Trúc. Workshop cho cá nhân, gia đình và đoàn tour — đặt lịch trong 24 giờ.",
      },
      { property: "og:title", content: "Workshop Trải Nghiệm Làm Gốm Chăm | Đàng Xem" },
      {
        property: "og:description",
        content: "Chạm tay vào lịch sử — workshop làm gốm thủ công Chăm tại Khánh Hòa.",
      },
    ],
  }),
  component: Experience,
});

const STEPS = [
  { n: "01", vi: "Tìm hiểu lịch sử gốm Chăm", en: "Learn about Cham pottery heritage", desc: "Nghe nghệ nhân kể về làng Bàu Trúc, đất Nu Lanh và kỹ thuật nung lộ thiên." },
  { n: "02", vi: "Tự tay nặn và tạo hình", en: "Shape your own piece", desc: "Không bàn xoay — bạn đi vòng quanh khối đất theo đúng cách người Chăm làm." },
  { n: "03", vi: "Mang về kỷ niệm độc bản", en: "Take home your creation", desc: "Sản phẩm được hong khô, hoàn thiện và gửi về tận tay bạn." },
];

const TYPES = [
  { vi: "Cá Nhân & Cặp Đôi", en: "Individual & Couple", meta: "1–2 người · ~2 giờ", seed: "ws-couple" },
  { vi: "Gia Đình & Nhóm", en: "Family & Group", meta: "3–10 người · ~2–3 giờ", seed: "ws-family" },
  { vi: "Đoàn Tour", en: "Tour Groups", meta: "10+ người · liên hệ để báo giá", seed: "ws-tour" },
];

const FAQS = [
  { q: "Workshop kéo dài bao lâu?", a: "Buổi trải nghiệm tiêu chuẩn kéo dài khoảng 2 giờ, gồm phần giới thiệu, thực hành nặn gốm và hoàn thiện sản phẩm. Đoàn đông có thể kéo dài đến 3 giờ." },
  { q: "Có cần kinh nghiệm làm gốm không?", a: "Hoàn toàn không. Nghệ nhân hướng dẫn từng bước từ nhồi đất đến tạo hình, phù hợp cả với người lần đầu chạm vào đất sét." },
  { q: "Phù hợp với trẻ em không?", a: "Rất phù hợp với trẻ từ 6 tuổi trở lên. Trẻ nhỏ hơn vẫn tham gia được khi có người lớn đi kèm." },
  { q: "Sản phẩm có được mang về không?", a: "Có. Sản phẩm của bạn được hong khô và nung; bạn có thể nhận trực tiếp sau khi hoàn thiện hoặc chúng tôi gửi chuyển phát về tận nơi." },
];

function Experience() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        title="Chạm Tay Vào Lịch Sử"
        subtitle="Workshop làm gốm thủ công Chăm tại xưởng Đàng Xem, Khánh Hòa"
        seed="experience-hero"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Bạn sẽ làm gì">Ba Bước Trong Một Buổi Trải Nghiệm</SectionTitle>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <p className="font-display text-5xl text-primary/45">{s.n}</p>
              <h3 className="mt-4 font-display text-xl">{s.vi}</h3>
              <p className="mt-1 font-serif text-sm italic text-wood">{s.en}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Hình thức">Các Gói Workshop</SectionTitle>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {TYPES.map((t, i) => (
              <Reveal key={t.vi} delay={i * 100} as="article">
                <div className="h-full rounded-sm border border-border bg-background transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(44,26,14,0.16)]">
                  <div className="aspect-4/3 overflow-hidden rounded-t-sm">
                    <ClayImage seed={t.seed} alt={t.vi} w={700} h={520} className="rounded-none" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{t.vi}</h3>
                    <p className="mt-0.5 font-serif text-sm italic text-wood">{t.en}</p>
                    <p className="mt-4 text-sm text-primary">{t.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Đặt lịch">Gửi Yêu Cầu Trải Nghiệm</SectionTitle>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Đã gửi yêu cầu — chúng tôi sẽ liên hệ trong 24 giờ.");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Họ tên" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Số điện thoại" name="phone" type="tel" required />
              <Field label="Ngày mong muốn" name="date" type="date" required />
              <Field label="Số người" name="people" type="number" required />
            </div>
            <label className="block">
              <span className="text-sm text-foreground/80">Ghi chú</span>
              <textarea
                name="note"
                rows={4}
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="rounded-sm bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-wood"
            >
              Gửi Yêu Cầu Đặt Lịch
            </button>
            <p className="text-sm text-muted-foreground">
              {sent
                ? "Cảm ơn bạn! Yêu cầu đã được ghi nhận."
                : "Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ."}
            </p>
          </form>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Hỏi đáp">Câu Hỏi Thường Gặp</SectionTitle>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-foreground/80">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
