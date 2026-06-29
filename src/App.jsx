import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import TrustedBy from "./components/TrustedBy";
import Infrastructure from "./components/Infrastructure";
import PullRequest from "./components/PullRequest";
import Developers from "./components/Developers";
import Outcomes from "./components/Outcomes";
import Goverance from "./components/Governance";
import Static from "./components/Static";
import Pricing from "./components/Pricing";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main bg-zinc-800 w-full>
      <Navbar />
      <Hero />
      <DemoSection />
      <TrustedBy />
      <Infrastructure />
      <PullRequest />
      <Developers />
      <Outcomes />
      <Goverance />
      <Static />
      <Pricing />
      <Connect />
      <Footer />
    </main>
  );
}