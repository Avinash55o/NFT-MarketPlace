"use client";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "../components/Footer/footer";
import HeroSection from "../components/heroSection/heroSection";
import Services from "../components/services/services";
import NFTSlider from "../components/NFTSlider/nftSlider";
export default function Dashboard() {
  //npm install tailwind-scrollbar-hide 
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 scrollbar-hide  ">
      {/* nav */}
      <nav className="sticky top-0 z-50 scrollbar-hide ">
        <NavBar />
      </nav>
      {/* hero */}
      <div className="scrollbar-hide ">
        <HeroSection />
      </div>
      {/* services */}
      <div className="scrollbar-hide ">
        <Services />
      </div>
      {/* slider */}
      <div className="scrollbar-hide">
        <NFTSlider />
      </div>
      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
