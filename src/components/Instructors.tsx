import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Darshan Patil',
        designation: 'Administrator',
        image:'/profile1.png',
    },
    {
        id: 2,
        name: 'Elena Briggs',
        designation: 'Vocal Coach',
        image:'/profile2.jpg',
    },
    {
        id: 3,
        name: 'Marcus Reid',
        designation: 'Guitar Instructor',
        image:'/profile3.jpg',
    },
    {
        id: 4,
        name: 'Julia Zhang',
        designation: 'Piano Teacher',
        image:'/profile4.jpg',
    },
];

function Instructors() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full" >
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors