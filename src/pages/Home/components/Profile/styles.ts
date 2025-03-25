import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center; 
  margin-top:-4rem;
`

export const ProfileContainer = styled.div`
  color: white;
  border-radius: 10px;
  display: flex;
  background-color:blue;
  width:50%;
  height:13.25rem;
`

export const ProfileContent = styled.div`
  padding: 2rem;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box; /* Evita que o padding aumente o tamanho */
  display: flex;
  gap:2rem;
  
 
 section{
  display: flex;
  flex-direction: column; /* Organiza os elementos verticalmente */
  gap: 1rem; /* Define o espaçamento vertical */
 

  a {
  color: white; /* Ou outra cor visível */
  text-decoration: none;
  
}
 }
`

export const Info = styled.div`
  display:flex;
  justify-content:flex-start;
  gap:1rem;

  span { 
    display:flex;
    align-items:center;
    gap:0.5rem;
  }
`

export const Bio = styled.div`
  display:flex;
  justify-content:space-between;
 
`