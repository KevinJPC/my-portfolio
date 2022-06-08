import styled from "styled-components";
import { ControlIcon } from "./../atoms/ControlIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'
import { device } from "../MediaQueries";

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
    
    margin-right: 3em;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 10em;
    bottom: calc((100vh - 10em) / 2);
    right: 0;
    i{
        margin-top: 0.6em;
        /* font-size: calc(0.7em + 0.3vw); */
    }
`

export const PageBar = ({ sectionActive, handleSectionActive }) => {
    return (
        <Container>
            <ControlIcon alt='Circle icon' onClick={() => handleSectionActive('hero')}>
                <FontAwesomeIcon icon={sectionActive === 'hero' ? faCircleSolid : faCircle} size='lg' />
            </ControlIcon>

            <ControlIcon alt='Circle icon' onClick={() => handleSectionActive('about')}>
                <FontAwesomeIcon icon={sectionActive === 'about' ? faCircleSolid : faCircle} size='lg' />
            </ControlIcon>

            <ControlIcon alt='Circle icon' onClick={() => handleSectionActive('skills')}>
                <FontAwesomeIcon icon={sectionActive === 'skills' ? faCircleSolid : faCircle} size='lg' />
            </ControlIcon>

            <ControlIcon alt='Circle icon' onClick={() => handleSectionActive('work')}>
                <FontAwesomeIcon icon={sectionActive === 'work' ? faCircleSolid : faCircle} size='lg' />
            </ControlIcon>

            <ControlIcon alt='Circle icon' onClick={() => handleSectionActive('contact')}>
                <FontAwesomeIcon icon={sectionActive === 'contact' ? faCircleSolid : faCircle} size='lg' />
            </ControlIcon>
        </Container>
    )
}