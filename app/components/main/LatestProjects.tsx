import Image from "next/image";
import { PROJECTS } from "../../data";

export default function LatestProjects() {
  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-sky-700 mb-10">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 auto-rows-[260px]">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`
                relative 
                w-full 
                h-full 
                overflow-hidden 
                rounded-sm
                md:row-span-1
                md:col-span-${Math.trunc(i%2) + 1}
              `}
            >
              <span>{Math.trunc(i%2) + 1}</span>
              <Image
                fill
                priority
                src={`/imgs/projects/${project.image}`}
                alt={`${project.title} image`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}