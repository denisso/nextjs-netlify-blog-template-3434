import styled from "styled-components";
import { Chip } from "@mui/material";

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const ChipStyled = styled(Chip)`
    font-size: var();
`;

// const ChipStyled = styled(Chip)``
export const Skills = ({ skills }) => (
    <Container>
        {typeof skills === "string" &&
            skills
                .split(",")
                .map((e, i) => (
                    <ChipStyled key={e} color="primary" label={e} clickable />
                ))}
    </Container>
);
