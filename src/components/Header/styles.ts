import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["base-profile"]};
  /* padding: 2.5rem 0 7.5rem 0; */
`;


// 
export const HeaderContent = styled.div`

  width:100%;
  display:flex;
  justify-content:space-between;
  background-color:white;
  align-items:center;
  padding: 1.875rem 0 1.875rem 0;


  img[alt="logo"] {
    width: 9.375rem;
    height: 6.25rem;
  }

`;