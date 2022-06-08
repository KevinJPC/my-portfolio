import { Title } from "../atoms/Title"
import styled from "styled-components"
import { Img } from "../molecules/Img"
import { device } from "../MediaQueries"

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
const ContentContainer = styled.div`
    display: flex;
    

    @media ${device.mobile} {
        flex-direction: column;
    }

    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.laptop} {
    flex-direction: row;
    }

    @media ${device.laptopL} {
    flex-direction: row;
    }
`

const TextContainer = styled.div`
    margin-right: 7em;
    p{
        color: #B2AAAA;
        font-size: calc(1em + 0.18vw);
        margin-bottom: 1em;
    }

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 100%;

    }

    @media ${device.laptop} {
        width: 80%;

    }

    @media ${device.laptopL} {
        width: 70%;

    }
`

export const About = () => {
    return (
        <Container>
            <Title text={'Who I am'} />
                <ContentContainer>

                <TextContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut scelerisque dui. Morbi mattis, ipsum non aliquet dignissim, sapien tellus mollis urna, vulputate pretium felis enim a arcu.
                    </p>
                    <p>
                        Nam rutrum dolor sed eros mattis, id facilisis orci bibendum. Nam tristique arcu eu est mollis suscipit. Nunc pharetra scelerisque aliquam.Donec elit turpis, finibus non dui et, ultrices tincidunt velit. Sed purus justo, accumsan egestas justo non, commodo bibendum diam. Nunc eu lorem elit.
                    </p>
                    <p>
                        Duis in justo hendrerit, ornare elit molestie, sagittis erat. Suspendisse eu augue sit amet libero posuere bibendum a a nibh.
                    </p>
                    <p>
                    Nam tristique arcu eu est mollis suscipit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra scelerisque aliquam.Donec elit turpis.
                    </p>
                </TextContainer>
            <div>
                <Img />
            </div>
            </ContentContainer>
        </Container>
    )
}