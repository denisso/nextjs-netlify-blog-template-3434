import React from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectTheme } from "../theme/themeSlice";
import store from "../store";
import GlobalStyle from "../theme/globalStyles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import  ErrorBoundary  from "../components/Elements/ErrorBoundary";

const ThemeWrapper = ({ children }) => {
    const theme = useSelector(selectTheme);
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function MyApp({ Component, pageProps }) {
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const router = useRouter();
    React.useEffect(() => {
        router.events.on("routeChangeStart", () => setOpenBackDrop(true));
        router.events.on("routeChangeComplete", () => setOpenBackDrop(false));
        router.events.on("routeChangeError", () => setOpenBackDrop(false));
    }, [router]);

    return (
        <>
            <Provider store={store}>
                <ThemeWrapper>
                    <GlobalStyle />
                    <Header
                        page={pageProps.page}
                        pages={pageProps.pages}
                        url={router.asPath}
                    />
                    <ErrorBoundary
                        message={`Error occured while page "${router.asPath}" loading.`}
                    >
                        <AnimatePresence
                            exitBeforeEnter
                            initial={false}
                            onExitComplete={() => window.scrollTo(0, 0)}
                        >
                            <Component {...pageProps} key={router.asPath} />
                        </AnimatePresence>
                    </ErrorBoundary>

                    <Footer />
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={openBackDrop}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </ThemeWrapper>
            </Provider>
        </>
    );
}
