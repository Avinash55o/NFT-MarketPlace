"use client";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "../components/Footer/footer";
import HeroSection from "../components/heroSection/heroSection";
import Services from "../components/services/services";
import NFTSlider from "../components/NFTSlider/nftSlider";
import CategorySection from "../components/Category/category";
const categories = [
  { name: "Art", image: "/panda art.png", color: "#ff3f34" },
  { name: "Music", image: "/pand sing.png", color: "#1e90ff" },
  { name: "Gaming", image: "/panda game.png", color: "#32cd32" },
  { name: "Virtual Land", image: "/panda land.png", color: "#8e44ad" },
];


export default function Dashboard() {
  //npm install tailwind-scrollbar-hide 
  return (
    <div className="flex flex-col min-h-screen bg-black scrollbar-hide  ">
      {/* nav */}
      <nav className="sticky top-0 z-50 scrollbar-hide ">
        <NavBar />
      </nav>
      {/* hero */}
      <div className="mt-10 ">
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
      <div className="container mx-auto">
      <CategorySection categories={categories}/>
      </div>
        
      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
