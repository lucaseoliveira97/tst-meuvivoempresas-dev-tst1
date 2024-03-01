import { styled } from "styled-components";

export const Main = styled.main`
    width: clamp(${({theme}) => theme.mobileBreakpoint}px,82.289vw, 827px);
    margin: 3rem auto;
`