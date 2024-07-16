// import React, { useEffect, useRef } from "react";
// import { FaPaintBrush } from "react-icons/fa";
// import { BsCodeSquare } from "react-icons/bs";
// import { TfiWrite } from "react-icons/tfi";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Services.css";

// const Services = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   const container = useRef(null);
//   //Register plugin
//   // useEffect(() => {
//   //   const el = container.current;
//   //   gsap.fromTo(
//   //     ".service__head",
//   //     {
//   //       opacity: 0,
//   //     },
//   //     {
//   //       opacity: 1,
//   //       scrollTrigger: {
//   //         trigger: el,
//   //       },
//   //     }
//   //   );

//   //   gsap.fromTo(
//   //     ".service",
//   //     {
//   //       y: -50,
//   //       opacity: 0,
//   //     },
//   //     {
//   //       y: 0,
//   //       opacity: 1,
//   //       duration: 1,
//   //       scrollTrigger: {
//   //         trigger: el,
//   //         start: "-100% bottom",
//   //         end: "bottom 20%",
//   //         scrub: true,
//   //         markers: true,
//   //       },
//   //     }
//   //   );
//   // }, []);

//   useEffect(() => {
//     const el = container.current;
//     const gsapContext = gsap.context(() => {
//       gsap.fromTo(
//         ".services__container",
//         {
//           x: 500,
//           opacity: 0.6,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.5,
//           scrollTrigger: {
//             trigger: el,
//             start: "top bottom",
//             end: "top 25%",
//             scrub: true,
//             markers: true
//           },
//         }
//       );
//     }, el);

//     return () => gsapContext.revert();
//   }, []);

//   return (
//     <section ref={container} id="services">
//       <div className="section__wrapper services__container">
//         <div className="section__header center">
//           <h2 className="primary__title">Services</h2>
//           <h3 className="text__muted description">
//             I transform your ideas, and consequently your desires, into a
//             distinctive web project that both inspires you and captivates your
//             customers.
//           </h3>
//         </div>
//         <div className="services__group">
//           <article className="service">
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

// ? trail for moving each element
// sucess

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaPaintBrush } from 'react-icons/fa';
// import { BsCodeSquare } from 'react-icons/bs';
// import { TfiWrite } from 'react-icons/tfi';
// import "./Services.css";
// gsap.registerPlugin(ScrollTrigger);

// const Services = () => {
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
//           x: -500,
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
//           },
//         }
//       );

//       // Animate the description
//       gsap.fromTo(
//         descriptionRef.current,
//         {
//           x: 500,
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
//           },
//         }
//       );

//       // Animate each service element
//       serviceRefs.current.forEach((service) => {
//         gsap.fromTo(
//           service,
//           {
//             x: 500,
//             opacity: 0.6,
//           },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 0.5,
//             scrollTrigger: {
//               trigger: service,
//               start: "top bottom",
//               end: "top 25%",
//               scrub: true,
//               // markers: true,
//             },
//           }
//         );
//       });
//     }, el);

//     return () => gsapContext.revert();
//   }, []);

//   return (
//     <section ref={containerRef} id="services">
//       <div className="section__wrapper services__container">
//         <div className="section__header center">
//           <h2 ref={titleRef} className="primary__title">Services</h2>
//           <h3 ref={descriptionRef} className="text__muted description">
//             I transform your ideas, and consequently your desires, into a distinctive web project that both inspires you and captivates your customers.
//           </h3>
//         </div>
//         <div className="services__group">
//           <article className="service" ref={el => serviceRefs.current[0] = el}>
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

//           <article className="service" ref={el => serviceRefs.current[1] = el} style={{ "--color-primary": "var(--color-success)" }}>
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

//           <article className="service" ref={el => serviceRefs.current[2] = el} style={{ "--color-primary": "blueviolet" }}>
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

// ? want little delay
// ? successfull

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import "./Services.css";
import { useScreenSize } from "../../customHooks";
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
          x: -250,
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
          x: 250,
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
            trigger: el,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            // markers: true,
          },
        });

        timeline.fromTo(
          serviceRefs.current,
          {
            // x: 500,
            x: 200,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            stagger: 0.5,
            ease: "linear",
          }
        );
      } else {
        // Animate each service element individually for smaller screens
        serviceRefs.current.forEach((service) => {
          gsap.fromTo(
            service,
            {
              // x: 500,
              x: 500,
              opacity: 0.6,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: service,
                start: "top bottom",
                end: "top 25%",
                scrub: true,
                ease: "linear",
              },
            }
          );
        });
      }
    }, el);

    return () => gsapContext.revert();
  }, [screenWidth]);

  return (
    <section ref={containerRef} id="services">
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 ref={titleRef} className="primary__title">
            Services
          </h2>
          <h3 ref={descriptionRef} className="text__muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
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
                <TfiWrite className="icon" />
              </div>
              <h3 className="title">Content Creation</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END CONTENT CREATION */}
        </div>
      </div>
    </section>
  );
};

export default Services;
