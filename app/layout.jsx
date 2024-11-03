import "./globals.css";
import "./nprogress.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
    title: "Divyanshu Saini | Portfolio",
    description: "I'm Divyanshu Saini, a freelance web developer based in Jhansi, passionate about creating impactful web solutions.",
    author: "Divyanshu Saini",
    siteUrl: "https://www.Divyanshu.my.id",
    applicationName: "Divyanshu Saini Portfolio",
    keywords: [
        "Divyanshu",
        "Divyanshu Saini",
        "freelance web developer",
        "web development",
        "Jhansi",
        "Divyanshu portfolio",
        "Divyanshu web developer",
    ],
    openGraph: {
        type: "website",
        url: "https://www.Divyanshu.my.id",
        title: "Divyanshu Saini | Portfolio",
        site_name: "Divyanshu Saini | Portfolio",
        description: "I'm Divyanshu Saini, a freelance web developer based in Jhansi. Explore my portfolio to see my latest projects.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image-rev.png",
                alt: "Divyanshu Saini Portfolio",
            },
        ],
        site_name: "Divyanshu Saini | Portfolio",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ClientLayout>{children}</ClientLayout>
        </html>
    );
}
