import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b3a5b] text-white">
        <Link href="https://wa.me/+17867091632" target="_blank">
        <Image 
            src="/imgs/whatapps.svg"
            width={50} height={50}
            alt="Whatapps link"
            className="absolute -top-8 right-8 w-15 h-15"/>
      </Link>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/20">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-200">
            We provide shop drawings, calculations, and permit-ready
            documentation for residential and commercial projects.
          </p>
          <div className="flex space-x-4 pt-2">
            <a 
                target="_blank"
                href="https://www.facebook.com/"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 text-white text-sm">
                <Image src="/imgs/facebook.svg" alt="location icon" width={20} height={20}></Image>
            </a>
            <a 
                href="https://www.instagram.com/" target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 text-white text-sm">
                <Image src="/imgs/instagram.svg" alt="location icon" width={20} height={20}></Image>
            </a>
          </div>
        </div>
        <div className="md:pl-8 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0">
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Permit Service</li>
            <li>As/Built</li>
            <li>Survey & Site Measurement</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Contact</h3>
          <div className="flex items-start gap-2 text-sm text-gray-200">            
            <span>
              15192 SW St, Suite 11, Miami, FL 33196
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-200">            
            <span>786 709 1632</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-200">            
            <span>canasconstruction@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}