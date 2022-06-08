import styled from "styled-components";

const H4 = styled.h4`
    color: #B2AAAA;
    text-align: center;
    font-size: calc(1em + 0.6vw);
`

export const SubTitle = ({ text }) => {
    return (
        <H4>
            { text }
        </H4>
    )
}
