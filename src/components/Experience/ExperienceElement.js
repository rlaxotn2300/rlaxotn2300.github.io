import styled from "@emotion/styled";

export const ExperienceWrapper = styled.div`
  margin-top: 5rem;
  .BigCard{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media (max-width:926px){
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
    width:50rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    display: flex;
    justify-content: space-between;
    padding:10px;
    border:1px solid #dee2e6;
    border-radius: 10px;
    background: rgb(245, 246, 255);
    @media (max-width:925px){
      width:auto;
    }

    @media (max-width:755px){
      flex-direction: column;
      align-items: center;
      gap:50px;
    }

    .academy_name{
      width:30%;
      @media (max-width:755px){
      width:auto;
      text-align: left;
    }
    }

    .academy_content{
      width:55%;
      padding:0;
      margin:0;
      @media (max-width:755px){
      width: auto;
      text-align: left;
    }
    }

    li{
      list-style:disc;
      margin-left: 1.2rem;
      @media (max-width:755px){
      font-size: 0.9rem;
      text-align: left;
      }
    }
`

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width:755px){
      font-size: 1rem;
  }
`
