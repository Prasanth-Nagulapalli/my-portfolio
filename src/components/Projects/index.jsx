// import React, { useEffect, useRef, useState } from "react";
// import "./Projects.css";
// import { sumArray } from "../../helper";
// import { projects } from "../../data";
// import Card from "./Card";
// import gsap from "gsap";

// const tabs = [
//   {
//     name: "All",
//   },
//   {
//     name: "Front-End",
//   },
//   {
//     name: "Full-Stack",
//   },
// ];

// const Projects = () => {
//   const [displayableProjects, setDisplayableProjects] = useState(projects);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const [indicatorWidth, setIndicatorWidth] = useState(0);
//   const itemsEls = useRef([]);
//   // const itemsEls = useRef(new Array());

//   useEffect(() => {
//     const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
//     setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
//     setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
//   }, [activeIndex]);

//   const setProjects = (category) => {
//     if (category === "All") {
//       return setDisplayableProjects(projects);
//     }
//     const pro = projects.filter(
//       (item) => item.category.toLowerCase() === category.toLowerCase()
//     );
//     setDisplayableProjects(pro);
//   };

//   // gsap

//   const projectRef = useRef();

//   useEffect(() => {
//     const el = projectRef.current;
//     gsap.fromTo(
//       ".projects__container .projects__title",
//       {
//         y: -150,
//         opacity: 0,
//       },
//       {
//         // delay:.21,
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//         ease: "bounce.inOut",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 75%",
//           toggleActions: "play none none reset",
//         },
//       }
//     );
//   }, []);

//   // gsap

//   return (
//     <section id="projects" ref={projectRef}>
//       <div className="section__wrapper projects__container">
//         <div className="section__header center">
//           <h1 className="primary__title projects__title">Projects</h1>
//         </div>
//         <nav>
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               ref={(el) => (itemsEls.current[index] = el)}
//               onClick={() => {
//                 setActiveIndex(index);
//                 setProjects(tab.name);
//               }}
//             >
//               {tab.name}
//             </button>
//           ))}
//           <span
//             className="active__indicator"
//             style={{
//               left: `${offset}px`,
//               width: `${indicatorWidth}px`,
//             }}
//           />
//         </nav>

//         <div className="card__container">
//           {displayableProjects &&
//             displayableProjects.map((project) => (
//               <Card
//                 key={project.id}
//                 title={project.title}
//                 image={project.image}
//                 data={project.data}
//                 stack={project.stack}
//                 demoLink={project.data.demoLink}
//                 sourceLink={project.data.sourceLink}
//               />
//             ))}
//         </div>
//         <button
//           className="btn btn__primary"
//           style={{
//             margin: "25px auto 0",
//             display: "block",
//             transform: "translateY(25px)",
//           }}
//         >
//           Show more
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//? test 2

import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { sumArray } from "../../helper";
import { projects } from "../../data";
import Card from "./Card";
import gsap from "gsap";
import { useScreenSize } from "../../customHooks";
const tabs = [{ name: "All" }, { name: "Front-End" }, { name: "Full-Stack" }];

const Projects = () => {
  const { setRefreshScroll, refreshScroll } = useScreenSize();
  const [showButton, setShowButton] = useState(true); // Indicates if "Show more" button should be displayed
  const [displayableProjects, setDisplayableProjects] = useState(
    projects.slice(0, 3)
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false); // Toggles between showing all or limited projects
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);
  const projectRef = useRef();

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  const setProjects = (category) => {
    const filteredProjects =
      category === "All"
        ? projects
        : projects.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
    setDisplayableProjects(
      filteredProjects.slice(0, showAll ? filteredProjects.length : 3)
    );
    setShowButton(filteredProjects.length > 3); // Show button only if there are more than 3 projects
    setRefreshScroll(!refreshScroll);
  };

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
    const category = tabs[activeIndex].name;
    const filteredProjects =
      category === "All"
        ? projects
        : projects.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
    setDisplayableProjects(
      filteredProjects.slice(0, showAll ? 3 : filteredProjects.length)
    ); // Toggle between showing all or 3 projects
    setRefreshScroll(!refreshScroll);
  };

  useEffect(() => {
    gsap.fromTo(
      ".projects__container .projects__title",
      { y: -150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "bounce.inOut",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={projectRef}>
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h1 className="primary__title projects__title">Projects</h1>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}
          />
        </nav>

        <div className="card__container">
          {displayableProjects &&
            displayableProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                image={project.image}
                data={project.data}
                stack={project.stack}
                demoLink={project.data.demoLink}
                sourceLink={project.data.sourceLink}
              />
            ))}
        </div>
        {showButton && (
          <button
            className="btn btn__primary"
            style={{
              margin: "25px auto 0",
              display: "block",
              transform: "translateY(25px)",
              cursor:"not-allowed"
            }}
            // onClick={handleShowMore}
            disabled
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
