import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import TrainingCategories from "@/components/TrainingCategories";
import ClassesList from "@/components/ClassesList";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Trainers from "@/components/Trainers";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Sponsors from "@/components/Sponsors";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <TrainingCategories />
      <ClassesList />
      <Programs />
      <Gallery />
      <Stats />
      <Trainers />
      <Packages />
      <Testimonials />
      <Sponsors />
      <CTA />
    </>
  );
}
