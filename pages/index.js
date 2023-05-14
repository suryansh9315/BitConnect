import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowtoBuy from "@/components/HowtoBuy";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <Navbar />
      <Hero />
      <About />
      <HowtoBuy />
      <Tokenomics />
      <Roadmap />
      <Contact />
    </div>
  );
}
