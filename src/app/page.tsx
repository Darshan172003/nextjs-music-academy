import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import StickyScrollEffect from "@/components/StickyScrollEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollEffect />
    </main>
  );
}
