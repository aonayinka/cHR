import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Services | Cultivate HR',
    description: 'Discover the range of HR and coaching services offered by Cultivate HR, designed to support small businesses in achieving their goals through expert guidance and tailored solutions. ',

}

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    )
}