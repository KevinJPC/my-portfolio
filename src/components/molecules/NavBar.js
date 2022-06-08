import { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../atoms/Logo";
import { Navlink } from "../atoms/Navlink";
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
    
    justify-content: space-between;
    width: 100%;
    height: 100px;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: rgba(rgba(0, 0, 0, 0.5));
    padding-right: 20px;
    padding-left: 20px;
    z-index: 1;
    
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    backdrop-filter:saturate(100%) blur(20px);

    /* When scroll is on top hide */
    ${props => props.isOnTop === false ?
    'box-shadow: inset 0 -1px 0 0 hsla(0,0%,100%,.2);'
    : null }
`

const SectionContainer = styled.div`
    width: 30%;
    max-width: 500px;
    min-width: 320px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Navbar = ({ sectionActive, handleSectionActive }) => {

    const [isOnTop, setIsOnTop] = useState(true);

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
            <div>
                <Logo />
            </div>
            <SectionContainer>
                <Navlink text={'About'} active={sectionActive === 'about' ? true : false} onClick={() => handleSectionActive('about')}/>
                <Navlink text={'Skills'} active={sectionActive === 'skills' ? true : false} onClick={() => handleSectionActive('skills')}/>
                <Navlink text={'Work'} active={sectionActive === 'work' ? true : false} onClick={() => handleSectionActive('work')}/>
            </SectionContainer>
            <div>
                <Navlink text={'Contact'} active={sectionActive === 'contact' ? true : false} onClick={() => handleSectionActive('contact')}/>
            </div>
        </Container>

    )
}