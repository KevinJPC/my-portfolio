import styled from "styled-components";
import photo from './../../assets/img/photo.jpg'
import { device } from "../MediaQueries";
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    * {
        border-radius: 0.5em;
    }

    @media ${device.mobileS} {
        img{
        width: 50%;
    }
    }

    @media ${device.tablet} {
        img{
        width: 40%;
    }
    }

    @media ${device.laptop} {
        img{
        width: 100%;
    }
    }

    @media ${device.laptopL} {
        img{
        width: 100%;
    }
    }
`

export const Img = () => {
    return (
        <Container>

                <img src={photo} alt='personal photo' />
   
        </Container>

    )
}