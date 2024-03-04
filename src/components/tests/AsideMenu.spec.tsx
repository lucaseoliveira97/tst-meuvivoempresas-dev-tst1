import {fireEvent, render,screen} from '@testing-library/react'
import AsideMenu from '../AsideMenu'
import MenuProvider from '../../context/menuContext'
describe("AsideMenu", () =>{
    it("Deve renderizar o menu corretamente quando estiver expandido", () =>{
        render(
        <MenuProvider initial={true}>
            <AsideMenu/>
        </MenuProvider>
        )
        expect(screen.getByText("Meu Vivo empresas")).toBeVisible()
        expect(screen.getByText("Meu Vivo")).toBeVisible()
    })

    it("Nao deve renderizar o menu quando estiver colapsado", () =>{
        render(
        <MenuProvider initial={false}>
            <AsideMenu/>
        </MenuProvider>
        )
        expect(screen.getByText("Meu Vivo empresas")).not.toBeVisible()
        expect(screen.getByText("Meu Vivo")).not.toBeVisible()
    })

    it("Deve fechar o menu quando clicar fora dele", () =>{
        render(
        <MenuProvider initial={true}>
            <AsideMenu/>
        </MenuProvider>
        )
        const menuWrapper  = screen.getAllByRole("generic")[1];
        fireEvent.click(menuWrapper)
        expect(screen.getByText("Meu Vivo empresas")).not.toBeVisible()
        expect(screen.getByText("Meu Vivo")).not.toBeVisible()
    })

    it("Nao deve fechar quando clicar no bloco de menu", () =>{
        render(
        <MenuProvider initial={true}>
            <AsideMenu/>
        </MenuProvider>
        )

        fireEvent.click(screen.getByRole("navigation"))
        expect(screen.getByText("Meu Vivo empresas")).toBeVisible()
        expect(screen.getByText("Meu Vivo")).toBeVisible()
    })
})