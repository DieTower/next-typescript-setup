import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        overflow-y: hidden;

        #home {
            
        }

        #test {
            position: absolute;
            top: 0px;
            left: 0px;

            width: 100%;
            height: 100vh;

            background-color:transparent;
            pointer-events: none;
        }
    }
`;