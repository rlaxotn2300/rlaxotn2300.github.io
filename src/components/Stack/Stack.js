import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "../About/AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function Stack() {
  return (
    <ContactWrapper id="stack">
      <div className="Container">
        <div className="SectionTitle">Stack</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
        </ScrollAnimation>
          <div className="AboutBio">
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default Stack;
