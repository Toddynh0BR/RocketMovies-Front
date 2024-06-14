import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 5.6rem;

display: flex;
align-items: center;
gap: 1rem;

background-color: #262529;
border-radius: 1rem;

padding: .3rem;
margin-bottom: 1rem;

> input {
background: transparent;
border: none;
outline: none;

color: #F4EDE8;
font-size: 1.6rem;
font-weight: normal;
}

input::placeholder {
font-weight: 500;
color: #948F99; 
}

svg {
color: #948F99;
margin-left: 1rem;
}
`