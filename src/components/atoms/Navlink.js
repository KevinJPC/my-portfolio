import styled from "styled-components";

const Link = styled.span`
    padding: 5px;
    font-size: calc(1em + 0.3vw);

    color: ${props => props.active ? '#FDFFFF' : '#B2AAAA'};

    :hover {
    color: #FDFFFF;
    cursor: pointer;
    }

`

export const Navlink = ({ text, ...props }) => {
    return (
            <Link {...props}>
                {text}
            </Link>

    )
}