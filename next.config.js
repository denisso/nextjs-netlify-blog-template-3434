const withTM = require("next-transpile-modules")([
    "@mui/material",
    "@mui/system",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
    images: {
        domains: ["mrdramm.netlify.app"],
        formats: [
            "image/avif",
            "image/webp"
        ],
    },
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: { mode: ["react-component"] },
        });
        cfg.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        cfg.resolve.alias = {
            ...cfg.resolve.alias,
            "@mui/styled-engine": "@mui/styled-engine-sc",
        };
        return cfg;
    },
});
