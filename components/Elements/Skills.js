import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";

const Container = styled("div")`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const ChipStyled = styled(Chip)`
    font-size: var(--fontSize);
    font-family: var(--font2);
`;

export const Skills = ({ skills }) => {
    if (!skills) return <></>;
    return (
        <Container>
            {typeof skills === "string" &&
                skills
                    .split(",")
                    .map((e, i) => (
                        <ChipStyled
                            key={e}
                            color="primary"
                            label={e}
                            clickable
                        />
                    ))}
        </Container>
    );
};
