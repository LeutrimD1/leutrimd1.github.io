import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Container from "./components/Container";
import QuickNav from "./sections/QuickNav";
import Experience from "./sections/Experience";
import ContactInfo from "./sections/ContactInfo";

function App() {
  return (
    <>
      <Container>
        <AboutMe />
        <QuickNav />
        <Projects />
        <Experience />
        <ContactInfo />
      </Container>
    </>
  );
}

export default App
