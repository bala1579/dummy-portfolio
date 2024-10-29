/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/work2.jpg";
// import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Task manager App 🎉",
    description:
      "I made this task manager project in react used some npm packages like react router dom and json server for dummy server.",
    url: "https://github.com/bala1579/task-manager",
  },
  {
    title: "Portfolio site in Html,Css, Javascript",
    // description:
    //   "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    description:
      "Hi, this is my first portfolio website . This is simple site, I made this site with the help of  Html , Css , Javascript ",

    // url: "https://github.com/microsoft/web-dev-for-beginners",
    url: "https://bala14774.github.io/",
  },
  {
    title: "My Portfolio Site in React",
    description:
      "Created this portfolio in React Single page application. I use some npm packages in like react icons , and  Email js library. Includes my experience and design abilities.",
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    url: "https://bala1579.github.io/newportfolio/",
  },
  {
    title: "color change project",
    description:
      "This is simple project for change  the div color  and text on the button click .",
    url: "https://github.com/bala1579/colorchange",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          marginLeft: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "40%",
            alignSelf: "center",
            borderRadius: "20px",

            overflow: "hidden",
          }}
        >
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
