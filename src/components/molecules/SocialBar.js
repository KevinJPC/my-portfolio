import { SocialIcon } from "../atoms/SocialIcon";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { device } from "../MediaQueries";

const Bar = styled.div`
    background-color: #B2AAAA;
    width: 0.1em;
    height: 6.875em;
    margin-top: 1.5em;
`

const Container = styled.div`

    @media ${device.mobileS} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
    }

    @media ${device.laptopL} {
        display: flex;
    }

    margin-left: 3em;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    a{
        margin-top: 1.5em;
    }
`

export const SocialBar = () => {
    return (
        <Container>
            <SocialIcon href='mailto: kevinpitticastro@gmail.com' alt='Email icon'>
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </SocialIcon>

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
            <Bar />
        </Container>

    )
}