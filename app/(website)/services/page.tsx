import CallToAction from "@/app/components/CallToAction";
import ProcessTimeline from "@/app/components/main/ProcessTimeline";
import ServicesList from "@/app/components/main/ServicesList";
import Image from "next/image";

const services = [
  {
    title: "PERMIT SERVICES",
    description:
      "Detailed structural drawings and calculations, signed and sealed by licensed engineers, ready for fabrication and permit approval.",
    image: "/imgs/services/permit_services.png",
  },
  {
    title: "PERMIT SERVICES",
    description:
      "We prepare and manage the documentation required to obtain construction permits, ensuring compliance with local regulations.",
    image: "/imgs/services/permit_services_2.png",
  },
  {
    title: "AS-BUILT / LEGALIZATION",
    description:
      "Accurate drawings of existing structures to support legalization processes and meet current code requirements.",
    image: "/imgs/services/legalization.png",
  },
  {
    title: "SURVEY & SITE MEASUREMENT",
    description:
      "Precise site measurements and data collection to ensure accurate design and proper project execution.",
    image: "/imgs/services/survey.png",
  },
  {
    title: "RENDERINGS",
    description:
      "3D visualizations that help you understand and present your project before construction begins.",
    image: "/imgs/services/rendering.png",
  },
  {
    title: "NEW CONSTRUCTION SUPPORT",
    description:
      "Structural design and documentation for new residential and commercial construction projects.",
    image: "/imgs/services/new_construction.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We <span className="font-semibold">support contractors</span>, architects,
            and property owners by delivering precise structural documentation that
            ensures compliance, safety, and a{" "}
            <span className="font-semibold">smooth permit process.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative w-full h-90">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-sm font-bold text-gray-800 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed h-28">
                  {service.description}
                </p>

                <button className="mt-4 text-sm font-semibold border: 1px solid text-[#00B4D8] border border-[#00B4D8] px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                  Request a quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServicesList />
      <ProcessTimeline />
      <CallToAction />
    </>
  );
}