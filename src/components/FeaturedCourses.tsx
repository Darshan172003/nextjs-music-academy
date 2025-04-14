'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  )

  return (
    <div className="py-20 bg-black">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="flex justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-black overflow-hidden h-full max-w-sm shadow-lg hover:shadow-2xl">
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-neutral-200 mt-4 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 mt-auto text-sm font-medium border border-zinc-300 text-white bg-black rounded-lg hover:bg-[#121212] transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
        >
          <Button
            borderRadius="1rem"
            className="bg-white dark:bg-black text-black text-[1rem] dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses