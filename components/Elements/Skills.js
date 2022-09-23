import styled from "styled-components";
import { Chip } from "@mui/material";

const Container = styled("div")`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    .ChipStyle{
        font-size: 1.1rem;
    }
`;

export const Skills = ({ skills }) => {
    if (!skills) return <></>;
    return (
        <Container>
            {typeof skills === "string" &&
                skills
                    .split(",")
                    .map((e, i) => (
                        <Chip
                            className="ChipStyle"
                            key={e}
                            color="primary"
                            label={e}
                            clickable
                        />
                    ))}
        </Container>
    );
};
