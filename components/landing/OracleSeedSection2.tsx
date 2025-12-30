'use client';

import { motion } from 'framer-motion';
import { Network, Brain, Infinity, Zap, Cpu, MessageSquare, GitBranch, Sparkles } from 'lucide-react';

interface SectionProps {
    isVisible: boolean;
}

const architectureFeatures = [
    { stat: '1M+', title: 'Autonomous Agents', icon: Network, color: '#3b82f6' },
    { stat: '<50ms', title: 'Real-Time Latency', icon: Zap, color: '#10b981' },
    { stat: '∞', title: 'Infinite Scalability', icon: Infinity, color: '#8b5cf6' },
];

const dcanLayers = [
    { title: 'Agent Layer', subtitle: 'Autonomous Cognitive Units', icon: Cpu, color: '#3b82f6' },
    { title: 'Communication', subtitle: 'Quantum-Inspired Messaging', icon: MessageSquare, color: '#8b5cf6' },
    { title: 'Consensus', subtitle: 'Emergent Decision Making', icon: GitBranch, color: '#06b6d4' },
    { title: 'Action', subtitle: 'Coordinated Execution', icon: Sparkles, color: '#10b981' },
];

export default function OracleSeedSection2({ isVisible }: SectionProps) {
    return (
        <div
            style={{
                width: '95vw',
                maxWidth: '1400px',
                padding: 'clamp(40px, 8vw, 80px) 0',
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)' }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        marginBottom: '14px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#8b5cf6',
                        backgroundColor: 'rgba(139,92,246,0.1)',
                        border: '1px solid rgba(139,92,246,0.2)',
                        borderRadius: '9999px',
                    }}
                >
                    DCAN Architecture
                </span>
                <h2
                    style={{
                        fontSize: 'clamp(24px, 4.5vw, 44px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '10px',
                    }}
                >
                    Emergent <span style={{ color: '#8b5cf6' }}>Intelligence</span>
                </h2>
                <p
                    style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        color: '#64748b',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}
                >
                    Intelligence emerges from millions of autonomous agents—not a single brittle model.
                </p>
            </motion.div>

            {/* Network Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: 'clamp(16px, 3vw, 24px)',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                    marginBottom: 'clamp(30px, 5vw, 50px)',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/agentnetwork.jpeg"
                    alt="Agent Network Visualization"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '50vh',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
                {/* Glass overlay with stats - Less opaque */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 'clamp(16px, 3vw, 28px)',
                        background: 'linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 'clamp(12px, 2vw, 20px)',
                        }}
                    >
                        {architectureFeatures.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <div
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            display: 'grid',
                                            placeItems: 'center',
                                            backgroundColor: `${item.color}20`,
                                            borderRadius: '10px',
                                            margin: '0 auto 8px',
                                        }}
                                    >
                                        <Icon size={20} color={item.color} />
                                    </div>
                                    <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: item.color }}>{item.stat}</p>
                                    <p style={{ fontSize: 'clamp(11px, 1.5vw, 13px)', fontWeight: 600, color: '#0f172a' }}>{item.title}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* DCAN Layers */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                    gap: 'clamp(12px, 2vw, 20px)',
                }}
            >
                {dcanLayers.map((layer, index) => {
                    const Icon = layer.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            style={{
                                padding: 'clamp(16px, 2.5vw, 24px)',
                                backgroundColor: 'white',
                                borderRadius: 'clamp(12px, 2vw, 18px)',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                textAlign: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    backgroundColor: `${layer.color}15`,
                                    borderRadius: '14px',
                                    margin: '0 auto 12px',
                                }}
                            >
                                <Icon size={22} color={layer.color} />
                            </div>
                            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{layer.title}</h4>
                            <p style={{ fontSize: '12px', color: layer.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{layer.subtitle}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
