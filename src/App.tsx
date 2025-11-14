import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <AboutMe />
        <button>
          Go to projects
        </button>
        Contact info
        Experience
        <Projects />
      </Container>
    </>
  )
}

export default App
