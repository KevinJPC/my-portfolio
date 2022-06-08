import styled from "styled-components";

const IconContainer = styled.i`
    color: #B2AAAA;
    font-size: 0.9em;
    /* font-size: ${props => props.iconSize === 'sm' ? '0.9em' : '0.9em'}; */

    :hover {
    color: #FDFFFF;
    cursor: pointer;
    }
`

export const ControlIcon = ({ children, ...props }) => {
    return (
        <IconContainer {...props}>
            {children}
        </IconContainer>
    )

}