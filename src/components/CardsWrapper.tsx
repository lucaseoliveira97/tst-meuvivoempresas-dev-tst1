import { styled } from "styled-components";

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 187px;
    padding: 0 4.469rem;
    gap: 26px 18px;
    width: 100%;
    @media (max-width: ${({theme}) => theme.mobileBreakpoint}px) {
        flex-direction: column;
        padding: 0 10px;
  }
`

export default CardsWrapper