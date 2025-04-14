"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const contentdata = [
  {
    title: "Collaborative Learning",
    description:
      "Practice and learn together with fellow musicians and instructors in real time. Collaborate on compositions, share feedback, and improve your skills as a group. Our platform helps you stay connected and inspired through shared learning experiences.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Learning
      </div>
    ),
  },
  {
    title: "Live Practice Sessions",
    description:
      "Experience live sessions where you can perform, receive instant feedback, and watch others play. Stay in sync with your peers and never miss a beat. Say goodbye to pre-recorded sessions and enjoy the energy of real-time interaction.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/music.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live practice session"
        />
      </div>
    ),
  },
  {
    title: "Progress Tracking",
    description:
      "Keep track of your musical journey with our built-in progress tracking system. Monitor your growth, revisit past lessons, and stay motivated. Whether you're practicing daily or weekly, stay on top of your goals with ease.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Progress Tracking
      </div>
    ),
  },
  {
    title: "Course Updates",
    description:
      "Get notified about the latest classes, workshops, and learning materials. Our platform ensures you're always up to date with fresh content, new challenges, and exciting musical opportunities. Stay ahead and keep learning!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Course Updates
      </div>
    ),
  },
];


function StickyScrollEffect() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={contentdata} />
    </div>
  )
}

export default StickyScrollEffect