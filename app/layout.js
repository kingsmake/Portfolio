import 'boxicons/css/boxicons.min.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Omkar Tupe | MCA Student & Full-Stack Developer',
    description:
        'Omkar Tupe – MCA student, software and full-stack developer interested in AI, computer vision and intelligent systems.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
