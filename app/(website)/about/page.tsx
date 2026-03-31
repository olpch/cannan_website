import GlobalBanner from "@/app/components/GlobalBanner";

import Image from "next/image";

const bannerInfo = {
  title: 'About us',
  subTitle: 'We provide shop drawings, calculations, and permit-ready documentation for residential and commercial projects'
}

export default function AboutSection() {
  return (
    <section className="bg-[#f5f6f7]">
      <GlobalBanner {...bannerInfo} />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[400px] relative">
            <Image
              src="/imgs/about/blueprint.jpg"
              alt="Blueprint"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Company Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              We deliver accurate structural solutions that meet local codes,
              providing detailed documentation ready for fabrication and permit
              approval.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every project is developed with precision, ensuring safety,
              compliance, and efficiency throughout the process. From initial
              review to final drawings, we aim to simplify complex requirements
              and provide clarity at every stage.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Our Values
            </p>
            <ul className="space-y-5">
              {[
                "Precision and attention to detail in every project",
                "Compliance with local codes and regulations",
                "Clear communication with clients and partners",
                "Commitment to safety and structural integrity",
                "Efficient and reliable project delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-[#0ea5b7] rounded-full"></span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-[400px] relative">
            <Image
              src="/imgs/about/team.jpg"
              alt="Team working"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}