import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";
import image from "../images/zoom.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a UI/UX student studying at kuvempu University. I enjoy creating unique and simplistic user interfaces in creative ways.";

// const skillsList = [
//   { "myskill ": "Web design" },
//   { "myskill ": "Backend Devlopment" },
//   { "myskill ": "Inclusive design" },
//   { "myskill ": "Focus group testing" },
//   { "myskill ": "Mobile user interfaces" },
//   { "myskill ": "Graphic design" },
// ];

let skillsList = [
  "Web design",
  "Backend Devlopment",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Mern Stack Devlopment",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

/**
 * Sort description that expands on your title on the Home component.
 */

const About = () => {
  /**
   * List of some of skills or technologies you work on, are learning,
   * passionate about, or enjoy,
   */

  /**
   * Use this to give more information about what you are passionate about,
   * how you best work, or even a quote. This will help someone learn more
   * about you on a professional level.
   */

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "transparent",

          width: "50%",
          padding: "5rem",
          margin: "4rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
