

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Cultivate HR',
    description: 'Get in touch with Cultivate HR for personalized HR and coaching services tailored to your small business needs.',

}

export default function ContactLayout({
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