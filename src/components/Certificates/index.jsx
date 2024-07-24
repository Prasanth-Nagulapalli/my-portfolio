import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosClose } from "react-icons/io";
import { resumeImg, metacCedentialImg } from "../../images";
import "./certificates.css";
import gsap from "gsap";
const Certificates = ({ showCertificates, setShowCertificates }) => {
  const container = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  const handleHideCertificates = () => {
    const el = container.current;
    gsap.fromTo(
      el,
      {
        scale: 1,
        opacity: 1,
      },
      {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        onComplete: () => setShowCertificates(false),
      }
    );
  };

  useEffect(() => {
    const el = container.current;
    const titleEl = titleRef.current;
    const descEl = descRef.current;
    const buttonEl = buttonRef.current;
    if (showCertificates) {
      gsap.fromTo(
        el,
        {
          scale: 0,
          opacity: 0,
        },

        {
          opacity: 1,
          scale: 1,
          duration: 0.65,
        }
      );
    }

    gsap.fromTo(
      titleEl,
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 0.2,
        opacity: 1,
        scale: 1,
        duration: 0.65,
      }
    );

    gsap.fromTo(
      descEl,
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 0.2,
        opacity: 1,
        scale: 1,
        duration: 0.65,
      }
    );
    gsap.fromTo(
      buttonEl,
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "bounce",
      }
    );
  }, [showCertificates]);

  return (
    <section id="certificates" className="certificates-modal">
      <div className="certificates-content">
        <Swiper
          ref={container}
          grabCursor={true}
          effect={"creative"}
          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            stopOnLastSlide: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          speed={600}
          modules={[Autoplay, EffectCreative, Pagination, Navigation]}
          className="certificates-swiper"
        >
          <SwiperSlide>
            <div className="resume-grid">
              <div className="certificate-text-content">
                <h4 className="primary__title" ref={titleRef}>
                  Resume
                </h4>
                <p
                  className="text__muted description certificate-description"
                  ref={descRef}
                >
                  My resume highlights my skills in HTML, CSS, JavaScript, and
                  React, showcasing my ability to develop dynamic, responsive
                  web applications. It details my proficiency in frameworks like
                  React.js and Node.js, databases such as MongoDB, and tools
                  like VS Code, Figma, and Docker. The resume also covers my
                  freelance experience, key achievements, and certifications
                  from Coursera and freeCodeCamp, demonstrating my commitment to
                  continuous learning and professional growth.
                </p>
                <div className="download-button-container" ref={buttonRef}>
                  <a
                    href="/prasanth_resume.pdf"
                    download="prasanth_resume.pdf"
                    className="btn btn__primary"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="certificate-image-container">
                <img src={resumeImg} alt="Resume" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="resume-grid">
              <div className="certificate-text-content">
                <h1 className="primary__title">Meta Front-End Certification</h1>
                <p className="text__muted description certificate-description">
                  As a Meta Front-End certified developer, I have completed a
                  comprehensive program consisting of nine courses on Coursera.
                  This certification has equipped me with in-depth knowledge and
                  practical skills in HTML, CSS, JavaScript, and React.js. I am
                  proficient in building dynamic, responsive web applications
                  and have hands-on experience with modern front-end tools and
                  frameworks.
                </p>
                <div className="download-button-container">
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/TE2XQH2C7UDW"
                    className="btn btn__primary"
                  >
                    Go To
                  </a>
                </div>
              </div>
              <div className="certificate-image-container">
                <img src={metacCedentialImg} alt="Resume" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="modal-close-button" onClick={handleHideCertificates}>
          <IoIosClose size={50} />
        </button>
      </div>
    </section>
  );
};

export default Certificates;
