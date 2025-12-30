'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
  LayoutGroup
} from 'framer-motion';
import { ChevronDown, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

// --- COMPONENT IMPORTS ---
// Assuming these paths exist in your project structure based on your provided file
import MetallicPaint, { parseLogoImage } from '@/components/ui/MetallicPaint';
import OracleSeedSection1 from '@/components/landing/OracleSeedSection1';
import OracleSeedSection2 from '@/components/landing/OracleSeedSection2';
import OracleSeedSection3 from '@/components/landing/OracleSeedSection3';
import DCANSection from '@/components/landing/DCANSection';

// Dynamic import DarkVeil to avoid SSR issues
const DarkVeil = dynamic(() => import('@/components/ui/DarkVeil'), { ssr: false });

// --- PHYSICS CONSTANTS ---
const SPRING_OPTIONS = {
  stiffness: 60,
  damping: 15,
  mass: 1,
};

// ==========================================
// ULTRA-HIGH FIDELITY ROTATING COMPONENT
// ==========================================
// Recreated to match the "Creative [Coding]" GIF reference pixel-for-pixel.
// Features: Auto-width adjustment, motion blur during transit, and spring physics.
// ==========================================

const RotatingText = ({
  texts,
  rotationInterval = 3000,
  mainClassName = "",
  staggerFrom = "last"
}: {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
  staggerFrom?: "first" | "last" | "center" | number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(intervalId);
  }, [texts.length, rotationInterval]);

  return (
    <span
      className={mainClassName}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        verticalAlign: 'middle',
        height: '1em',
        position: 'relative',
        marginLeft: '0.3em',
      }}
    >
      {/* The Colored Pill Container */}
      <motion.span
        layout
        transition={{
          layout: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
          }
        }}
        style={{
          backgroundColor: '#4f46e5',
          borderRadius: '999px',
          padding: '0.05em 0.6em',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '1.4em',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05) inset',
          transform: 'translateY(-0.08em)',
          minWidth: '2ch',
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={texts[index]}
            initial={{
              y: '100%',
              opacity: 0,
              filter: 'blur(4px)',
              scale: 0.9
            }}
            animate={{
              y: '0%',
              opacity: 1,
              filter: 'blur(0px)',
              scale: 1
            }}
            exit={{
              y: '-100%',
              opacity: 0,
              filter: 'blur(4px)',
              scale: 0.9,
              position: 'absolute'
            }}
            transition={{
              y: { type: 'spring', stiffness: 400, damping: 30, mass: 0.8 },
              opacity: { duration: 0.15 },
              filter: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            style={{
              display: 'inline-block',
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1,
              textAlign: 'center',
              whiteSpace: 'nowrap',
              position: 'relative',
              zIndex: 2,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>

        {/* Subtle gloss overlay for 3D feel */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 10
        }} />
      </motion.span>
    </span>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function Home() {
  const [logoImageData, setLogoImageData] = useState<ImageData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAccumulator = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const springValue = useSpring(0, SPRING_OPTIONS);

  // --- LOGO LOADING LOGIC ---
  useEffect(() => {
    async function loadLogo() {
      try {
        const response = await fetch('/oracleseedlogo.png');
        const blob = await response.blob();
        const file = new File([blob], 'oracleseedlogo.png', { type: 'image/png' });
        const result = await parseLogoImage(file) as { imageData: ImageData };
        setLogoImageData(result.imageData);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading logo:', error);
        setIsLoaded(true);
      }
    }
    loadLogo();
  }, []);

  // --- SCROLL PHYSICS LOGIC ---
  useEffect(() => {
    springValue.set(showContent ? 1 : 0);
  }, [showContent, springValue]);

  const handleHeroWheel = useCallback((e: WheelEvent) => {
    if (isScrolling) return;
    scrollAccumulator.current += e.deltaY;

    if (scrollAccumulator.current > 150) {
      setIsScrolling(true);
      setShowContent(true);
      scrollAccumulator.current = 0;
      setTimeout(() => setIsScrolling(false), 800);
    }
  }, [isScrolling]);

  const handleContentWheel = useCallback((e: WheelEvent) => {
    if (!contentRef.current || isScrolling) return;

    if (contentRef.current.scrollTop <= 0 && e.deltaY < 0) {
      e.preventDefault();
      scrollAccumulator.current += e.deltaY;

      if (scrollAccumulator.current < -150) {
        setIsScrolling(true);
        setShowContent(false);
        scrollAccumulator.current = 0;
        setTimeout(() => setIsScrolling(false), 800);
      }
    }
  }, [isScrolling]);

  useEffect(() => {
    if (!showContent) {
      window.addEventListener('wheel', handleHeroWheel, { passive: true });
      return () => window.removeEventListener('wheel', handleHeroWheel);
    }
  }, [handleHeroWheel, showContent]);

  useEffect(() => {
    const content = contentRef.current;
    if (showContent && content) {
      content.addEventListener('wheel', handleContentWheel, { passive: false });
      return () => content.removeEventListener('wheel', handleContentWheel);
    }
  }, [showContent, handleContentWheel]);

  // --- ANIMATION TRANSFORMS ---
  const whiteContainerY = useTransform(springValue, [0, 1], ['100vh', '0vh']);
  const heroOpacity = useTransform(springValue, [0, 0.5], [1, 0]);
  const borderRadius = useTransform(springValue, [0.8, 1], ['64px', '0px']);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000',
        overflow: 'hidden',
        // We use a font stack that favors geometric sans-serifs to match the aesthetic
        fontFamily: '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* 
        --------------------------------------------------
        HERO SECTION 
        --------------------------------------------------
      */}
      <motion.div
        style={{
          opacity: heroOpacity,
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          zIndex: 0,
        }}
      >
        {/* Background Effects */}
        {!showContent && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100vw', height: '100vh' }}>
            <DarkVeil
              hueShift={0}
              noiseIntensity={0}
              scanlineIntensity={0}
              speed={2.3}
              scanlineFrequency={0}
              warpAmount={0}
              resolutionScale={1}
            />
          </div>
        )}

        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)', zIndex: 1 }} />

        {/* 
          --------------------------------------------------
          CENTERED HERO CONTENT 
          --------------------------------------------------
        */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: 'min(90vw, 900px)' }}>

          {/* 1. METALLIC LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              width: 'min(25vh, 220px)',
              height: 'min(25vh, 220px)',
              margin: '0 auto 3vh',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-40px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            {logoImageData && !showContent ? (
              <MetallicPaint
                imageData={logoImageData}
                params={{
                  patternScale: 2.5,
                  refraction: 0.02,
                  edge: 1.2,
                  patternBlur: 0.006,
                  liquid: 0.08,
                  speed: 0.25,
                }}
              />
            ) : logoImageData ? (
              <div style={{ width: '100%', height: '100%', background: 'rgba(59,130,246,0.2)', borderRadius: '50%' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '3px solid rgba(59,130,246,0.3)',
                    borderTopColor: '#3b82f6',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                  }}
                />
              </div>
            )}
          </motion.div>

          {/* 2. BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '2.5vh' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                backgroundColor: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: '9999px',
                fontSize: 'clamp(10px, 1.2vw, 12px)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#93c5fd',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 0 15px rgba(59,130,246,0.15)'
              }}
            >
              <Clock size={12} style={{ marginRight: '8px', opacity: 0.9 }} />
              Coming Soon
            </span>
          </motion.div>

          {/* 
             3. MAIN TITLE + ROTATING COMPONENT 
             Using LayoutGroup to create shared animation context for smooth sliding.
          */}
          <LayoutGroup>
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                layout: { type: "spring", stiffness: 200, damping: 30 }
              }}
              style={{
                marginBottom: '1.5vh',
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                fontSize: 'clamp(24px, 4.5vw, 64px)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{
                  fontWeight: 800,
                  color: '#ffffff',
                  textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap',
                }}
              >
                ORACLE-SEED-
              </motion.span>

              {/* THE ROTATING PILL COMPONENT */}
              <RotatingText
                texts={['BTC', 'DOGE', 'ETH', 'AVAX', 'HEDERA']}
                rotationInterval={2500}
              />
            </motion.div>
          </LayoutGroup>

          {/* 4. SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#e4e4e7',
              marginBottom: '1vh',
              marginTop: '1.5vh',
              letterSpacing: '-0.01em'
            }}
          >
            Trade in Your Sleep
          </motion.p>

          {/* 5. DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: '#a1a1aa',
              marginBottom: '4.5vh',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6
            }}
          >
            High-frequency autonomous intelligence for blockchain markets.
          </motion.p>

          {/* 6. BUTTON */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', delay: 0.6, stiffness: 400, damping: 20 }}
            onClick={() => setShowContent(true)}
            style={{
              padding: '16px 42px',
              backgroundColor: '#2563eb',
              color: 'white',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              fontWeight: 600,
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              boxShadow: '0 4px 25px rgba(37, 99, 235, 0.4)',
              letterSpacing: '0.02em',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>Start the Journey</div>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '50%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
              zIndex: 1
            }} />
          </motion.button>
        </div>

        {/* 7. SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer'
          }}
          onClick={() => setShowContent(true)}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>

      {/* 
        --------------------------------------------------
        CONTENT DRAWER SECTION 
        --------------------------------------------------
      */}
      <motion.div
        style={{
          y: whiteContainerY,
          position: 'absolute',
          inset: 0,
          zIndex: 20,
        }}
      >
        <motion.div
          ref={contentRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#f8fafc',
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            boxShadow: '0 -50px 100px rgba(0,0,0,0.5)',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {/* Landing Page Content Sections */}
          <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
            <OracleSeedSection1 isVisible={showContent} />
          </div>
          <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
            <OracleSeedSection2 isVisible={showContent} />
          </div>
          <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
            <OracleSeedSection3 isVisible={showContent} />
          </div>
          <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
            <DCANSection isVisible={showContent} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}