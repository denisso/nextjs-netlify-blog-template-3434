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
    html {
        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 18px;
        }
        ${({ theme }) => theme.breakpoints.down("md")} {
            font-size: 16px;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 14px;
        }
    }
    body {
        background-color: ${({ theme }) => theme.palette.color1[200]};
        color: ${({ theme }) => theme.palette.color1[900]};
        transition: color var(--transition), background-color var(--transition),
            width var(--transition);
        font-family: ${({ theme }) => theme.typography.font1};
        line-height: 1.5;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 1rem;
    }
    h1 {
        font-size: 1.8rem;
    }
    h2 {
        font-size: 1.6rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        font-size: 1.3rem;
    }
    h5 {
        font-size: 1.1rem;
    }
    h6 {
        font-size: 1rem;
    }
    a,
    a:link,
    a:visited,
    a:active {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.color1[900]};
        cursor: pointer;
    }
    button {
        user-select: none;
        cursor: pointer;
    }
    .container {
        padding: 0 1rem;
    }
    #__next {
        background-color: ${({ theme }) => theme.palette.rootColor};
        transition: width var(--transition), margin var(--transition),
            border-radius var(--transition);

        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
        margin: 3rem auto;
        ${({ theme }) => theme.breakpoints.down("md")} {
            margin: 2rem auto;
        }
        ${({ theme }) => theme.breakpoints.down("sm1")} {
            margin: 1rem auto;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            width: 100%;
            margin: 0 auto 0;
            border-radius: 0;
        }
        ${({ theme }) => theme.breakpoints.up("sm")} {
            border-radius: var(--borderRadiusBlock);
        }
        ${({ theme }) => theme.breakpoints.between("sm", "lg")} {
            width: 95%;
        }
        ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
            width: 90%;
        }
        ${({ theme }) => theme.breakpoints.up("xl")} {
            width: 1400px;
        }
    }
`;
