import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/FloatingNavbar";
import { navItems } from "@/data";
import MyProjects from "@/components/MyProjects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <MyProjects />
        <TechStack />
      </div>
    </main>
  );
}
