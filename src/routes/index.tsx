import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Shop } from "@/components/Shop";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </main>
  );
}
