import React from "react";

// Style
import * as S from "./style";

// Type
type Section = {
    bgColor?: string,
    width?: string,
    height?: string,
    className?: string,
    children?: React.ReactNode,
    [x:string]: any
}

const Section = ({className, children, ...rest}: Section) => {

    return (
        <S.Section
            className={className}
            {...rest}>

            {children}
        </S.Section>
    )
}

export default Section;