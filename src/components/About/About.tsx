import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import githubIcon from "../../assets/icons8-github.svg";
import typescript from "../../assets/typescript-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import php from "../../assets/php.svg";
import wordpressIcon from "../../assets/icons8-wordpress.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import MyImg from "../../assets/mine.jpg";

export function About() {
  const currentYear = new Date();
  const start = new Date("2020-09-01");

  const getYearDiff = Math.abs(currentYear.getFullYear() - start.getFullYear());

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I'm a front-end web developer with +{getYearDiff} years of
            experience. I work with agencies across the globe to create
            high-performance & rich interactive websites that work across all
            platforms and devices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I have programming expertise such as HTML5, CSS3, SASS, BootStrap,
            JavaScript, jQuery, ReactJS, MySQL, WordPress, PHP, Codeigniter, and
            Laravel, and have significant exposure to UIUX research.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.6 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Proficient in developing databases, creating user interfaces,
            writing and testing codes, troubleshooting simple/complex issues,
            and implementing new features based on user feedback.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.8 * 1000}
          style={{ marginBottom: "2rem" }}
        >
          <p>
            I am looking for creative ways to push the boundaries of website
            front-end code without compromising on browser support and
            performance. Also, I am pursuing becoming a full-stack Developer.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>My Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={htmlIcon} alt="HTML5" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={cssIcon} alt="CSS3" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={sassIcon} alt="sassIcon" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={bootstrapIcon} alt="BootStrap" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={wordpressIcon} alt="wordpressIcon" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
              <img src={typescript} alt="typescript" className="rounded" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
              <img src={githubIcon} alt="github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.0 * 1000}>
              <img src={php} alt="php" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={MyImg} alt="Mohd Gumaa" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
