import { styled } from "styled-components";

export const Conteiner = styled.div`
 
  display:flex;
  justify-content:center;
  gap:2rem;
`

export const CardConteiner = styled.div`
  display:flex;
  width:24%;
  height:16.2rem;
  background-color: ${props => props.theme["base-post"]};
  color: ${props => props.theme["base-title"]};
  padding:2rem;
  border-radius:0.5rem;
`

export const CardContent = styled.div`
  display:flex;
  flex-direction:column;
`
export const Header = styled.div`
 display:flex;

`