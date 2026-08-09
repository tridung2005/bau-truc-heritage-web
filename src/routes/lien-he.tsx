import { createFileRoute } from "@tanstack/react-router";
import { Clock, Download, Facebook, Mail, MapPin, Phone, ShoppingBag, Music2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionTitle } from "@/components/PageHero";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên Hệ — Gốm Bàu Trúc Đàng Xem | Khánh Hòa" },
      {
        name: "description",
        content:
          "Liên hệ xưởng gốm Chăm Đàng Xem tại làng Bàu Trúc, xã Ninh Phước, Khánh Hòa. Đặt hàng, đặt lịch workshop hoặc hợp tác B2B với resort và doanh nghiệp.",
      },
      { property: "og:title", content: "Liên Hệ — Gốm Bàu Trúc Đàng Xem" },
      {
        property: "og:description",
        content: "Kết nối với xưởng gốm Chăm Đàng Xem — đặt hàng, workshop và hợp tác B2B.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <PageHero
        title="Kết Nối Với Chúng Tôi"
        subtitle="Xưởng mở cửa mỗi ngày — ghé thăm, đặt hàng hoặc hẹn lịch trải nghiệm."
        seed="contact-hero"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Thông tin">Xưởng Gốm Đàng Xem</SectionTitle>
            <ul className="space-y-6">
              {[
                { Icon: MapPin, label: "Địa chỉ", value: "Làng Bàu Trúc, xã Ninh Phước, Khánh Hòa" },
                { Icon: Phone, label: "Điện thoại", value: "+84 (0) 000 000 000" },
                { Icon: Mail, label: "Email", value: "lienhe.dangxem@gmail.com" },
                { Icon: Clock, label: "Giờ mở cửa", value: "7:00 – 17:00 hàng ngày" },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-base">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Music2, label: "TikTok" },
                { Icon: ShoppingBag, label: "Shopee" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-sm border border-primary/40 p-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionTitle eyebrow="Gửi tin">Biểu Mẫu Liên Hệ</SectionTitle>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Đã gửi tin nhắn — cảm ơn bạn đã liên hệ!");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Họ tên" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Số điện thoại" name="phone" type="tel" />
                <label className="block">
                  <span className="text-sm text-foreground/80">Chủ đề</span>
                  <select
                    name="topic"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option>Đặt hàng</option>
                    <option>Đặt lịch workshop</option>
                    <option>Hợp tác B2B</option>
                    <option>Khác</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-foreground/80">Tin nhắn</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="rounded-sm bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-wood"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-sm border border-primary/30">
            <iframe
              title="Bản đồ làng Bàu Trúc, Ninh Phước"
              src="https://www.openstreetmap.org/export/embed.html?bbox=108.90%2C11.50%2C109.10%2C11.65&layer=mapnik"
              className="h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Dành Cho Đối Tác & Resort</h2>
            <p className="mt-6 text-base leading-loose text-muted-foreground">
              Chúng tôi cung cấp sản phẩm gốm độc bản cho khách sạn, resort và doanh nghiệp. Liên hệ để nhận
              báo giá sỉ và catalog sản phẩm.
            </p>
            <button
              type="button"
              onClick={() => toast("Catalog B2B sẽ sớm được cập nhật — vui lòng liên hệ qua email.")}
              className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-wood"
            >
              <Download className="h-4 w-4" /> Tải Catalog B2B
            </button>
          </Reveal>
        </div>
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
