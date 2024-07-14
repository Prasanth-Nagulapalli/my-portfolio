import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <div style={{ height: "500vh" }}></div>
    </>
  );
}

export default App;
