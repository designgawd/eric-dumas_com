import AboutMe from "./components/aboutme";
import Hello from "./components/hello";
import Projects from "./components/projects";
import Specialization from "./components/specialization";

export default function Home() {
  return (
    <>
      <Hello />
      <Specialization />
      <AboutMe />
      <Projects />
    </>
  );
}
