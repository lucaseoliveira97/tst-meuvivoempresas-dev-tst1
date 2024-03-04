import {fireEvent, render,screen} from '@testing-library/react'
import MenuProvider from '../../context/menuContext'
import Header from '../Header'

const mockSetOpen = jest.fn();
jest.mock("../../hooks/useMenu", ()=>({
    __esModule: true,
    default: () => {
        return({
            open:0,
            setOpen:mockSetOpen
        })
    }
}))

describe("Header", () =>{
    it("O menu deve reagir ao clicar no icone", () =>{
        render(
        <MenuProvider initial={true}>
            <Header/>
        </MenuProvider>
        )

        const menuBtn = screen.getByRole("button");
        fireEvent.click(menuBtn)

        expect(mockSetOpen).toBeCalledWith(expect.any(Function))
        expect(mockSetOpen).toBeCalledTimes(1)

    })
})