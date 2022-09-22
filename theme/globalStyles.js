import { createGlobalStyle } from "styled-components";
import { base } from "./styles/base";
import { variables } from "./styles/variables";
import highlight from "highlight.js/styles/default.css";

const GlobalStyle = createGlobalStyle`
    ${highlight}
    ${variables} 
    ${base}`;

export default GlobalStyle;
