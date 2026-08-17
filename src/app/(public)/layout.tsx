import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Public site chrome: announcement bar + sticky header + footer wrap every
 * public marketing page. The (members) route group intentionally does NOT use
 * this layout — it will get its own app shell once auth exists.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
