// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaPaintBrush } from "react-icons/fa";
// import { BsCodeSquare } from "react-icons/bs";
// import { TfiWrite } from "react-icons/tfi";
// import "./Services.css";
// import { useScreenSize } from "../../customHooks";

// gsap.registerPlugin(ScrollTrigger);

// const Services = () => {
//   const { screenWidth } = useScreenSize().screenSize;

//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const serviceRefs = useRef([]);

//   useEffect(() => {
//     const el = containerRef.current;
//     const gsapContext = gsap.context(() => {
//       // Animate the title
//       gsap.fromTo(
//         titleRef.current,
//         {
//           // x: -500,
//           x: -120,
//           opacity: 0.6,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.5,
//           scrollTrigger: {
//             trigger: el,
//             start: "top bottom",
//             end: "top 40%",
//             scrub: true,
//             // markers: true,
//             ease: "linear",
//           },
//         }
//       );

//       // Animate the description
//       gsap.fromTo(
//         descriptionRef.current,
//         {
//           // x: 500,
//           x: 150,
//           opacity: 0.6,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.5,
//           scrollTrigger: {
//             trigger: el,
//             start: "top bottom",
//             end: "top 40%",
//             scrub: true,
//             // markers: true,
//             ease: "linear",
//           },
//         }
//       );

//       // Animate each service element with delay and stagger for larger screens
//       if (screenWidth > 1000) {
//         const timeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: serviceRefs.current,
//             start: "top 70%",
//             toggleActions: "play none none reverse",
//           },
//         });

//         timeline.fromTo(
//           serviceRefs.current,
//           {
//             // x: 500,
//             x: 100,
//             opacity: 0,
//           },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 0.5,
//             stagger: 0.3,
//             ease: "linear",
//           }
//         );
//       } else {
//         // Animate each service element individually for smaller screens
//         serviceRefs.current.forEach((service) => {
//           gsap.fromTo(
//             service,
//             {
//               x: "100%",
//               opacity: 0,
//             },
//             {
//               x: 0,
//               opacity: 1,
//               // delay: 0.2,
//               duration: 0.6,
//               scrollTrigger: {
//                 trigger: service,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse",
//                 ease: "linear",
//                 // markers:true
//               },
//             }
//           );
//         });
//       }
//     }, el);

//     return () => {
//       gsapContext.revert();
//     };
//   }, [screenWidth]);

//   return (
//     <section ref={containerRef} id="services">
//       <div className="section__wrapper services__container">
//         <div className="section__header center">
//           <h2 ref={titleRef} className="primary__title">
//             Services
//           </h2>
//           <h3 ref={descriptionRef} className="text__muted description">
//             I transform your innovative ideas into distinctive, high-quality web
//             projects that inspire you and captivate your customers.
//           </h3>
//         </div>
//         <div className="services__group">
//           <article
//             className="service"
//             ref={(el) => (serviceRefs.current[0] = el)}
//           >
//             <div className="service__top">
//               <div className="icon__container">
//                 <FaPaintBrush className="icon" />
//               </div>
//               <h3 className="title">UI/UX Design</h3>
//             </div>
//             <div className="service__middle">
//               <p className="text__muted description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
//                 provident accusamus recusandae eligendi, adipisci sequi
//                 reiciendis quisquam? Sapiente optio rerum sequi!
//               </p>
//             </div>
//             <div className="service__bottom">
//               <button className="btn btn__primary">Read more</button>
//             </div>
//           </article>
//           {/* END UI/UX */}

//           <article
//             className="service"
//             ref={(el) => (serviceRefs.current[1] = el)}
//             style={{ "--color-primary": "var(--color-success)" }}
//           >
//             <div className="service__top">
//               <div className="icon__container">
//                 <BsCodeSquare className="icon" />
//               </div>
//               <h3 className="title">Web Development</h3>
//             </div>
//             <div className="service__middle">
//               <p className="text__muted description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
//                 provident accusamus recusandae eligendi, adipisci sequi
//                 reiciendis quisquam? Sapiente optio rerum sequi!
//               </p>
//             </div>
//             <div className="service__bottom">
//               <button className="btn btn__primary">Read more</button>
//             </div>
//           </article>
//           {/* END WEB DEVELOPMENT */}

//           <article
//             className="service"
//             ref={(el) => (serviceRefs.current[2] = el)}
//             style={{ "--color-primary": "blueviolet" }}
//           >
//             <div className="service__top">
//               <div className="icon__container">
//                 <TfiWrite className="icon" />
//               </div>
//               <h3 className="title">Content Creation</h3>
//             </div>
//             <div className="service__middle">
//               <p className="text__muted description">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
//                 provident accusamus recusandae eligendi, adipisci sequi
//                 reiciendis quisquam? Sapiente optio rerum sequi!
//               </p>
//             </div>
//             <div className="service__bottom">
//               <button className="btn btn__primary">Read more</button>
//             </div>
//           </article>
//           {/* END CONTENT CREATION */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// ? changing text in cards

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import "./Services.css";
import { useScreenSize } from "../../customHooks";
import { MdSettingsApplications } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { screenWidth } = useScreenSize().screenSize;

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    const gsapContext = gsap.context(() => {
      // Animate the title
      gsap.fromTo(
        titleRef.current,
        {
          // x: -500,
          x: -120,
          opacity: 0.6,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
            // markers: true,
            ease: "linear",
          },
        }
      );

      // Animate the description
      gsap.fromTo(
        descriptionRef.current,
        {
          // x: 500,
          x: 150,
          opacity: 0.6,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
            // markers: true,
            ease: "linear",
          },
        }
      );

      // Animate each service element with delay and stagger for larger screens
      if (screenWidth > 1000) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: serviceRefs.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        timeline.fromTo(
          serviceRefs.current,
          {
            // x: 500,
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: "linear",
          }
        );
      } else {
        // Animate each service element individually for smaller screens
        serviceRefs.current.forEach((service) => {
          gsap.fromTo(
            service,
            {
              x: "100%",
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              // delay: 0.2,
              duration: 0.6,
              scrollTrigger: {
                trigger: service,
                start: "top 80%",
                toggleActions: "play none none reverse",
                ease: "linear",
                // markers:true
              },
            }
          );
        });
      }
    }, el);

    return () => {
      gsapContext.revert();
    };
  }, [screenWidth]);

  return (
    <section ref={containerRef} id="services">
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 ref={titleRef} className="primary__title">
            Services
          </h2>
          <h3 ref={descriptionRef} className="text__muted description">
            I transform your innovative ideas into distinctive, high-quality web
            projects that inspire you and captivate your customers.
          </h3>
        </div>
        <div className="services__group">
          <article
            className="service"
            ref={(el) => (serviceRefs.current[0] = el)}
          >
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className="icon" />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Crafting intuitive and engaging user interfaces and experiences
                is my passion. I focus on creating designs that are not only
                visually appealing but also user-friendly and accessible. My
                design process includes thorough research, wireframing,
                prototyping, and user testing to ensure the final product meets
                your users' needs and exceeds their expectations
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END UI/UX */}

          <article
            className="service"
            ref={(el) => (serviceRefs.current[1] = el)}
            style={{ "--color-primary": "var(--color-success)" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">Web Development</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I specialize in building custom websites tailored to your unique
                needs. From small business sites to large-scale web
                applications, I ensure each project is built with modern
                technologies, focusing on performance, accessibility, and user
                experience. My approach involves understanding your goals,
                designing a solution that fits, and developing a site that not
                only looks great but functions seamlessly.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END WEB DEVELOPMENT */}

          <article
            className="service"
            ref={(el) => (serviceRefs.current[2] = el)}
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <MdSettingsApplications className="icon" />
              </div>
              <h3 className="title">API Integration</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                In today's connected world, integrating your website with
                third-party services and APIs can greatly enhance its
                functionality and user experience. I provide API integration
                services that connect your site to various external systems,
                enabling smooth data exchange and additional features
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END API Integration */}
        </div>
      </div>
    </section>
  );
};

export default Services;
