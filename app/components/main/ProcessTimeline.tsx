import styles from './styles.module.css'
import { STEPS_TIMELINE } from "../../data";

export default function ProcessTimeline() {

    return (
        <section className="w-full bg-gray-100 py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 mb-20">
                    Simple Process, Reliable Results
                </h2>

                <div className="hidden lg:block relative">

                    <div className="grid grid-cols-4 relative">
                        {STEPS_TIMELINE.map((step, i) => (
                            <div key={i} className={styles['timeline--item']}>
                                <div className="mx-auto w-14 h-14 rounded-full bg-[#3A9BC6] text-white flex items-center justify-center text-xl font-semibold mb-6">
                                    {step.number}
                                </div>

                                <h3 className="font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden relative">
                    <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-sky-300"></div>

                    <div className="space-y-12">
                        {STEPS_TIMELINE.map((step, i) => (
                            <div key={i} className="relative pl-16">
                                <div className="absolute left-0 w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold">
                                    {step.number}
                                </div>

                                <h3 className="font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}