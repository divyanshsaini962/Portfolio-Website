'use client';

import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Chat from "@/components/Chat";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
    ssr: false,
});

export default function ClientLayout({ children }) {
    return (
        <body>
            <TopProgressBar />
            <Navbar />
            {children}
            <Chat />
            <Analytics />
        </body>
    );
}
