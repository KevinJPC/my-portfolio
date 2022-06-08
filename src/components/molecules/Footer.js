import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { SocialIcon } from "../atoms/SocialIcon";
import { device } from "../MediaQueries";


const Container = styled.div`
    color: #B2AAAA;
    text-align: center;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerSocials = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    margin-bottom: 2em;

    @media ${device.mobileS} {
        display: flex;
    }

    @media ${device.tablet} {
        display: flex;
        width: 50%;    

    }

    @media ${device.laptop} {
        display: none;
    }

    @media ${device.laptopL} {
        display: none;
    }
`

export const Footer = () => {
    return (
        <Container>
            <ContainerSocials>
            <SocialIcon href='https://github.com/KevinJPC' alt='Github icon'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
            </SocialIcon>

            <SocialIcon href='https://www.instagram.com/kevinpitticastro/' alt='Instagram icon'>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
            </SocialIcon>

            <SocialIcon href='https://twitter.com/_kevinpitti' alt='Twitter icon'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
            </SocialIcon>

            <SocialIcon href='https://www.linkedin.com/in/kevinpitti/' alt='Linkedin icon'>
                <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
            </SocialIcon>
            </ContainerSocials>
            <p>Designed & Developed by Kevin Pitti</p>
        </Container>
    )
}