import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    subTitle: string;
    h2?: boolean;
    src?: string;
    isVideo?: boolean;
}


function setBackgroundMedia(title: string, src: string, isVideo: boolean) {
    if(isVideo) {
        return <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover">
            <source src={src} type="video/webm" />
        </video>
    }
    else {
        return <Image 
            fill
            priority
            src={src}
            alt={title}
            className="object-cover"
            />
    }
}

function getTitle(title: string, subTitle: string, h2: boolean) {

    if(h2)
        return <>
                <h2 className="text-4xl md:text-xl text-[#A6F0FF] leading-tight">{ title }</h2>
                <p className="mt-4 text-lg text-gray-200">{ subTitle }</p>
            </>
    else
        return <>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{ title }</h1>
            <p className="mt-4 text-lg text-gray-200">{ subTitle }</p>
        </>
}

export default function Banner(
    { title, subTitle, h2 = false, isVideo = false, src = '/imgs/global_banner.jpg'}: Props
) {
    return (
        <section className="relative h-[485px] w-full overflow-hidden">
            { setBackgroundMedia(title, src, isVideo) }
            <div className="absolute inset-0 bg-[#06264d]/70"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div className="max-w-2xl text-white"> 
                { getTitle(title, subTitle, h2) }
                <div className="mt-8 flex justify-center gap-4">
                    {
                        isVideo &&
                        <>
                            <Link
                                href="/services"
                                className="bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white px-6 py-3 rounded-md font-medium transition">
                                View services
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
                                Request a quote
                            </Link>
                        </>
                    }

                </div>
            </div>
            </div>
        </section>
    )
}
