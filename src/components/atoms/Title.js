import styled from "styled-components"

const H1 = styled.h1`
    color: #FDFFFF;
    text-align: center;
    font-size: calc(1em + 2vw);
    font-weight: 700;
`

export const Title = ({ text }) => {
    return (
        <H1>
            {text}
        </H1>
    )
}