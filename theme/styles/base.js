import { css } from "styled-components";

export const base = css`
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.palette.background2};
        color: ${({ theme }) => theme.palette.textColor};
        transition: color var(--transition), background-color var(--transition),
            width var(--transition);
        font-size: 18px;
        font-family: ${({ theme }) => theme.fontFamily};
        /* for position sticky */
        overflow-x: hidden;
    }

    a,
    a:link,
    a:visited,
    a:active {
        text-decoration: none;
        color: ${({ theme }) => theme.colorText};
        user-select: none;
        cursor: pointer;
    }
    button {
        user-select: none;
        cursor: pointer;
    }
    .container {
        padding: 0 var(--padding);
    }
    #__next {
        background-color: ${({ theme }) => theme.palette.background};
        transition: width var(--transition), margin var(--transition), border-radius var(--transition);
        margin: 50px auto 100px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);

        ${({ theme }) =>theme.breakpoints.down('sm')} {
            width: 100%;
            margin: 0 auto 0;
            border-radius: 0;
        }
        ${({ theme }) =>theme.breakpoints.up("sm")} {
            border-radius: var(--borderRadiusBlock);
        }
        ${({ theme }) =>theme.breakpoints.between("sm", "lg")} {
            width: 95%;
        }
        ${({ theme }) =>theme.breakpoints.between("lg", "xl")} {
            width: 90%;
        }
        ${({ theme }) =>theme.breakpoints.up("xl")} {
            width: 1400px;
        }
    }
`;
