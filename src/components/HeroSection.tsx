import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { BackgroundBeams } from "./ui/background-beams"

function HeroSection() {
    return (
        <div className="h-auto md:h-screen w-full rounded-md flex justify-center items-center overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                {/* <Spotlight
                    className="-top-40 left-0 md:-top-20 md:left-100"
                    fill="#51a2ff"
                /> */}
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-blue-400 to-neutral-400 capitalize"
                >Welcome to our music academy</h1>
                <p
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1rem"
                            className="bg-white dark:bg-black text-black text-[1rem] dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore courses
                        </Button>
                    </Link>
                </div>
            </div>
            <BackgroundBeams/>
        </div>
    )
}

export default HeroSection