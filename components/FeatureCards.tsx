'use client';

import { motion } from 'framer-motion';
import { LineChart, ShieldCheck, Calculator } from 'lucide-react';

const features = [
    {
        icon: LineChart,
        title: 'Visual results, not just numbers',
        body: 'Every calculation renders a chart. See your growth trajectory over time, not just a final number.',
    },
    {
        icon: ShieldCheck,
        title: 'Zero data collection',
        body: 'All math happens in your browser. Nothing is sent to our servers. No accounts, no cookies, no tracking.',
    },
    {
        icon: Calculator,
        title: 'Precision-grade math',
        body: 'No rounding drift. No simplified shortcuts. The same mathematical standards used in professional financial software.',
    },
];

export default function FeatureCards() {
    return (
        <motion.section
            id="features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="section-wrapper bg-[var(--bg-subtle)]"
        >
            <div className="max-w-[1100px] m-[0_auto]">
                <div className="section-header">
                    <span className="section-eyebrow">{'// WHY WEALTHIFYX'}</span>
                    <h2 className="section-heading">Built different.</h2>
                    <p className="section-subtext">
                        Most finance calculators were built for accountants. These were built for investors.
                    </p>
                </div>

                <div className="grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[1fr] min-[768px]:max-[1023px]:grid-cols-[repeat(2,1fr)] gap-[20px] max-[767px]:gap-[10px] min-[768px]:max-[1023px]:gap-[16px] xl:gap-[24px] items-stretch">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
                            className="card flex flex-col max-[767px]:flex-row max-[767px]:items-start max-[767px]:gap-[14px] p-[32px_28px] max-[767px]:p-[18px_16px] min-[768px]:max-[1023px]:p-[28px_24px] xl:p-[36px_32px] rounded-[16px] max-[767px]:rounded-[12px] transition-[box-shadow,border-color,transform] duration-[0.2s] ease-[ease] hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-md)] hover:-translate-y-[2px] max-[767px]:hover:translate-y-[0] max-[767px]:hover:shadow-[var(--shadow-sm)]"
                        >
                            {/* Icon — always its own element */}
                            <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] max-[767px]:w-[38px] max-[767px]:h-[38px] rounded-[12px] max-[767px]:rounded-[9px] bg-[var(--accent-bg)] border-[1.5px] border-[var(--accent-border)] mb-[18px] max-[767px]:mb-[0] max-[767px]:mt-[2px]">
                                <feature.icon size={22} className="text-[var(--accent)]" aria-hidden="true" />
                            </div>

                            {/* Title + body wrapped in a column div */}
                            <div className="flex flex-col flex-[1] min-w-[0]">
                                <h3 className="font-sans font-[600] text-[var(--text-primary)] text-[16px] max-[767px]:text-[14px] leading-[1.35] max-[767px]:leading-[1.3] m-[0_0_10px_0] max-[767px]:m-[0_0_5px_0] whitespace-normal">{feature.title}</h3>
                                <p className="font-sans text-[var(--text-muted)] text-[14px] max-[767px]:text-[13px] leading-[1.7] max-[767px]:leading-[1.6] m-[0]">{feature.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
