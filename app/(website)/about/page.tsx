import Banner from "@/app/components/Banner";
import CallToAction from "@/app/components/CallToAction";

import Image from "next/image";

const bannerInfo = {
  title: 'About us',
  subTitle: 'We provide shop drawings, calculations, and permit-ready documentation for residential and commercial projects'
}

const visionBannerInfo = {
  h2: true,
  title: 'COMPANY VISION',
  subTitle: 'To be a trusted structural engineering partner, recognized for delivering precise, permit-ready solutions that support safe and efficient construction across residential and commercial projects.',
  src: '/imgs/about/vision_background.jpg'

}

export default function AboutSection() {
  return (
    <>
      <section className="bg-[#f5f6f7]">
        <Banner {...bannerInfo} />
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center mb-10">
            <div className="order-2 md:order-1 h-[500px] w-[90vw] md:w-full relative">
              <Image
                src="/imgs/about/blueprint.jpg"
                alt="Blueprint"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-xs tracking-widest text-[#01345A] uppercase">
                Company Mission
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
                We deliver accurate structural solutions that meet local codes,
                providing detailed documentation ready for fabrication and permit
                approval.
              </h2>
              <p className="text-[#131D3B] text-sm leading-8 mb-14">
                Every project is developed with precision, ensuring safety,
                compliance, and efficiency throughout the process. From initial
                review to final drawings, we aim to simplify complex requirements
                and provide clarity at every stage.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 order-3 items-center">
            <div className="space-y-6">
              <p className="text-xs tracking-widest text-[#01345A] uppercase">
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
                    <span className="mt-2 w-2 h-2 bg-[#0077B6] rounded-full"></span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[400px] hidden md:block relative">
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
      <Banner {...visionBannerInfo} />
      <CallToAction />
    </>
  );
}