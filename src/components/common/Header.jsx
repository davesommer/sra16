import styled from "styled-components"
import { breakpoints } from "../../utils/Breakpoint"

const Header = styled.h1`
    margin: 0;
    font-family: "Mort", sans-serif;
    font-weight: 900;
    font-size: 7em;
    ${breakpoints("font-size", "em", [
    { 1200: 7 },
    { 800: 5 },
    { 600: 4 },
    { 450: 3 }
    ])};
`

export default Header;