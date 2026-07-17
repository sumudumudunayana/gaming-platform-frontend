import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </>
  );
}