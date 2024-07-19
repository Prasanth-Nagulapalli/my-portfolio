import React, { useState, useEffect, useRef } from "react";
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

  // form submit

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9084a03f-ce8d-405b-aa45-9e0dbf9e05cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // form submit closed

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
                href="mailto:prasanth.ragava@gmail.com"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Send a Email
              </a>
            </article>

            <article
              className="contact__option"
              ref={(el) => (serviceRefs.current[1] = el)}
            >
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
                href="https://api.whatsapp.com/send?phone=+917337518778&text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}

          {/* web3form */}
          <form onSubmit={onSubmit} ref={formRef}>
            <input
              type="text"
              name="name"
              placeholder="Your Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
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
