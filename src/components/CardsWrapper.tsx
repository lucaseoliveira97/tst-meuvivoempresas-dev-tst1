import { styled } from "styled-components";

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 187px;
    padding: 0 clamp(0rem, -6.6207rem + 17.6553vw, 4.469rem);;
    margin: 1.813rem 0;
    gap: 1.625rem 1.125rem;
    width: 100%;
    @media (max-width: ${({theme}) => theme.smBreakpoint}px) {
        flex-direction: column;
        padding: 0%;
        gap: 46px 18px;
  }
  @media (min-width:${({theme}) => theme.smBreakpoint+1}px) and (max-width: ${({theme}) => theme.mdBreakpoint}px) {
        background-color: red;
  }
`

export default CardsWrapper