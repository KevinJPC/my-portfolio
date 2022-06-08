import styled from "styled-components";

const Container = styled.div`
    width: 6em;
    color: #FDFFFF;

    ${props => props.background ? 
    'background-color: #FDFFFF;' : null}

    img{
        width: 100%;
    }
`

export const TechnologyLogo = ( {background, padding, ...props} ) => {
    return (
        <Container background={background} padding={padding}>
            <img {...props}/>
        </Container>
    )
}