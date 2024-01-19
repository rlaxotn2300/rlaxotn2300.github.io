import styled from "@emotion/styled";

export const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);
  .text{

  }
  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }
  
  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(57, 134, 250);
    }
  }
  .text {
    display: none;
    margin:0 auto;
  }

.item:hover > .text {
  display: block;
}
  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;