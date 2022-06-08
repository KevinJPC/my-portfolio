import styled from "styled-components";
import { TechnologyLogo } from "../atoms/TechnologyLogo";
import { Title } from "../atoms/Title";
//technologies logos
import HtmlLogo from "./../../assets/img/technologies/html5.svg"
import CssLogo from "./../../assets/img/technologies/css3.svg"
import JsLogo from "./../../assets/img/technologies/js.svg"
import ReactLogo from "./../../assets/img/technologies/react.svg"
import NodeLogo from "./../../assets/img/technologies/node.svg"
import ExpressLogo from "./../../assets/img/technologies/expressjs.svg"
import MySqlLogo from "./../../assets/img/technologies/mysql.svg"
import MongoDBLogo from "./../../assets/img/technologies/mongodb.svg"
import { device } from "../MediaQueries";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 100px);
    height: auto;
    margin-top: 100px;

    h1{
        text-align: start;
        margin-bottom: 0.8em;
    }
`

const TextContainer = styled.div`
    margin-bottom: 7em;
    p{
        color: #B2AAAA;
        font-size: calc(1em + 0.18vw);
    }
`

const RectangleTitle = styled.div`
    width: 100%;
    background: rgb(6,66,102);
    background: linear-gradient(111deg, rgba(6,66,102,1) 35%, rgba(4,99,120,1) 65%);
`

const SideContainer = styled.div`
    margin-bottom: 6em;
    h1{
        padding: 0.3em;
        text-align: center;
        font-size: calc(1em + 0.7vw);
    }
`

const TecnologiesContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 4em auto 0 auto;

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 80%;
    }

    @media ${device.laptop} {
        width: 80%;
    }

    @media ${device.laptopL} {
        width: 80%;
    }
`

export const Skills = () => {
    return (

        <Container>
        <Title text={'What can I do'}/>
        <TextContainer>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut scelerisque dui. Morbi mattis, ipsum non aliquet dignissim, sapien tellus mollis urna, vulputate pretium felis enim a arcu:
            </p>
        </TextContainer>

        <SideContainer>
            <RectangleTitle>
                <Title text={'Front-end'}/>
            </RectangleTitle>
            <TecnologiesContainer>
                <TechnologyLogo src={HtmlLogo} alt='html5 logo'/>
                <TechnologyLogo src={CssLogo} alt='css3 logo'/>
                <TechnologyLogo src={JsLogo} alt='js logo'/>
                <TechnologyLogo src={ReactLogo} alt='react logo'/>
            </TecnologiesContainer>
        </SideContainer>

        <SideContainer>
            <RectangleTitle>
                <Title text={'Back-end'}/>
            </RectangleTitle>
            <TecnologiesContainer>
                <TechnologyLogo src={NodeLogo} padding alt='node logo'/>
                <TechnologyLogo src={MySqlLogo} padding alt='mysql logo'/>
                <TechnologyLogo src={MongoDBLogo} alt='mongo logo'/>
            </TecnologiesContainer>
        </SideContainer>
        </Container>

    )

}

