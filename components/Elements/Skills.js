import styled from "styled-components";
import { Chip } from "@mui/material";

const Container = styled("div")`
    .content {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        .ChipStyle {
            font-size: .9rem;
        }
    }
`;

export const Skills = ({ skills }) => {
    if (!skills) return <></>;
    return (
        <Container>
            <h2>Навыки</h2>
            <div className="content">
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
            </div>
        </Container>
    );
};
