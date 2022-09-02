import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, title, description }) => (
    <div>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <motion.main
            // initial="hidden"
            initial={false}
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
        >
            {children}
        </motion.main>
    </div>
);

export {Layout};
