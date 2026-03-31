import Image from "next/image";

const services = [
  {
    title: "Shop Drawings & Calculations",
    icon: 'calculations.svg',
  },
  {
    title: "Permit Services",
    icon: 'permit_services.svg',
  },
  {
    title: "As-Built / Legalization",
    icon: 'legalization.svg',
  },
  {
    title: "Renderings",
    icon: 'renderings.svg',
  },
  {
    title: "Survey",
    icon: 'calculations.svg',
  },
  {
    title: "New Construction",
    icon: 'new_construction.svg',
  },
];

export default function ServicesList() {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-700 mb-10">
          Our services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((service, index) => {

            return (
              <div
                key={index}
                className="bg-gray-200 hover:bg-gray-300 transition rounded-md p-6 flex flex-col items-center justify-center text-center">
                <Image
                    width={50} height={50}
                    src={`/imgs/services/${service.icon}`}
                    className="w-10 h-10 text-gray-700 mb-4"
                    alt={`${service.title} icon`}/>
                <p className="text-sm text-gray-800 leading-tight">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}