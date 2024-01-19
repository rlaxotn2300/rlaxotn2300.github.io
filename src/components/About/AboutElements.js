import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  .AboutBio{
    font-family: "Poor Story", system-ui;
    font-weight: 4200;
    font-style: normal;
    text-align: center;
  }
  .tagline2{
    text-align: center;
  }
  .BigCard{
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width:926px){
      flex-direction: column;
    }
  }
`;

export const AboutTitle = styled.h2`
  font-size: larger;
`

export const Image = styled.img`
  max-width: 16rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (max-width:926px){
    max-width: 12rem;
    }
  @media (max-width:240px){
    max-width: 9rem;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
