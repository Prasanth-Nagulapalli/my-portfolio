// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
// import Services from "./components/Services";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Initial from "./components/initialLoad";
// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   if (loading) {
//     return (
//       <div className="initial__load">
//         <Initial />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <Header />
//       <About />
//       <Services />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

// ? trail

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
// import Services from "./components/Services";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Initial from "./components/initialLoad";
// import { gsap } from "gsap";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       gsap.to(".initial__load", {
//         opacity: 0,
//         duration: 1,
//         onComplete: () => setLoading(false),
//       });
//     }, 2000);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       gsap.fromTo(".main-content", { opacity: 0 }, { opacity: 1, duration: 1 });
//     }
//   }, [loading]);

//   return (
//     <div>
//       {loading ? (
//         <div className="initial__load">
//           <Initial />
//         </div>
//       ) : (
//         <div className="main-content">
//           <Navbar />
//           <Header />
//           <About />
//           <Services />
//           <Skills />
//           <Projects />
//           <Contact />
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// ? trail 2
// ? woking fine transition 1
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Initial from "./components/initialLoad";
import { gsap } from "gsap";
import CustomCursor from "./customHooks/Cursor/CustomCursor";
import { useScreenSize } from "./customHooks";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState(true);

  const { showCursor, setShowCursor } = useScreenSize();

  // lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);
  // lenis smooth scroll close

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".initial__load", {
        opacity: 0,
        duration: 0.4,
        onComplete: () => setLoading(false),
      });
      setShowCursor(false);
    }, 1600);
  }, [setShowCursor]);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(".main-content", { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div className="initial__load">
          <Initial />
          <CustomCursor />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="main-content" style={{ overflowX: "hidden" }}>
            <Header />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
          {showCursor && <CustomCursor />}
        </>
      )}
    </div>
  );
}

export default App;
