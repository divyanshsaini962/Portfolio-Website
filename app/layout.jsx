import "./globals.css";
import "./nprogress.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
    title: "Divyanshu | Portofolio",
    description: "My name is Divyanshu, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
    author: "Divyanshu Saini",
    siteUrl: "https://www.Divyanshu.my.id",
    applicationName: "Divyanshu",
    keywords: [
        "Divyanshu",
        "alvalen",
        "alvalen shafel",
        "shafel",
        "Divyanshu Saini",
        "alvalen shafel bilyunazra",
        "bloodfallen",
        "alvalen porto",
        "alvalen um",
    ],
    openGraph: {
        type: "website",
        url: "https://www.Divyanshu.my.id",
        title: "Divyanshu | Portofolio",
        site_name: "Divyanshu | Portofolio",
        description: "My name is Divyanshu, This is my portofolio website.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image-rev.png",
                alt: "Divyanshu Portofolio",
            },
        ],
        site_name: "Divyanshu | Portofolio",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ClientLayout>{children}</ClientLayout>
        </html>
    );
}
