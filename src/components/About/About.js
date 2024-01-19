import React from "react";
import { ContactWrapper, Image, AboutTitle } from "./AboutElements";
import character from "../../profileImg/profile_character.png"
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
                src={character}
                alt="profile_image"
              />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <AboutTitle><strong>안녕하세요! 과정에서 깨달음을 얻는 김태수 입니다.👋🏻</strong></AboutTitle>
            </ScrollAnimation>
            <br/>
            <br/>
            <ScrollAnimation animateIn="fadeInLeft">
              <strong>팀원들과 협업 하는것을 좋아하며 좋은 대화능력을 갖추고 있습니다.</strong>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              원할한 소통을 이루기위해 고민하고,<br/>
              항상 상대방의 생각과 입장을 공감하기위해 노력합니다.<br/>
              프로젝트를 진행하며 어떻게 해야 컴포넌트의 재사용이 가능할지,<br />
              협업하는 팀원들이 좀 더 쉽게 이해할지 항상 고민을 합니다.
            </ScrollAnimation>
            <br /><br />
            <ScrollAnimation animateIn="fadeInLeft">
              <strong>끝없이 성장하는 개발자가 되고싶습니다.</strong>
              <br /><br />
              새로운 라이브러리, 프레임워크 등 계속해서 발전하고 있는 개발시장에서<br />
              유연하게 적응하며 새로운 트렌드를 쉽게 받아들일 수 있고,<br/>
              누군가는 저에게 의지할 수 있으며,<br/>
              함께 작업하고 싶은 개발자가 꼭 되고 싶습니다.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
