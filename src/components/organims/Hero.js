import { Button } from "../atoms/Button"
import { LogoAnimation } from "../atoms/LogoAnimation"
import { Title } from "../atoms/Title"
import { SubTitle } from "../atoms/Subtitle"
import styled from "styled-components"

const Container = styled.div`  
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 100px);
    margin-top: 100px;

    h1 {
        margin-bottom: 0.3em;
    }

    a {
        margin-top: 2em;
    }
    
`

export const Hero = ({ handleSectionActive }) => {
    return (
        <Container>
        <LogoAnimation />
            <div>
                <Title text={"Hello, I'm Kevin Pitti Castro"}/>
                <SubTitle text={'Web developer'}/>
            </div>
                <Button onClick={() => handleSectionActive('contact')}>
                    Contact me
                </Button>
        </Container>
    )
}