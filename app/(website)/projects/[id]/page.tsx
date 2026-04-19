import CallToAction from "@/app/components/CallToAction";
import Image from "next/image";

function imageCard(src: string ) {
  return (
    <div className="relative w-full h-[300px]">
      <Image src={src} alt="project image" fill className="object-cover rounded" />
    </div>
  );
}


export default async function ProjectPage(
    { params }: { params: Promise<{ id: string }>; }
) {
  const { id } = await params;
  
  return (
    <main className="bg-[#f5f6f7] text-gray-700">
        <section className="w-full">
            <div className="relative w-full h-[420px] md:h-[520px]">
                <Image
                    src={ `/imgs/projects/${id}.jpg` }
                    alt={ id }
                    fill
                    className="object-cover"
                    priority/>
            </div>
        </section>

        <section className="relative pt-10 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
                <div className="relative h-[420px] md:h-[520px]">
                    <div className="absolute -top-50 left-0 w-full h-full shadow-xl rounded overflow-hidden bg-white">
                        <Image
                        src="/imgs/projects/project_vertical.png"
                        alt="Steel pergola plan"
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>
                <div className="md:pl-10">
                    <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-3">
                        THE PROJECT
                    </p>
                    <h1 className="text-4xl font-semibold text-[#1f6fa9] mb-6">
                        Pérgola Structure
                    </h1>
                    <p className="leading-relaxed mb-6">
                        We deliver accurate structural solutions that meet local codes,
                        providing detailed documentation ready for fabrication and permit
                        approval.
                    </p>
                    <p className="leading-relaxed mb-6">
                        Every project is developed with precision, ensuring safety,
                        compliance, and efficiency throughout the process. From initial
                        review to final drawings, we aim to simplify complex requirements
                        and provide clarity at every stage.
                    </p>
                    <p className="leading-relaxed">
                        Every project is developed with precision, ensuring safety,
                        compliance, and efficiency throughout the process. From initial
                        review to final drawings, we aim to simplify complex requirements
                        and provide clarity at every stage.
                    </p>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
            { imageCard('/imgs/projects/project_dummie.png') }
            { imageCard('/imgs/projects/project_blueprints.png') }
            { imageCard('/imgs/projects/project_blueprints.png') }
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-28">
            <h2 className="text-3xl font-semibold text-[#1f6fa9] mb-12">
                Others projects
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {
                    [1,2,3].map((id)=> {
                        return <div key={id} className="bg-white shadow-sm rounded overflow-hidden group hover:shadow-lg transition">
                            <div className="relative w-full h-[220px]">
                                <Image
                                src="/imgs/projects/project_0.jpg"
                                alt="Pergola project"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold text-sm tracking-wide">
                                PERGOLA STRUCTURE
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                Structural design and drawing
                                </p>

                                <a
                                    href={`/projects/${id}`}
                                    className="text-[#1f6fa9] text-sm mt-3 font-medium hover:underline">
                                View project →
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
        <CallToAction />
    </main>
  )
}