// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaPaintBrush } from "react-icons/fa";
// import { BsCodeSquare } from "react-icons/bs";
// import "./Services.css";
// import { useScreenSize } from "../../customHooks";
// import { MdSettingsApplications } from "react-icons/md";

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
//                 Crafting intuitive and engaging user interfaces and experiences
//                 is my passion. I focus on creating designs that are not only
//                 visually appealing but also user-friendly and accessible. My
//                 design process includes thorough research, wireframing,
//                 prototyping, and user testing to ensure the final product meets
//                 your users' needs and exceeds their expectations
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
//                 I specialize in building custom websites tailored to your unique
//                 needs. From small business sites to large-scale web
//                 applications, I ensure each project is built with modern
//                 technologies, focusing on performance, accessibility, and user
//                 experience. My approach involves understanding your goals,
//                 designing a solution that fits, and developing a site that not
//                 only looks great but functions seamlessly.
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
//                 <MdSettingsApplications className="icon" />
//               </div>
//               <h3 className="title">API Integration</h3>
//             </div>
//             <div className="service__middle">
//               <p className="text__muted description">
//                 In today's connected world, integrating your website with
//                 third-party services and APIs can greatly enhance its
//                 functionality and user experience. I provide API integration
//                 services that connect your site to various external systems,
//                 enabling smooth data exchange and additional features
//               </p>
//             </div>
//             <div className="service__bottom">
//               <button className="btn btn__primary">Read more</button>
//             </div>
//           </article>
//           {/* END API Integration */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// ? new version

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { MdSettingsApplications } from "react-icons/md";
import "./Services.css";
import { useScreenSize } from "../../customHooks";
import Card from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ServiceCardsData = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: `Crafting intuitive and engaging user interfaces and experiences is my passion. I focus on creating designs that are visually appealing, user-friendly, and accessible. My process includes research, wireframing, prototyping, and user testing to meet and exceed user expectations. By leveraging the latest design trends and tools, I create interfaces that resonate with users and enhance their experience. I collaborate with stakeholders to align design with business goals, from sketches to high-fidelity mockups. My expertise includes mobile app design, web design, and responsive design. I am committed to continuous learning to keep my designs current and effective. Whether a redesign or a new project, I deliver designs that drive engagement and satisfaction. Let's transform your vision into a seamless and memorable user experience.`,
    icon: <FaPaintBrush className="icon" />,
  },
  {
    id: 2,
    title: "Web Development",
    desc: `I specialize in building custom websites tailored to your unique needs. From small business sites to large-scale web applications, I ensure each project is built with modern technologies, focusing on performance, accessibility, and user experience. My approach involves understanding your goals, designing a solution that fits, and developing a site that not only looks great but functions seamlessly. By leveraging the latest web technologies, I create scalable and secure websites that adapt to your growing business needs. My expertise includes front-end and back-end development, ensuring a cohesive and efficient workflow. I prioritize clean, maintainable code, and use best practices to enhance your site's performance. From responsive design to robust e-commerce solutions, I am dedicated to delivering websites that exceed your expectations. Whether it's a redesign or a new build, let's work together to create a web presence that drives success and growth.`,
    icon: <BsCodeSquare className="icon" />,
    style: { "--color-primary": "var(--color-success)" },
  },
  {
    id: 3,
    title: "API Integration",
    desc: `In today's connected world, integrating your website with third-party services and APIs can greatly enhance its functionality and user experience. I provide API integration services that connect your site to various external systems, enabling smooth data exchange and additional features. By seamlessly integrating APIs, I ensure your website can access real-time data, streamline processes, and offer dynamic content. My expertise covers RESTful and GraphQL APIs, ensuring robust and efficient data handling. I focus on security, ensuring that data transfers are safe and reliable. Whether you need social media integrations, payment gateways, or custom API solutions, I can help. My approach includes thorough testing and documentation to ensure seamless integration and easy maintenance. Let's enhance your website's capabilities with reliable and efficient API integrations that keep your users engaged and your operations running smoothly.`,
    icon: <MdSettingsApplications className="icon" />,
  },
];

const Services = () => {
  const { screenWidth, documentHeight } = useScreenSize().screenSize;
  const { refreshScroll, setRefreshScroll } = useScreenSize();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const serviceRefs = useRef([]);
  const [visible, setVisible] = useState(true);
  const [viewPort, setviewPort] = useState(true);
  const [showMore, setShowMore] = useState(null);

  const handleShowMore = (cardId) => {
    setShowMore((prev) => (prev === cardId ? null : cardId));
    setRefreshScroll(!refreshScroll);
  };

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [refreshScroll, documentHeight]);

  useEffect(() => {
    const el = containerRef.current;
    const gsapContext = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -120, opacity: 0.6 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
            ease: "linear",
          },
        }
      );
      gsap.fromTo(
        descriptionRef.current,
        { x: 150, opacity: 0.6 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
            ease: "linear",
          },
        }
      );
    }, el);

    return () => {
      gsapContext.revert();
    };
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth > 1000) {
      const el = containerRef.current;
      const gsapContext = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: serviceRefs.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        });

        timeline.fromTo(
          serviceRefs.current.filter((ref) => ref), // filter out null/undefined refs
          {
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
      }, el);

      return () => {
        gsapContext.revert();
      };
    }
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth <= 1000) {
      const el = containerRef.current;
      const gsapContext = gsap.context(() => {
        serviceRefs.current.forEach((service) => {
          if (service) {
            // check for null/undefined
            gsap.fromTo(
              service,
              {
                x: "100%",
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                  trigger: service,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                  ease: "linear",
                },
              }
            );
          }
        });
      }, el);

      return () => {
        gsapContext.revert();
      };
    }
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth > 1000) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setviewPort(!entry.isIntersecting);
        },
        { root: null, rootMargin: "0px", threshold: 0.1 }
      );

      const currentRef = containerRef.current;

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [screenWidth]);

  useEffect(() => {
    handleShowMore(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {ServiceCardsData.map((item, index) => (
            <Card
              key={item.id}
              props={item}
              index={index}
              serviceRefs={serviceRefs}
              visible={visible}
              setVisible={setVisible}
              viewPort={viewPort}
              setviewPort={setviewPort}
              handleShowMore={() => handleShowMore(item.id)}
              showMoreIndex={showMore === item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
