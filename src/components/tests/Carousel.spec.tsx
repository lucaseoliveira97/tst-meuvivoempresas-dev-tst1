import {fireEvent, render,screen} from '@testing-library/react'
import Carousel from '../Carousel'
import { technologies } from '../../data/technologies'
describe("Carousel", () =>{
    it("Deve renderizar o componente de carrossel corretamente, isso é exibir o primeiro card", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        expect(screen.getByText("simCard")).toBeVisible()
    })
    it("Deve renderizar o segundo item do carrossel", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        const rightArrow = screen.getAllByRole("navigation")[1]
        fireEvent.click(rightArrow)
        expect(screen.getByText("Esim")).toBeVisible()
    })
    it("Deve renderizar o terceiro item do carrossel", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        const rightArrow = screen.getAllByRole("navigation")[1]
        fireEvent.click(rightArrow)
        fireEvent.click(rightArrow)
        expect(screen.getByText("Tecnologia")).toBeVisible()
    })
    it("Nao deve ir para o proximo item (quarto) pois nao existe", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        const rightArrow = screen.getAllByRole("navigation")[1]
        fireEvent.click(rightArrow)
        fireEvent.click(rightArrow)
        fireEvent.click(rightArrow)
        expect(screen.getByText("Tecnologia")).toBeVisible()
    })

    it("Deve retornar ao segundo item apois chegar ao terceiro e retornar", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        const [leftArrow, rightArrow] = screen.getAllByRole("navigation")
        fireEvent.click(rightArrow)
        fireEvent.click(rightArrow)
        fireEvent.click(rightArrow)
        fireEvent.click(leftArrow)
        expect(screen.getByText("Esim")).toBeVisible()
    })

    it("Nao deve ir ao item anterior pois nao existe", () =>{
        render(
            <Carousel itens={technologies}/>
        )
        const leftArrow = screen.getAllByRole("navigation")[0]
        fireEvent.click(leftArrow)
        expect(screen.getByText("simCard")).toBeVisible()
    })
    
})