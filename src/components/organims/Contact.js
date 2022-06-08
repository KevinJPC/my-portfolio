import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { device } from "../MediaQueries";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 190px);
    margin-top: 100px;
    width: 100%;
    justify-content: center;

    h1 {
        margin-bottom: 0.8em;
    }

    a {
        margin-top: 55px;
    }

    p{
        text-align: center;
        color: #B2AAAA;
        font-size: calc(1em + 0.18vw);
    }

    @media ${device.mobileS} {
        p{
            width: 100%;
        }
    }

    @media ${device.tablet} {
        p{
            width: 100%;
        }

    }

    @media ${device.laptop} {
        p{
            width: 60%;
        }

    }

    @media ${device.laptopL} {
        p{
            width: 60%;
        }

    }
`

export const Contact = () => {
    return (
        <Container>
            <Title text={'Contact me'} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut scelerisque dui.
                Morbi mattis, ipsum non aliquet dignissim, sapien tellus mollis urna, vulputate pretium
                felis enim a arcu.</p>
            <Button href='mailto: kevinpitticastro@gmail.com'>
                Let's talk
            </Button>
        </Container>
    )
}