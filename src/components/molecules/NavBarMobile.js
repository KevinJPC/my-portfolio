import { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../atoms/Logo";
import { Navlink } from "../atoms/Navlink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { device } from "../MediaQueries";

const Container = styled.div`
    @media ${device.mobileS} {
        display: block;
    }

    @media ${device.tablet} {
        display: block;  

    }

    @media ${device.laptop} {
        display: none;
    }

    @media ${device.laptopL} {
        display: none;
    }

    width: 100%;
    min-height: 100px;
    height: auto;
    position: fixed;
    top: 0;
    background-color: rgba(rgba(0, 0, 0, 0.5));
    z-index: 1;

    button{ 
        color: #FDFFFF;
        background-color: transparent;
        border: none;
    }
    
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    backdrop-filter:saturate(100%) blur(20px);

    /* When scroll is on top hide */
    ${props => props.isOnTop === false ?
        'box-shadow: inset 0 -1px 0 0 hsla(0,0%,100%,.2);'
        : null}
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 20px;
`

const SectionContainer = styled.div`
    height: calc(50vw );
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`
export const NavbarMobile = ({ sectionActive, handleSectionActive }) => {

    const [isOnTop, setIsOnTop] = useState(true);
    const [openSections, setOpenSections] = useState(false);

    const handleScrollTop = () => {
        if (window.scrollY === 0) {
            setIsOnTop(true)
        }
        if (window.scrollY > 0) {
            setIsOnTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScrollTop());

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleScrollTop());
        };
    }, []);



    return (
        <Container isOnTop={isOnTop}>
            <NavContainer>
                <div>
                    <Logo />
                </div>
                <MenuContainer>
                    <button onClick={() => setOpenSections(!openSections)}>
                        <FontAwesomeIcon icon={faBars} size='3x' />
                    </button>
                </MenuContainer>
            </NavContainer>
            {openSections ? <SectionContainer>
                <Navlink text={'About'} active={sectionActive === 'about' ? true : false} onClick={() => handleSectionActive('about')} />
                <Navlink text={'Skills'} active={sectionActive === 'skills' ? true : false} onClick={() => handleSectionActive('skills')} />
                <Navlink text={'Work'} active={sectionActive === 'work' ? true : false} onClick={() => handleSectionActive('work')} />
                <Navlink text={'Contact'} active={sectionActive === 'contact' ? true : false} onClick={() => handleSectionActive('contact')} />
            </SectionContainer>
                :
                null
            }

        </Container>

    )
}