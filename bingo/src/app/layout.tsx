import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapActivation from "./components/BootstrapActivation";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bingo",
    description: "Play KäverBingo here every Friday!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
                <BootstrapActivation />
            </body>
        </html>
    );
}