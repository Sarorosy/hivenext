import { Globe } from "@/components/magicui/globe";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import RingImage from "@/components/RingImage";
import SlideText from "@/components/SlideText";



export default function Home() {
  return (
    <>
    <SlideText word="We do social space" />
    <div className="relative flex w-full min-h-[450px] items-start justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Pan India Presence
      </span>
      <Globe className="top-38 md:top-18" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>

    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>Velocity Scroll</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
    <RingImage />
    
    <div className="w-full h-screen">

    </div>
    </>
  );
}
