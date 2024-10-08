import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/sections/Dashboard";
import ProfilesSection from "./components/sections/ProfilesSection";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education"
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <div>
            <Dashboard />
            <ProfilesSection />
            <Skills />
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
