import { useState } from "react";
import styled from "styled-components";
import { ControlIcon } from "../atoms/ControlIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'
import { device } from "../MediaQueries";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 6em;
    width: 100%;
    color: #B2AAAA;

    @media ${device.mobileS} {
        font-size: calc(0.6em + 0.1vw);
    }

    @media ${device.tablet} {
        font-size: calc(0.8em + 0.1vw);
    }

    @media ${device.laptop} {
        font-size: calc(1em + 0.1vw);
    }

    @media ${device.laptopL} {
        font-size: calc(0.85em + 0.1vw);
    }    
`

const ProjectContainer = styled.video`
    cursor: pointer;

    @media ${device.mobileS} {
        width: 100%;
        align-self: center;
    }

    @media ${device.tablet} {
    width: 90%;
    align-self: flex-${props => props.align};
    }

    @media ${device.laptop} {
        width: 90%;
        align-self: flex-${props => props.align};
    }

    @media ${device.laptopL} {
    width: 60%;
    align-self: flex-${props => props.align};
    }

    border-radius: 1em;
    border: 1px solid #B2AAAA;
`
const EditorContainer = styled.div`
    /* min-width: 52.5em;
    width: 60%;
    height: 29.7em; */

    @media ${device.mobileS} {
        width: 100%;
        align-self: center;
    }

    @media ${device.tablet} {
    width: 90%;
    align-self: flex-${props => props.align};
    }

    @media ${device.laptop} {
        width: 90%;
        align-self: flex-${props => props.align};
    }

    @media ${device.laptopL} {
    width: 60%;
    align-self: flex-${props => props.align};
    }

    border-radius: 1em;
    border: 1px solid #B2AAAA;
`

const EditorControlls = styled.div`
    position: relative;
    width: 100%;
    height: 5em;
    display: flex;
`

const Border = styled.div`
    border-bottom: 1px solid #B2AAAA;
    width: 100%;
`
const CollapseControls = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0 2em 0 1em;
    position: absolute;
`

const CollapseIcon = styled.div`
    color: ${props => props.color};
    margin: 0 0.5em;
    font-size: 0.6em;
    cursor: pointer;

`

const Nav = styled.div`
    position: absolute;
    border: 1px solid #B2AAAA;
    border-bottom: 1px solid #000;
    border-radius: 0.5em 0.5em 0 0;
    background-color: #000;
    height: 85%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    margin: 0 0 0 10em;
    
`

const CodeContainer = styled.div`
    width: 100%;
    height: calc(100% - 5em);
    display: flex;
`

const LineNumber = styled.div`
    padding-top: 0.5em;
    width: 7%;
    height: 100%;
    border-radius: 0 0 0 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 100%;
        text-align: center;
        line-height: 1.9em;

    }
    
    /* 4B4B4B */
`

const TextContainer = styled.div`
    padding-top: 0.5em;
    width: 93%;
    height: 100%;
    color: #FDFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 90%;
        line-height: 1.9em;
        margin-bottom: 1.9em;
        color: ${props => props.color}
    }
    
`

const Span = styled.span`
    color: ${props => props.color};
`

const Anchor = styled.a`
    color: ${props => props.color};
    text-decoration: none;

`

export const Project = ({ projectDemo, align, projectName, projectDescription, projectTechnologies, projectUrl, projectRepository, ...props }) => {

    const [viewDetails, setViewDetails] = useState(false);

    return (
        <Container>

            {!viewDetails ?
                <ProjectContainer align={align} onClick={() => setViewDetails(true)} {...props} autoPlay loop playsInline muted>
                    <source src={projectDemo} type="video/mp4" />
                </ProjectContainer>
                :
                <EditorContainer align={align}>
                    <EditorControlls>
                        <Border />

                        <CollapseControls>

                            <CollapseIcon onClick={() => setViewDetails(false)}>
                                <FontAwesomeIcon icon={faCircleSolid} size='2x' color="#FF5F56" />
                            </CollapseIcon>

                            <CollapseIcon onClick={() => setViewDetails(false)}>
                                <FontAwesomeIcon icon={faCircleSolid} size='2x' color="#FFBD2E" />
                            </CollapseIcon>

                            <CollapseIcon>
                            <Anchor href={projectUrl} target="_blank">
                                <FontAwesomeIcon icon={faCircleSolid} size='2x' color="#27C93F" />
                            </Anchor>
                            </CollapseIcon>


                        </CollapseControls>

                        <Nav>
                            <span>README.me</span>
                        </Nav>
                    </EditorControlls>

                    <CodeContainer>
                        <LineNumber>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, i) => <p key={i}>{el}</p>)}
                        </LineNumber>
                        <TextContainer>
                            <p ><Span color="#C36863"> ## {projectName}</Span></p>

                            <p>{projectDescription}</p>

                            <p>{projectTechnologies}</p>

                            <p>[<Span color="#5F87F9">Website at</Span>]<Span color="#C36863">(</Span><Anchor color="#C678BD" target="_blank" href={projectUrl}>{projectUrl}</Anchor><Span color="#C36863">)</Span> <br />

                                [<Span color="#5F87F9">Repository at</Span>]<Span color="#C36863">(</Span><Anchor color="#C678BD" target="_blank" href={projectRepository}>{projectRepository}</Anchor><Span color="#C36863">)</Span></p>
                        </TextContainer>
                    </CodeContainer>

                </EditorContainer>
            }


        </Container>
    )
}