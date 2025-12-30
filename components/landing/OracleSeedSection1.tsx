'use client';

import { motion } from 'framer-motion';
import { Zap, Eye, Shield, BarChart3, Moon, Target } from 'lucide-react';

interface SectionProps {
    isVisible: boolean;
}

const features = [
    { title: 'Set & Forget', description: 'Configure once, let Oracle-Seed handle everything.', icon: Zap, color: '#3b82f6' },
    { title: '24/7 Vigilance', description: 'Markets never sleep—neither does our AI.', icon: Eye, color: '#8b5cf6' },
    { title: 'Sleep Trading', description: 'Wake up to profits. AI trades while you rest.', icon: Moon, color: '#06b6d4' },
    { title: 'Smart Execution', description: 'Millisecond precision on entries and exits.', icon: Target, color: '#10b981' },
    { title: 'Risk Guard', description: 'Intelligent stop-losses protect capital.', icon: Shield, color: '#f59e0b' },
    { title: 'Daily Reports', description: 'Comprehensive summaries delivered daily.', icon: BarChart3, color: '#ec4899' },
];

export default function OracleSeedSection1({ isVisible }: SectionProps) {
    // Phone = 33.33vw, Content = 66.67vw, Gap = 2vw
    // Total = 33.33 + 2 + 60 = 95.33vw (leaving margin)
    const phoneWidth = 'calc(33.33vw - 2vw)'; // 1/3 of screen minus gap adjustment
    const contentWidth = 'calc(66.67vw - 4vw)'; // 2/3 of screen minus gap adjustment
    const gap = '3vw';

    return (
        <div
            style={{
                width: '95vw',
                maxWidth: '1400px',
                padding: 'clamp(40px, 6vw, 80px) 0',
            }}
        >
            {/* Container using calculated widths */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: gap,
                }}
            >
                {/* iPhone Image - Exactly 1/3 of viewport */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                    style={{
                        width: phoneWidth,
                        minWidth: phoneWidth,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/profitiphone.png"
                        alt="Profit Trading App"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '85vh',
                            objectFit: 'contain',
                        }}
                    />
                </motion.div>

                {/* Content - Exactly 2/3 of viewport */}
                <div style={{ width: contentWidth, minWidth: contentWidth }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                marginBottom: '16px',
                                fontSize: '12px',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: '#3b82f6',
                                backgroundColor: 'rgba(59,130,246,0.1)',
                                border: '1px solid rgba(59,130,246,0.2)',
                                borderRadius: '9999px',
                            }}
                        >
                            Autonomous Trading
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 4vw, 48px)',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '12px',
                                lineHeight: 1.1,
                            }}
                        >
                            Wake Up To <span style={{ color: '#3b82f6' }}>Profits</span>
                        </h2>
                        <p
                            style={{
                                fontSize: 'clamp(14px, 1.8vw, 18px)',
                                color: '#64748b',
                                lineHeight: 1.6,
                                maxWidth: '500px',
                            }}
                        >
                            Oracle-Seed monitors the blockchain 24/7, executing precision trades while you sleep.
                        </p>
                    </motion.div>

                    {/* Feature Grid - 2 columns */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 'clamp(12px, 1.5vw, 16px)',
                        }}
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                                    style={{
                                        padding: 'clamp(14px, 1.8vw, 20px)',
                                        backgroundColor: 'white',
                                        borderRadius: '14px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            display: 'grid',
                                            placeItems: 'center',
                                            backgroundColor: `${feature.color}15`,
                                            borderRadius: '10px',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        <Icon size={20} color={feature.color} />
                                    </div>
                                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                                        {feature.title}
                                    </h4>
                                    <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
