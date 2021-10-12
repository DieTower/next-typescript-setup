import styled from "styled-components";

export interface IProps {
    "Section": {
        bgColor?: string,
        width?: string,
        height?: string
    }
}

export const Section = styled.div<IProps["Section"]>`
    
    background-color: ${props => props.bgColor};
    width: ${props => props.width || "400px"};
    height: ${props => props.height || "400px"};
`;