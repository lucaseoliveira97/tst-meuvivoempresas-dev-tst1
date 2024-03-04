import {fireEvent, render,screen} from '@testing-library/react'
import CardsWrapper from '../CardsWrapper'
import discoveries from '../../data/discoveries'
import { Card } from '../Card/Card'
describe("CardsWrapper", () =>{
    it("Deve renderizar o componente com os cards corretamente", () =>{
        render(
            <CardsWrapper>
            {
              discoveries.map((discovery, id) =>{
                return(
                  <Card.Root key={"discovery-card-" + id}>
                    {discovery.discoveryFeature && <Card.Feature feature={discovery.discoveryFeature}/>}
                    <Card.Header cardTitle={discovery.discoveryTitle} cardSubTitle={discovery.discoveryBonus}/>
                    <Card.Content/>
                    <Card.Footer/>
                  </Card.Root>
                )
              })
            }
          </CardsWrapper>
        )
        expect(screen.getByText("200 Mega")).toBeVisible()
        expect(screen.getByText("300 Mega")).toBeVisible()
        expect(screen.getByText("600 Mega")).toBeVisible()
    })

})