import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display:flex;
  padding: 7rem 0 3rem 0rem;
  justify-content:center;
  gap:1rem;

  input {
    background: ${props => props.theme["base-input"]};
    color:  ${props => props.theme["base-label"]};
    width:50%;
    height: 3.2rem;
    border:none;
    border-radius:0.5rem;
    padding-left:2rem;
  }
`
