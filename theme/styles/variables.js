import { css } from "styled-components";

export const variables = css`
    :root {
        --fontSize: ${({theme})=>theme.typography.fontSizeBody};
        --font1: ${({theme})=>theme.typography.font1};
        --font2: ${({theme})=>theme.typography.font2};
        --zIndexModal: ${({theme})=>theme.zIndex.modal};
        --zIndexSteakyHeader: ${({theme})=>theme.zIndex.appBar};
        --transition: ${({theme})=>theme.transitions.duration.standard + "ms"};
        --borderRadiusBlock: .5rem;
        --borderRadiusInput: .3rem;
        --opacityFadeOut: .6;
        --boxShadowVertical: 10px 0px 8px -6px;
        --boxShadowHorizontal: 0px 10px 8px -6px;
    }
`;
