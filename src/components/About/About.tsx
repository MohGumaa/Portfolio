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
          <h2>💡About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I'm a Full Stack Developer with over {getYearDiff} years of experience, passionate about creating fast, scalable web applications and intuitive user experiences. I work with businesses and agencies globally to build powerful dashboards, custom websites, and cloud-integrated solutions that deliver real business value.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My technical skills span HTML5, CSS3, SASS, JavaScript, jQuery, React.js, Next.js, TypeScript, and Bootstrap on the frontend, with Node.js, Express.js, PHP, Laravel, and CodeIgniter on the backend. I'm also proficient with CMS platforms like WordPress and WooCommerce, and experienced in UI/UX research, prototyping (Figma), and REST API integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.6 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop custom dashboards for publishers and advertisers, implement keyword-based campaign logic, and optimize legacy systems for performance and maintainability. Tools like AWS, Git, Bitbucket, Docker, and Nginx support my DevOps workflow and deployment efficiency.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.8 * 1000}
          style={{ marginBottom: "2rem" }}
        >
          <p>
            My mission is to deliver clean, efficient, and modern web solutions without compromising performance, accessibility, or cross-platform compatibility.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>👨‍💻 My Technical Skills:</h3>
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
