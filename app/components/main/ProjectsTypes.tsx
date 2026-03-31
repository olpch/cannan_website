import Image from "next/image";
import { PROJETCS_TYPE_DESC } from "../../data";

export default function ProjectsTypes() {
  return (
    <section className="bg-[#0f3b57] py-20">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-14">
          Types of Projects We Work On
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROJETCS_TYPE_DESC.map((project, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-2xl transition duration-500 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  fill
                  priority
                  alt={project.title}
                  src={ `/imgs/project_type/${project.imgs.bg}` }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -top-8 left-6 bg-[#0f3b57] shadow-lg rounded-sm h-18 w-18 p-2 flex">
                  <Image
                    alt={project.title}
                    src={ `/imgs/project_type/${project.imgs.icon}` }
                    width={150}
                    height={150}
                    className=""
                   />
                </div>

                <div className="mt-8">
                  <h3 className="text-black font-semibold text-lg mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <button className="mt-6 text-sm text-sky-700 font-semibold flex items-center gap-2">
                    READ MORE
                    <span className="w-6 h-[2px] bg-red-500 inline-block"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}