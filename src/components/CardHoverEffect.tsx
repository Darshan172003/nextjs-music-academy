"use client"
import { HoverEffect } from "./ui/card-hover-effect"
import { Button } from "./ui/moving-border"

function CardHoverEffect() {
    return (
        <div className="p-12 bg-black">
            <div className="max-w-7xl mx-auto sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={projects.map((webinar) => ({
                            key: webinar.slug, // Use the slug as a unique key
                            title: webinar.title,
                            description: webinar.description,
                            link: `/webinars/${webinar.slug}`, // Updated link to use the slug
                        }))}
                    />
                </div>
                <div className="flex items-center justify-center">
                <Button
                    borderRadius="1rem"
                    className="bg-white cursor-pointer dark:bg-black text-black text-[1rem] dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    View All Webinars
                </Button>
                </div>
            </div>
        </div>
    )
}

export const projects = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
]

export default CardHoverEffect