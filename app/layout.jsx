import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import MotionProvider from "@/components/MotionProvider";

export const metadata = {
  title: "Shanto's Fit n Fine Gym — Gym & Fitness in Nadda, Dhaka",
  description:
    "Shanto's Fit n Fine Gym — a complete fitness solution for men & women at Morol Bazar, Nadda, Dhaka. Weight loss, weight gain, body building, steam bath, massage and diet plans.",
  keywords: [
    "gym Dhaka",
    "fitness club Bangladesh",
    "weight loss",
    "muscle gain",
    "personal training",
    "gym Nadda",
    "gym Morol Bazar",
    "Fit n Fine Gym",
  ],
};

export const viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
