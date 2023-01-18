import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/icons8-twitter.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Mohd.</span>
        <span>Gumaa</span>
      </a>
      <div>
        <p>Copyright &copy; mgumaa.com {currentYear}</p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mohamed-gumaa-abdallah-mohamed-204595117/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/MohGumaa" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/gomaa2022/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://twitter.com/AbdallGumaa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="twitterIcon" />
        </a>
      </div>
    </Container>
  );
}
