import styled from "styled-components";

const Anchor = styled.a`
    color: #B2AAAA;
    font-size: 0.9em;
    /* font-size: ${props => props.iconSize === 'sm' ? '0.9em' : '0.9em'}; */

    :hover {
    color: #FDFFFF;
    }
`

export const SocialIcon = ({ children, ...props }) => {
    return (
        <Anchor {...props} target="_blank">
            {children}
        </Anchor>
    )
}