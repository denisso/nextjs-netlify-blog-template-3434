import styled from "styled-components";
import { Chip } from "@mui/material";

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    .Chip {
        font-size: var(--fontSize);
        font-family: var(--font1);
    }
`;

// const ChipStyled = styled(Chip)``
export const Skills = ({ skills }) => (
    <Container>
        {typeof skills === "string" &&
            skills
                .split(",")
                .map((e, i) => (
                    <Chip
                        key={e}
                        color="primary"
                        label={e}
                        clickable
                        className="Chip"
                    />
                ))}
    </Container>
);
