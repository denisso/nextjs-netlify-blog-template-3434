import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import { selectTheme } from "../theme/themeSlice";
import store from "../store";
import GlobalStyle from "../theme/globalStyles";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"

const ThemeWrapper = ({ children }) => {
    const theme = useSelector(selectTheme);
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function MyApp({ Component, pageProps, router }) {
    const url = `${process.env.URL}${router.asPath}`;
    return (
        <>
            <Provider store={store}>
                <ThemeWrapper>
                    <GlobalStyle />
                    <Header page={pageProps.page} pages={pageProps.pages}/>
                    <AnimatePresence
                        exitBeforeEnter
                        initial={false}
                        onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <Component {...pageProps} canonical={url} key={url} />
                    </AnimatePresence>
                    <Footer/>
                </ThemeWrapper>
            </Provider>
        </>
    );
}
