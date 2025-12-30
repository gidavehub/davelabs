import type { Metadata } from 'next';
import './globals.css';
import CapsuleNav from '@/components/ui/CapsuleNav';

export const metadata: Metadata = {
    title: 'DaveLabs | Intelligence & Physics Research',
    description: 'Architecting Post-Classical Intelligence via Decentralized Cognitive Agent Networks. Home of Oracle-Seed DCAN - the future of blockchain intelligence.',
    keywords: ['AI', 'Machine Learning', 'Blockchain', 'DCAN', 'Oracle-Seed', 'Research', 'DaveLabs'],
    authors: [{ name: 'DaveLabs' }],
    openGraph: {
        title: 'DaveLabs | Intelligence & Physics Research',
        description: 'Architecting Post-Classical Intelligence via Decentralized Cognitive Agent Networks.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-black antialiased">
                <CapsuleNav
                    logoSrc="/DaveLabslogo.png"
                    companyName="DaveLabs"
                    tagline="RESEARCH"
                    position="top-right"
                />
                {children}
            </body>
        </html>
    );
}
