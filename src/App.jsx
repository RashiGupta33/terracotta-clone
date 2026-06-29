import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import TrustedBy from "./components/TrustedBy";
import Infrastructure from "./components/Infrastructure";

export default function App() {
  return (
    <main bg-zinc-800 w-full>
      <Navbar />
      <Hero />
      <DemoSection />
      <TrustedBy />
      <Infrastructure />
    </main>
  );
}