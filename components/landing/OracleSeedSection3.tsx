'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Radio, Target, AlertTriangle, CheckCircle, Percent, Gauge } from 'lucide-react';

interface SectionProps {
    isVisible: boolean;
}

const trustStats = [
    { value: '99.9%', label: 'Uptime', icon: Radio, color: '#3b82f6' },
    { value: '0', label: 'Breaches', icon: ShieldCheck, color: '#10b981' },
    { value: '256-bit', label: 'Encryption', icon: Lock, color: '#8b5cf6' },
    { value: '24/7', label: 'Monitoring', icon: Target, color: '#06b6d4' },
];

const riskFeatures = [
    { title: 'Intelligent Stop-Loss', description: 'Dynamic stops adapt to volatility.', icon: AlertTriangle, color: '#f59e0b', stat: '-3%' },
    { title: 'Auto Take-Profit', description: 'Lock in gains when targets hit.', icon: CheckCircle, color: '#10b981', stat: '+5%' },
    { title: 'Position Sizing', description: 'Kelly Criterion optimization.', icon: Percent, color: '#3b82f6', stat: '5%' },
    { title: 'Exposure Limits', description: 'Portfolio-wide controls.', icon: Gauge, color: '#8b5cf6', stat: '20%' },
];

export default function OracleSeedSection3({ isVisible }: SectionProps) {
    // Phone = 33.33vw (1/3), Content = 66.67vw (2/3), Gap = 3vw
    const phoneWidth = 'calc(33.33vw - 2vw)';
    const contentWidth = 'calc(66.67vw - 4vw)';
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
                {/* iPhone Image - Exactly 1/3 of viewport - LEFT */}
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
                        src="/capitaliphone.png"
                        alt="Capital Protection App"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '85vh',
                            objectFit: 'contain',
                        }}
                    />
                </motion.div>

                {/* Content - Exactly 2/3 of viewport - RIGHT */}
                <div style={{ width: contentWidth, minWidth: contentWidth }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: 'clamp(20px, 3vw, 28px)' }}
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
                                color: '#10b981',
                                backgroundColor: 'rgba(16,185,129,0.1)',
                                border: '1px solid rgba(16,185,129,0.2)',
                                borderRadius: '9999px',
                            }}
                        >
                            Risk Controls
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 4vw, 48px)',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '12px',
                            }}
                        >
                            Your Capital, <span style={{ color: '#10b981' }}>Protected</span>
                        </h2>
                        <p
                            style={{
                                fontSize: 'clamp(14px, 1.8vw, 18px)',
                                color: '#64748b',
                                maxWidth: '500px',
                            }}
                        >
                            Advanced risk management built into every decision.
                        </p>
                    </motion.div>

                    {/* Trust Stats - 4 columns */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '12px',
                            marginBottom: '20px',
                        }}
                    >
                        {trustStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'white',
                                        borderRadius: '14px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            display: 'grid',
                                            placeItems: 'center',
                                            backgroundColor: `${stat.color}15`,
                                            borderRadius: '10px',
                                            margin: '0 auto 10px',
                                        }}
                                    >
                                        <Icon size={18} color={stat.color} />
                                    </div>
                                    <p style={{ fontSize: '22px', fontWeight: 800, color: stat.color }}>{stat.value}</p>
                                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Risk Features - 2 columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                        {riskFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                                    style={{
                                        padding: '14px 16px',
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
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
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon size={18} color={feature.color} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{feature.title}</h4>
                                        <p style={{ fontSize: '12px', color: '#64748b' }}>{feature.description}</p>
                                    </div>
                                    <p style={{ fontSize: '18px', fontWeight: 800, color: feature.color }}>{feature.stat}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
