"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

function Infinite() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                )}
            />
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of days, filled with crescendos and chords, it was the challenge of scales, the triumph of harmony, the age of learning, the joy of performance, the season of recitals, the winter of rehearsals—each note shaping a new beginning.",
        name: "Charlotte D.",
        title: "Piano Student, Advanced Program",
    },
    {
        quote:
            "To play, or not to play, that is never the question—only how to feel the music. Whether to endure the missed notes or to rise and strike each key with courage. In this academy, we find the rhythm to carry on.",
        name: "William S.",
        title: "Vocal Student, Classical Voice Track",
    },
    {
        quote:
            "All that we hear or sing is but a melody within a melody. This place taught me to find the song within the silence.",
        name: "Edgar P.",
        title: "Guitar Student, Songwriting Program",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a student with a passion for music must be in want of great teachers. I found them here.",
        name: "Jane A.",
        title: "Violin Student, Youth Orchestra",
    },
    {
        quote:
            "Call me a musician. A few years ago—never mind how long precisely—having little more than curiosity and a pair of eager ears, I stepped into this academy and discovered a world of rhythm, resonance, and self-discovery.",
        name: "Herman M.",
        title: "Drum Student, Percussion Masterclass",
    },
];


export default Infinite;