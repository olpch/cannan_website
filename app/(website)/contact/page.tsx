import Banner from "@/app/components/Banner";
import Image from "next/image";
import Link from "next/link";

const bannerInfo = {
    title: "Contact Us",
    subTitle: "Get in touch with our team to start your project or request a quote."
}

export default function RequestQuote() {
  return (
    <>
        <Banner {...bannerInfo} />
        <section className="w-full bg-gray-100 py-16 relative overflow-hidden">
        
        {/* <div className="absolute top-0 left-0 w-full h-40 bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center opacity-60" /> */}

        <div  className="flex flex-row flex-wrap items-center justify-center">
            <div className="w-full bg-transparent max-w-[350] md:max-w-xl lg:max-w-2xl">
                <form className="space-y-5 text-gray-700">
                    <div>
                        <label className="text-sm mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Phone number</label>
                        <input
                            type="text"
                            placeholder="Example +1 (000) 000-0000"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Project type</label>
                        <select className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600">
                            <option>Select project</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Remodeling</option>
                        </select>
                    </div>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Message</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md transition">
                        Request a quote
                    </button>
                </form>
            </div>
            <div className="flex flex-col items-center justify-center mx-10 max-w-2xl sm:min-w-3xs md:items-start text-center md:text-left">
                <Image
                    width={250} height={350}
                    src="/imgs/contact.png"
                    alt="Contact illustration"
                    className="w-52 h-auto md:w-64 mx-auto"
                />
                <div className="flex gap-4 mb-5">
                    <a 
                        target="_blank"
                        href="https://www.facebook.com/"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 text-white text-sm">
                        <Image src="/imgs/facebook.svg" alt="Facebook icon" width={20} height={20}></Image>
                    </a>
                    <a 
                        href="https://www.instagram.com/" target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 text-white text-sm">
                        <Image src="/imgs/instagram.svg" alt="Instagram icon" width={20} height={20}></Image>
                    </a>
                </div>
                <div className="space-y-2 text-sm text-black">
                    <a href="https://www.google.com/maps/dir//15129%20SW%20St,%20Suite%2011,%20Miami,%20FL%2033196" className="flex flex-row mb-4">
                        <Image src="/imgs/location.svg" alt="location icon" width={20} height={20} className="w-6 h-6"></Image>
                        <p className="ml-2">15129 SW St, Suite 11, Miami, FL 33196</p>
                    </a>
                    <a href="tel:+17867001632" className="flex flex-row mb-4">
                        <Image src="/imgs/phone.svg" alt="Phone icon" width={20} height={20} className="w-6 h-6"></Image>
                        <p className="ml-2">786 700 1632</p>
                    </a>
                    <a href="mailto:canaanstructures@gmail.com" className="flex flex-row pb-4">
                        <Image src="/imgs/mail.svg" alt="Mail icon" width={20} height={20} className="w-6 h-6"></Image>
                        <p className="ml-2">canaanstructures@gmail.com</p>
                    </a>
                </div>
            </div>

        </div>
        </section>
    </>
  );
}