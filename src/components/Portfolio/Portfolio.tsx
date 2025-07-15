import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://Kalima.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Kalima.ai</h3>
              <p>
                Developed a full marketing site with a custom WordPress theme and built React dashboards for publishers, advertisers, and admins. Engineered a lightweight, dynamic keyword highlight script tied to backend APIs enabling zero intrusive monetization with customizable campaign controls and fast integration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>BootStrap</li>
                <li>WordPress</li>
                <li>React JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://jubna.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Jubna</h3>
              <p>
                Built a fully custom WordPress theme for Jubna’s main site and developed a tailored news dashboard for content partners. The dashboard featured full customization options for managing articles, placements, and traffic reports. Assisted the client with integrating ad scripts across publisher websites to ensure seamless monetization and campaign performance. Played a key role in supporting one of MENA's leading native advertising platforms.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>BootStrap</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://sureview.tv/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sureview.tv</h3>
              <p>
                Developed a fully customized WordPress frontend with a bespoke theme for Sureview.tv. Built a new dashboard from scratch without using frontend frameworks, tailored specifically for publishers and admin roles. Contributed to debugging and optimizing legacy systems, and integrated RESTful APIs for managing campaigns, content, and user permissions. Streamlined advertiser workflows and improved platform stability.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>BootStrap</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.leyaqati.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Leyaqati (E‑commerce / Lead‑Gen)</h3>
              <p>
                Developed a custom e-commerce and lead-generation site using CodeIgniter. Built React dashboards for managing leads, orders, and partner tracking. Integrated APIs for real-time data and optimized user journeys for maximum conversion.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>PHP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://cryptoNewsLand.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CryptoNewsLand News Blog</h3>
              <p>
                Developed custom WordPress news themes and integrated automated PR/news feed pipelines. Structured content for improved readability and SEO, delivering dynamic news aggregation platforms with clean and responsive design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://CoinFutura.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CoinFutura News Blog</h3>
              <p>
                Developed custom WordPress news themes and integrated automated PR/news feed pipelines. Structured content for improved readability and SEO, delivering dynamic news aggregation platforms with clean and responsive design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://cryptoFrontNews.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CryptoFrontNews News Blog</h3>
              <p>
                Developed custom WordPress news themes and integrated automated PR/news feed pipelines. Structured content for improved readability and SEO, delivering dynamic news aggregation platforms with clean and responsive design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>BootStrap</li>
                <li>JS</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://realresearcher.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real Research</h3>
              <p>
                Built a custom WordPress blog theme and dashboard for Real Research Media. Enabled survey announcements, automated result publishing, and insight-driven content workflows.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>BootStrap</li>
                <li>JS</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="http://vision-loop.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VISION-LOOP MARKETING – FZCO</h3>
              <p>
                Built a content-rich client showcase portal using a custom WordPress theme. Styled rich media project layouts and optimized site performance and accessibility.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://print-wall.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Print Wall</h3>
              <p>
                Developed a WordPress site for GreenRoad’s PrintWall technology, showcasing vertical green wall solutions and benefits with custom content flows.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.print-o.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>PRINT-O</h3>
              <p>
                Built a Next.js marketplace with Tailwind CSS for printer rentals. Developed dynamic UI flows for plan selection and bookings, ensuring responsive performance and intuitive UX.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>tailwindcss</li>
                <li>NextJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://digitalforensicsdubai.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Digital Forensics Dubai</h3>
              <p>
                Developed a custom WordPress site presenting forensic solutions and partners. Created modular content blocks to highlight services and maintain brand consistency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://mgtadbeer.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mountain Gate Tadbeer</h3>
              <p>
                Created a custom WordPress theme for a UAE staffing firm specializing in hiring domestic workers, including maids, nannies, housekeepers, caregivers, private nurses, cooks, and drivers. Structured service pages by nationality and role to clearly highlight professional recruitment offerings. Integrated information and workflows for government services such as new visa applications, visa renewals, and visa cancellations, ensuring a comprehensive staffing and immigration support platform.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://thenewscrypto.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Thenewscrypto News Blog</h3>
              <p>
                Developed custom WordPress news themes and integrated automated PR/news feed pipelines. Structured content for improved readability and SEO, delivering dynamic news aggregation platforms with clean and responsive design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>BootStrap</li>
                <li>WordPress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
