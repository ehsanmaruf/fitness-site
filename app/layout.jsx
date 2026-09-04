import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IRONX — Gym & Fitness Club in Dhaka",
  description:
    "IRONX is a premium gym and fitness club in Dhaka. Strength training, weight loss, muscle gain, CrossFit, personal training and more. Join and forge your best self.",
  keywords: [
    "gym Dhaka",
    "fitness club Bangladesh",
    "weight loss",
    "muscle gain",
    "personal training",
    "CrossFit Dhaka",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
