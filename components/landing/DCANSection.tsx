'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, GitBranch, Target, Boxes, Sparkles, Workflow, Layers, Activity, Atom } from 'lucide-react';

interface SectionProps {
    isVisible: boolean;
}

const dcanLayers = [
    { title: 'Agent Layer', subtitle: 'Autonomous Cognitive Units', icon: Cpu, color: '#3b82f6' },
    { title: 'Communication', subtitle: 'Quantum-Inspired Messaging', icon: Brain, color: '#8b5cf6' },
    { title: 'Consensus', subtitle: 'Emergent Decision Making', icon: GitBranch, color: '#06b6d4' },
    { title: 'Action', subtitle: 'Coordinated Execution', icon: Target, color: '#10b981' },
];

const coreInnovations = [
    { title: 'Belief State Manifolds', description: 'Agent beliefs as embeddings.', icon: Boxes },
    { title: 'Emergent Consciousness', description: 'High-level reasoning from dynamics.', icon: Sparkles },
    { title: 'Adaptive Topology', description: 'Network structure evolves.', icon: Workflow },
    { title: 'Distributed Memory', description: 'Knowledge distributed holographically.', icon: Layers },
    { title: 'Causal Reasoning', description: 'Building and testing causal models.', icon: Atom },
    { title: 'Temporal Awareness', description: 'Native understanding of time.', icon: Activity },
];

export default function DCANSection({ isVisible }: SectionProps) {
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
                        color: '#3b82f6',
                        backgroundColor: 'rgba(59,130,246,0.1)',
                        border: '1px solid rgba(59,130,246,0.2)',
                        borderRadius: '9999px',
                    }}
                >
                    Core Architecture
                </span>
                <h2
                    style={{
                        fontSize: 'clamp(24px, 4.5vw, 44px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '10px',
                    }}
                >
                    At its Core is <span style={{ color: '#3b82f6' }}>DCAN</span>
                </h2>
                <p
                    style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        color: '#64748b',
                        maxWidth: '750px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}
                >
                    Decentralized Cognitive Agent Network—intelligence emerges from collective agent behavior.
                    <br />
                    <span style={{ color: '#3b82f6', fontWeight: 500 }}>
                        Led and engineered by our Principal Architect, Godswill Iyke Dave.
                    </span>
                </p>
            </motion.div>

            {/* Main Content - Image + DCAN Layers */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1.3fr 1fr',
                    gap: 'clamp(24px, 4vw, 40px)',
                    marginBottom: 'clamp(30px, 5vw, 50px)',
                    alignItems: 'center',
                }}
            >
                {/* Agent Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        borderRadius: 'clamp(16px, 3vw, 24px)',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.12)',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/agent.jpeg"
                        alt="DCAN Agent"
                        style={{
                            width: '100%',
                            aspectRatio: '16 / 10',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </motion.div>

                {/* DCAN Layers */}
                <div style={{ display: 'grid', gap: 'clamp(10px, 1.5vw, 14px)' }}>
                    {dcanLayers.map((layer, index) => {
                        const Icon = layer.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                style={{
                                    padding: 'clamp(14px, 2vw, 18px)',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr',
                                    gap: '14px',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        display: 'grid',
                                        placeItems: 'center',
                                        backgroundColor: `${layer.color}15`,
                                        borderRadius: '12px',
                                    }}
                                >
                                    <Icon size={20} color={layer.color} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{layer.title}</h4>
                                    <p style={{ fontSize: '12px', color: layer.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{layer.subtitle}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Core Innovations */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                    gap: 'clamp(10px, 1.5vw, 14px)',
                }}
            >
                {coreInnovations.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                            style={{
                                padding: '14px',
                                backgroundColor: 'white',
                                borderRadius: '12px',
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
                                    backgroundColor: 'rgba(245,158,11,0.1)',
                                    borderRadius: '10px',
                                    margin: '0 auto 10px',
                                }}
                            >
                                <Icon size={18} color="#f59e0b" />
                            </div>
                            <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{item.title}</h5>
                            <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.4 }}>{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
