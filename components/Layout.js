import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import styled from "styled-components";
const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const Main = styled(motion.main)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Layout = ({ children, title, description }) => (
    <>
        <NextSeo
            title={title}
            description={description}
            openGraph={{ title, description }}
        />
        <Main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
        >
            {children}
        </Main>
    </>
);

export default Layout
