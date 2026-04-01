// import styles from './styles.module.css'
// import { STEPS_TIMELINE } from "../../data";

// export default function ProcessTimeline() {

//     return (
//         <section className="w-full bg-gray-100 py-24 overflow-hidden">
//             <div className="max-w-[1400px] mx-auto px-6">
//                 <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 mb-20">
//                     Simple Process, Reliable Results
//                 </h2>

//                 <div className="hidden lg:block relative">

//                     <div className="grid grid-cols-4 relative">
//                         {STEPS_TIMELINE.map((step, i) => (
//                             <div key={i} className={styles['timeline--item']}>
//                                 <div className="mx-auto w-14 h-14 rounded-full bg-[#3A9BC6] text-white flex items-center justify-center text-xl font-semibold mb-6">
//                                     {step.number}
//                                 </div>

//                                 <h3 className="font-semibold mb-3">{step.title}</h3>
//                                 <p className="text-gray-500 text-sm leading-relaxed">
//                                     {step.text}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="lg:hidden relative">
//                     <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-sky-300"></div>

//                     <div className="space-y-12">
//                         {STEPS_TIMELINE.map((step, i) => (
//                             <div key={i} className="relative pl-16">
//                                 <div className="absolute left-0 w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold">
//                                     {step.number}
//                                 </div>

//                                 <h3 className="font-semibold mb-2">{step.title}</h3>
//                                 <p className="text-gray-500 text-sm leading-relaxed">
//                                     {step.text}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }


"use client";

import Image from "next/image";
import React from "react";

const steps = [
    {
        id: 1,
        title: "Send your project details",
        description:
            "Share your plans, sketches, or project requirements with our team.",
    },
    {
        id: 2,
        title: "We review and define requirements",
        description:
            "We analyze your needs and define the scope based on codes and requirements.",
    },
    {
        id: 3,
        title: "We create signed & sealed drawings",
        description:
            "We create detailed, signed and sealed structural drawings and calculations.",
    },
    {
        id: 4,
        title: "You submit and get approval",
        description:
            "Your documents are ready to submit for permits and construction.",
    },
];

function getSpacing(i: number) {
    if(i === 0) return "md:mt-0";
    if (i === 1) return "md:mt-12";
    return (i === 2) ? "md:mt-0" : "md:mt-16";
}
                                    

export default function ProcessSteps() {
    return (
        <section className="relative inline-block w-full bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0077B6] mb-16">
                    Simple Process, Reliable Results
                </h2>

                {/* Steps container */}
                <div className="lines--background relative" >
                    <Image 
                        src="/imgs/lines.svg"
                        alt="Image lines background"
                        fill
                        className="hidden md:block"
                     />
                    <div className=" flex flex-col w-full items-start md:grid md:grid-cols-1 md:h-[345] md:grid-cols-4 relative z-10">
                        {steps.map((step, i) => (
                            <div
                                key={step.id}
                                className={`
                                    flex justify-start flex-row text-center relative mx-4 my-2
                                    border-b-1 border-[#3A9BC6] md:border-none md:flex-col md:justify-center
                                    ${getSpacing}
                                `}
                            >
                                
                                <div className="md:mx-auto mb:mb-6 w-14 h-14 min-w-14 flex items-center justify-center rounded-full bg-[#3A9BC6] text-white font-semibold text-lg shadow-lg">
                                    {step.id}
                                </div>
                                <div className="flex flex-col items-start ml-5">
                                    <h3 className="font-bold mb:font-semibold h-14 text-left text-gray-900 mb-2 text-base md:text-lg">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-left md:text-center mb-5 md:h-24 md:max-w-60 text-sm leading-relaxed mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}