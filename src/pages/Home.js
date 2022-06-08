import styled from "styled-components"
import { Navbar } from "./../components/molecules/NavBar"
import { PageBar } from "./../components/molecules/PageBar"
import { SocialBar } from "./../components/molecules/SocialBar"
import { Hero } from "./../components/organims/Hero"
import { About } from "./../components/organims/About"
import { useState, useRef, useEffect } from "react"
import { useInView } from "react-cool-inview";
import { Skills } from "../components/organims/Skills"
import { Work } from "../components/organims/work/Work"
import { Contact } from "../components/organims/Contact"
import { Footer } from "../components/molecules/Footer"
import { device } from './../components/MediaQueries'
import { NavbarMobile } from "../components/molecules/NavBarMobile"

const Container = styled.div`
    /* background-color: #000000;
    font-family: 'Noto Sans', sans-serif; */
`

const ContentContainer = styled.div`

    @media ${device.mobileS} {
        width: 95%;
    }

    @media ${device.tablet} {
    width: 90%;
    }

    @media ${device.laptop} {
        width: 80%;
    }

    @media ${device.laptopL} {
    width: 55%;
    }

    color: white;
    margin: auto;

    /* section {
    scroll-snap-align: start;
    } */
`

export const Home = () => {

    const [sectionActive, setSectionActive] = useState('hero')
    const heroRef = useRef();
    const aboutRef = useRef();
    const skillsRef = useRef();
    const workRef = useRef();
    const contactRef = useRef();

    const { observe: heroObserve, inView: heroIsView } = useInView({ threshold: 0.5 });
    const { observe: aboutObserve, inView: aboutIsView } = useInView({ threshold: 0.5 });
    const { observe: skillsObserve, inView: skillsIsView } = useInView({ threshold: 0.5 });
    const { observe: workObserve, inView: workIsView } = useInView({ threshold: 0.5 });
    const { observe: ContactObserve, inView: contactIsView } = useInView({ threshold: 0.5 });


    useEffect(() => {
        if (heroIsView) setSectionActive('hero')
        if (aboutIsView) setSectionActive('about')
        if (skillsIsView) setSectionActive('skills')
        if (workIsView) setSectionActive('work')
        if (contactIsView) setSectionActive('contact')
    }, [heroIsView, aboutIsView, skillsIsView, workIsView, contactIsView])

    const handleSectionActive = (sectionActive) => {
        switch (sectionActive) {
            case 'hero':
                handleScrollTo(heroRef, -100);
                break;
            case 'about':
                handleScrollTo(aboutRef, -100);
                break;
            case 'skills':
                handleScrollTo(skillsRef, -120);
                break;
            case 'work':
                handleScrollTo(workRef, -110);
                break;
            case 'contact':
                handleScrollTo(contactRef, -100);
                break;
            default:
        }
        setSectionActive(sectionActive)
    }

    const handleScrollTo = (ref, yOffset) => {
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const setRef = (el, observe, ref) => {
        observe(el);
        ref.current = el;
    }

    return (
        <Container>
            <Navbar handleSectionActive={handleSectionActive} sectionActive={sectionActive} />
            <NavbarMobile handleSectionActive={handleSectionActive} sectionActive={sectionActive} />
            <SocialBar />
            <PageBar handleSectionActive={handleSectionActive} sectionActive={sectionActive} />
            <ContentContainer>
                <section ref={el => setRef(el, heroObserve, heroRef)} >
                    <Hero handleSectionActive={handleSectionActive} />
                </section>
                <section ref={el => setRef(el, aboutObserve, aboutRef)}>
                    <About />
                </section>
                <section ref={el => setRef(el, skillsObserve, skillsRef)}>
                    <Skills />
                </section>
                <section ref={el => setRef(el, workObserve, workRef)}>
                    <Work />
                </section>
                <section ref={el => setRef(el, ContactObserve, contactRef)}>
                    <Contact />
                </section>
            </ContentContainer>
            <Footer />
        </Container>
    )
}