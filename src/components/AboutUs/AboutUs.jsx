import styles from "./AboutUs.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from 'react'
import { Tilt } from 'react-tilt'

export const AboutUs = ({ ...props }) => {
  return (
    <div className={styles["about-us"]}>
      <Header></Header>
      <div className={styles["mainaboutus"]}>
        <img className={styles["image-27"]} src="image-27.png" />
        <svg
          className={styles["rectangle-6"]}
          width="1527"
          height="766"
          viewBox="0 0 1527 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1527V766H0V0Z" fill="url(#paint0_linear_19_72)" />
          <defs>
            <linearGradient
              id="paint0_linear_19_72"
              x1="763.5"
              y1="0"
              x2="763.5"
              y2="766"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FED663" stopOpacity="0.01" />
              <stop offset="0.8125" stopColor="#B43F25" stopOpacity="0.17" />
              <stop offset="1" stopColor="#14151A" stopOpacity="0.63" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles["about-us2"]}>About Us</div>
      </div>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div className={styles["ourmission"]}>
        <svg
          className={styles["rectangle-14"]}
          width="1243"
          height="610"
          viewBox="0 0 1243 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4002 24.3C1.4002 11.128 12.0782 0.45 25.2502 0.45H1217.75C1230.92 0.45 1241.6 11.128 1241.6 24.3V585.089C1241.6 598.261 1230.92 608.939 1217.75 608.939H25.2502C12.0782 608.939 1.4002 598.261 1.4002 585.089V24.3Z"
            fill="#111B4C"
            fillOpacity="0.27"
            stroke="#6145B0"
            strokeWidth="0.9"
          />
        </svg>

        <div className={styles["our-mission-content-and-image"]}>
          <div className={styles["ourmissioncontent"]}>
            <div className={styles["our-mission"]}>Our Mission</div>

            <div
              className={
                styles[
                  "our-team-is-driven-by-a-passion-for-cultural-exchange-and-understanding--our-objective-is-to-create-an-immersive-online-platform-that-enables-people-to-experience-and-connect-with-different-cultures-and-traditions-worldwide-in-an-affordable-and-accessible-way--our-project-seeks-to-promote-cross-cultural-understanding-and-create-a-sense-of-global-community-through-personalized-and-engaging-experiences-that-include-virtual-tours--immersive-videos--pictures--and-various-events--we-believe-that-our-project-can-benefit-people-who-may-not-have-the-opportunity-to-travel-or-learn-about-different-cultures-due-to-physical--financial--or-other-limitations-"
                ]
              }
            >
              Our team is driven by a passion for cultural exchange and
              understanding. Our objective is to create an immersive online
              platform that enables people to experience and connect with
              different cultures and traditions worldwide in an affordable and
              accessible way. Our project seeks to promote cross-cultural
              understanding and create a sense of global community through
              personalized and engaging experiences that include virtual tours,
              immersive videos, pictures, and various events. We believe that
              our project can benefit people who may not have the opportunity to
              travel or learn about different cultures due to physical,
              financial, or other limitations.
            </div>
          </div>

          <img className={styles["image-34"]} src="image-34.png" />
        </div>
      </div>
      </Tilt>

      

      <div className={styles["ourteam"]}>
        <svg
          className={styles["rectangle-17"]}
          width="1243"
          height="503"
          viewBox="0 0 1243 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4002 24.6888C1.4002 11.5168 12.0782 0.838794 25.2502 0.838794H1217.75C1230.92 0.838794 1241.6 11.5168 1241.6 24.6888V477.967C1241.6 491.139 1230.92 501.817 1217.75 501.817H25.2502C12.0782 501.817 1.4002 491.139 1.4002 477.967V24.6888Z"
            fill="#111B4C"
            fillOpacity="0.27"
            stroke="#6145B0"
            strokeWidth="0.9"
          />
        </svg>

        <div className={styles["ourteamcontent"]}>
          <div className={styles["our-team"]}>Our Team</div>

          <div className={styles["people"]}>
            <div className={styles["tony"]}>
              <div className={styles["tony-thomas"]}>
                Tony <br />
                Thomas
              </div>

              <img className={styles["image-33"]} src="image-33.png" />
            </div>

            <div className={styles["megha"]}>
              <div className={styles["megha-karn"]}>
                Megha
                <br /> Karn
              </div>

              <img
                className={styles["img_20220721_153551-2"]}
                src="img_20220721_153551-2.png"
              />
            </div>

            <div className={styles["aryan"]}>
              <div className={styles["aryan-gupta"]}>
                Aryan <br />
                Gupta
              </div>

              <img className={styles["_356059-1"]} src="_356059-1.png" />
            </div>

            <div className={styles["deepak"]}>
              <div className={styles["deepak-thappa"]}>
                Deepak
                <br />
                Thappa
              </div>

              <img className={styles["image-32"]} src="image-32.png" />
            </div>

            <div className={styles["divyansh"]}>
              <div className={styles["divyansh-kaushal"]}>
                Divyansh
                <br />
                Kaushal
              </div>

              <img className={styles["image-31"]} src="image-31.png" />
            </div>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};


export default AboutUs;