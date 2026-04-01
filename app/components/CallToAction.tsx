import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative h-[400] bg-[#f5f6f7] overflow-hidden">
      <Image 
        height={400} width={400}
        alt="Call to action background"
        src="/imgs/blueprint_call_to_action.png" 
        className="absolute top-0 right-0 h-180 w-auto"  />
      <div className="mx-auto px-26 py-16 h-full flex items-center">
        <div className="space-y-6 z-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
            Let’s work together on your<br/>next project.
          </h2>
          <Link 
            href="/contact"
            className="bg-[#0ea5b7] hover:bg-[#0c8a99] text-white text-sm px-6 py-3 rounded-md transition">
            Request a quote
          </Link>
        </div>
      </div>
        <div className="absolute object-top-right h-[400]  md:h-[400px] mt-10 md:mt-0">
          <Image
            width={800} height={800}
            alt="Blueprint background"
            className="object-cover object-right"
            src="/imgs/blueprint_call_to_action.png"
          />
        </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f6f7] via-[#f5f6f7]/80 to-transparent pointer-events-none" />
    </section>
  );
}