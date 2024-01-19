import React from "react";
import { ExperienceWrapper, Card, Title } from "./ExperienceElement";
import ScrollAnimation from "react-animate-on-scroll";
function Experience() {
  return (
    <ExperienceWrapper id="experience">
      <div className="Container">
      <div className="SectionTitle">Experience</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Card>
              <div className="academy_name">
                <Title>그린컴퓨터 학원</Title>
                <div>2021.02 ~ 2021.06</div>
              </div>
              <div className="academy_content">
                <Title>디지털디자인(웹디자인,웹퍼블리셔)</Title>
                <ul>
                  <li>HTML,CSS 기초 훈련</li>
                  <li>JavaScript 기초 훈련</li>
                  <li>포토샵, 일러스트 기초 작업능력</li>
                  <li>media query의 따른 style 설정 </li>
                  <li>사용자경험, 니즈를 분석하여 정보설계, UI설계, 화면설계</li>
                </ul>
              </div>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft">
          <Card>
              <div className="academy_name">
                <Title>코드스테이츠 45기</Title>
                <div>2023.04 ~ 2023.10</div>
              </div>
              <div className="academy_content">
                <Title>소프트웨어 엔지니어(프론트엔드)</Title>
                <ul>
                  <li>React의 기초(SPA, Ajax, JSX, 고차함수 등)</li>
                  <li>상태관리, 스레드 최적화 등을 위한 라이브러리 훈련</li>
                  <li>EffectHook을 통한 CustomHook 관리 능력</li>
                  <li>팀프로젝트를 통한 커뮤니케이션 능력, 문제해결 능력 향상</li>
                  <li>자기 주도적 학습 능력 향상</li>
                </ul>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;