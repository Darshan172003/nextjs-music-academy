import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import StickyScrollEffect from "@/components/StickyScrollEffect";
import Infinite from "@/components/InfiniteCards";
import CardHoverEffect from "@/components/CardHoverEffect";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollEffect />
      <Infinite/>
      <CardHoverEffect />
      <Instructors />
    </main>
  );
}
