'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CardLink {
    label: string;
    href: string;
    ariaLabel?: string;
}

export interface MenuCardProps {
    /** Card title */
    title: string;
    /** Optional subtitle or description */
    subtitle?: string;
    /** Links to display in the card */
    links?: CardLink[];
    /** Background color class or hex */
    bgColor?: string;
    /** Accent color for hover effects */
    accentColor?: string;
    /** Text color */
    textColor?: string;
    /** Optional icon component */
    icon?: React.ReactNode;
    /** Whether to show as a featured/larger card */
    featured?: boolean;
    /** Custom className */
    className?: string;
    /** Animation delay for staggered entrance */
    delay?: number;
    /** On click handler (for cards that are clickable themselves) */
    onClick?: () => void;
}

const MenuCard = forwardRef<HTMLDivElement, MenuCardProps>(({
    title,
    subtitle,
    links = [],
    bgColor = '#f0f7ff',
    accentColor = '#3b82f6',
    textColor = '#1e293b',
    icon,
    featured = false,
    className,
    delay = 0,
    onClick,
}, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
                duration: 0.4,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onClick={onClick}
            className={cn(
                'menu-card relative rounded-2xl p-5 transition-all duration-300',
                featured ? 'col-span-2 row-span-2' : '',
                onClick ? 'cursor-pointer' : '',
                className
            )}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            whileHover={{
                y: -4,
                boxShadow: `0 12px 40px ${accentColor}20`,
                transition: { duration: 0.2 }
            }}
        >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {icon && (
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${accentColor}15` }}
                        >
                            <span style={{ color: accentColor }}>{icon}</span>
                        </div>
                    )}
                    <div>
                        <h3
                            className="text-lg font-semibold tracking-tight"
                            style={{ color: textColor }}
                        >
                            {title}
                        </h3>
                        {subtitle && (
                            <p
                                className="text-sm mt-0.5 opacity-70"
                                style={{ color: textColor }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Card Links */}
            {links.length > 0 && (
                <div className="flex flex-col gap-2">
                    {links.map((link, index) => (
                        <motion.a
                            key={`${link.label}-${index}`}
                            href={link.href}
                            aria-label={link.ariaLabel || link.label}
                            className="group flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg transition-colors duration-200"
                            style={{
                                color: textColor,
                            }}
                            whileHover={{
                                backgroundColor: `${accentColor}10`,
                                x: 4
                            }}
                        >
                            <ArrowUpRight
                                className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                style={{ color: accentColor }}
                            />
                            <span className="text-sm font-medium">
                                {link.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            )}

            {/* Decorative accent */}
            <div
                className="absolute top-0 right-0 w-24 h-24 rounded-2xl opacity-5 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 100% 0%, ${accentColor} 0%, transparent 70%)`,
                }}
            />
        </motion.div>
    );
});

MenuCard.displayName = 'MenuCard';

export default MenuCard;
export { MenuCard };
