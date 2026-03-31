import { Metadata } from "next";
import ProcessTimeline from "./components/main/ProcessTimeline";
import ProjectsTypes from "./components/main/ProjectsTypes";
import LatestProjects from "./components/main/LatestProjects";
import WhyChoose from "./components/main/WhyChoose";
import ServicesList from "./components/main/ServicesList";
import GlobalBanner from "./components/GlobalBanner";

export const metadata: Metadata = {
  title: 'Cannan App',
  description: 'Structural Engineering Drawings Signed & Sealed',
}

const bannerInfo = {
  isVideo: true,
  src: '/media/background_video.webm',
  title: 'Structural Engineering Drawings Signed & Sealed',
  subTitle: 'We provide shop drawings, calculations, and permit-ready documentation for residential and commercial projects'
}

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <GlobalBanner {...bannerInfo} />
      <ServicesList />
      <ProjectsTypes />
      <ProcessTimeline />
      <WhyChoose />
      <LatestProjects />
    </div>
  );
}
