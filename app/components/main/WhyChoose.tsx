import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Canaan Structures
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            We deliver precise, code-compliant structural drawings that help you get approvals faster and build with confidence.
          </p>
          <Link 
            href="/contact"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md w-fit transition">
            Request a Quote
          </Link>
        </div>
        <div className="bg-[#0B3A5B] text-white p-8 md:p-16 flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-md">
              <Image src="/imgs/building.svg" alt="building icon" height={20} width={20} className="h-8 w-8" />
            </div>
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-gray-300">Completed projects</p>
            </div>
          </div>
          <hr className="border-gray-500/30" />
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-md">
              <Image src="/imgs/briefcase.svg" alt="briefcase icon" height={10} width={20} className="h-8 w-8" />
            </div>
            <div>
              <p className="text-2xl font-bold">10 years</p>
              <p className="text-sm text-gray-300">Accumulate experience</p>
            </div>
          </div>
          <hr className="border-gray-500/30" />
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-md">
              <Image src="/imgs/cup.svg" alt="cup icon" height={10} width={20} className="h-8 w-8" />
            </div>
            <div>
              <p className="text-2xl font-bold">Professionals</p>
              <p className="text-sm text-gray-300">Certified team</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}