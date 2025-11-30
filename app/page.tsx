import Navigation from "./component/ui/Navigation";
import Hero from "./component/ui/Hero";
import About from "./component/sections/About";
export default function HomePage() {
  return (
    <main>
  
      <Navigation />
      <Hero />
      <About />
    </main>
  );
}