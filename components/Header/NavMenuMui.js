import React from "react";
import styled from "styled-components";
import { Box, Select, MenuItem } from "@mui/material";
import { useRouter } from "next/router";

const Container = styled(Box)`
    .MuiInputBase-root {
        background-color: transparent;

        &:before {
            border-color: transparent;
        }
        .MuiSelect-select.MuiSelect-filled {
            padding: 0.5rem;
            padding-right: 1.5rem;
        }
    }
`;

export const NavMenuMui = ({ pages, url, className }) => {
    const [currentURL, setCurrentURL] = React.useState(url);
    React.useEffect(()=>{
        setCurrentURL(url)
    }, [url])
    const router = useRouter();
    React.useEffect(() => {
        if (Array.isArray(pages)) {
            for (const page of pages) {
                router.prefetch(page.url);
            }
        }
    }, [pages, router]);
    const handleChange = (event) => {
        setCurrentURL(event.target.value);
        router.push(event.target.value);
    };
    return (
        <Container sx={{ minWidth: 120 }} className={className}>
            <Select
                fullWidth
                value={currentURL}
                variant="filled"
                onChange={handleChange}
            >
                {pages.map((e) => (
                    <MenuItem
                        value={e.url}
                        key={e.url}
                        style={{
                            whiteSpace: "normal",
                            ...(e.url === currentURL && { display: "none" }),
                        }}
                    >
                        {e.title}
                    </MenuItem>
                ))}
            </Select>
        </Container>
    );
};
