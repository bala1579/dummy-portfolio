import viteLogo from "/vite.svg";
// import './App.css'

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
// import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "KIRAN BALA",
  title: "Web Designer & Web Devloper",
  email: "balaofficialit@gmail.com",
  gitHub: "bala1579",
  instagram: "microsoft",
  linkedIn: "bala55",
  // medium: "",
  // twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
}

export default App;
