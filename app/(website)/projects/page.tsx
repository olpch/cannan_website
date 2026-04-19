import Banner from "@/app/components/Banner";
import Image from "next/image";
import Link from "next/link";

const proyectos = Array.from({ length: 6 }).map((project, index) => ({
  id: `project_${index + 1}`,
  name: 'Pergola structure',
  description: 'Structural design and drawing',
  image: '/imgs/projects/project_0.jpg'
}));

export default function ProyectPage() {
  return (
    <>
      <Banner
        title="Projects"
        subTitle="Explore a selection of structural projects, including detailed drawings and engineered solutions for residential and commercial applications."
      />
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-6">
        {
          proyectos.map(project => {
            return <div className="mx-auto right-0 mt-2 w-80 md:w-60">
              <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="relative h-60 w-full md:h-48">
                  <Image
                    fill
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="border-b">
                  <div className="px-4 py-2 hover:bg-gray-100 flex">
                    <div className="pl-3">
                      <p className="text-sm uppercase font-bold text-gray-800 leading-none">
                        { project.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">{ project.description }</p>
                      <Link href={`/projects/${project.id}`} className="text-[#3A9BC6] text-xs">View project</Link>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          })
        }
      </section>
    </>
  )
}
