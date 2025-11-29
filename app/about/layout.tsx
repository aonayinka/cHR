import  { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About ',
    description: 'Learn more about Cultivate HR, our mission, values, and the team dedicated to delivering exceptional HR and coaching services for small businesses.',

}
export default function AboutLayout({
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