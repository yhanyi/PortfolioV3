import About from "@/components/about";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <Divider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </main>
  )
}