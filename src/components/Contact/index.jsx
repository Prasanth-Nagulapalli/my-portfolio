// import React from "react";
// import "./Contact.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import { GrLinkedin } from "react-icons/gr";

// const Contact = () => {

//   return (
//     <section id="contact">
//       <div className="section__wrapper contact__container">
//         <div className="section__header">
//           <h2 className="primary__title">Contact Me</h2>
//           <div className="text__muted description">
//             Ready to take your digital presence to the next level? Whether
//             you're looking to launch a new website, revamp an existing one, or
//             need expert advice on the best web technologies, I'm here to help.
//             Reach out to discuss your project, ask questions, or just say hello.
//           </div>
//         </div>

//         <div className="contact__group">
//           <div className="contact__options">
//             <article className="contact__option">
//               <MdOutlineEmail className="contact__icon" />
//               <h3>Email</h3>
//               <h5>prasanth.ragava@gmail.com</h5>
//               <a
//                 href="prasanth.ragava@gmail.com"
//                 target="_blank"
//                 className="btn"
//               >
//                 Send a message
//               </a>
//             </article>

//             <article className="contact__option">
//               {/* <RiMessengerLine className='contact__icon'/> */}
//               <GrLinkedin className="contact__icon" />

//               <h3>Linkedin</h3>
//               <h5>prasanth</h5>
//               <a
//                 href="https://www.linkedin.com/in/prasanth-n-612312252/"
//                 target="_blank"
//                 className="btn"
//                 rel="noreferrer"
//               >
//                 Send a message
//               </a>
//             </article>

//             <article className="contact__option">
//               <BsWhatsapp className="contact__icon" />
//               <h3>WhatsApp</h3>
//               <h5>+91 7337518778</h5>
//               <a
//                 href="https://www.linkedin.com/in/prasanth-n-612312252/"
//                 target="_blank"
//                 className="btn"
//                 rel="noreferrer"
//               >
//                 Send a message
//               </a>
//             </article>
//           </div>
//           {/* END OF CONTACT OPTION */}

//           <form /* ref={form} onSubmit={sendEmail} */>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Full name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />
//             <textarea
//               name="message"
//               rows="7"
//               placeholder="Your Message"
//               required
//             ></textarea>
//             <button type="submit" className="btn btn__primary">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// ? trail for animations

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { useScreenSize } from "../../customHooks";
const Contact = () => {
  const { screenWidth } = useScreenSize().screenSize;

  const containerRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const serviceRefs = useRef([]);
  const descRef = useRef();

  //gsap
  useEffect(() => {
    const el = containerRef.current;
    const gsapContext = gsap.context(() => {
      // Animate the sescription
      gsap.fromTo(
        descRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          delay: 0.3,
          y: 0,
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
            ease: "linear",
          },
        }
      );
      // Animate the ContactTitle
      gsap.fromTo(
        contactRef.current,
        {
          y: -40,
          opacity: 0,
          rotateX: 120,
          scale: 0.8,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          delay: 0.3,
          duration: 0.8,
          // ease: "bounce.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );

      // Animate form
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          rotateY: 120,
        },
        {
          delay: 0.2,
          rotateY: 0,
          duration: 1,
          rotateX: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: screenWidth > 1024 ? formRef.current : formRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
            ease: "linear",
            // markers:true
          },
        }
      );

      // Animate each service element with delay and stagger for larger screens
      if (screenWidth > 1025) {
        serviceRefs.current.forEach((service) => {
          gsap.fromTo(
            service,
            {
              y: 40,
              opacity: 0,
            },
            {
              delay: 0.25,
              y: 0,
              opacity: 1,
              duration: 0.4,
              scrollTrigger: {
                trigger: service,
                start: "top 90%",
                toggleActions: "play none none reverse",
                ease: "linear",
                // markers: true,
              },
            }
          );
        });
      } else {
        // Animate each service element individually for smaller screens
        serviceRefs.current.forEach((service) => {
          gsap.fromTo(
            service,
            {
              x: "110%",
              opacity: 0.6,
            },
            {
              delay: 0.25,
              x: "0%",
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: service,
                start: "top 90%",
                toggleActions: "play none none reverse",
                ease: "linear",
              },
            }
          );
        });
      }
    }, el);

    return () => gsapContext.revert();
  }, [screenWidth]);

  //gsap close

  return (
    <section id="contact" ref={containerRef}>
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title" ref={contactRef}>
            Contact Me
          </h2>
          <div className="text__muted description" ref={descRef}>
            Ready to elevate your digital presence? Whether you're starting a
            new website, refreshing an existing one, or seeking expert guidance
            on web technologies, I'm here to assist. Contact me to discuss your
            project, inquire about services, or simply say hello.
          </div>
        </div>

        <div className="contact__group">
          <div className="contact__options">
            <article
              className="contact__option"
              ref={(el) => (serviceRefs.current[0] = el)}
            >
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>prasanth.ragava@gmail.com</h5>
              <a
                href="prasanth.ragava@gmail.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>

            <article
              className="contact__option"
              ref={(el) => (serviceRefs.current[1] = el)}
            >
              {/* <RiMessengerLine className='contact__icon'/> */}
              <GrLinkedin className="contact__icon" />

              <h3>Linkedin</h3>
              <h5>prasanth</h5>
              <a
                href="https://www.linkedin.com/in/prasanth-n-612312252/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>

            <article
              className="contact__option"
              ref={(el) => (serviceRefs.current[2] = el)}
            >
              <BsWhatsapp className="contact__icon" />
              <h3>WhatsApp</h3>
              <h5>+91 7337518778</h5>
              <a
                href="https://www.linkedin.com/in/prasanth-n-612312252/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}

          <form /* ref={form} onSubmit={sendEmail} */ ref={formRef}>
            <input
              type="text"
              name="name"
              placeholder="Your Full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn__primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
