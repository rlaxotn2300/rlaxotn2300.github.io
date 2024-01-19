import React from "react";
import { FaGithub,FaBloggerB } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import { SocialContainer} from "./FixSocialIconElements";

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://blog.naver.com/rlaxotn2300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBloggerB />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/rlaxotn2300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
