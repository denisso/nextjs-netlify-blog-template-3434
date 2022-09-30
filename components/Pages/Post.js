import React from "react";
import { Markdown } from "../Elements/Markdown";
import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import { ModalStyled } from "./Post/Modal";

export const Context = React.createContext({
    data: [],
    currentNote: 0,
    setCurrentNote: () => {},
});

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .header {
        display: flex;
        align-items: center;
        gap: 1rem;

        .sign {
            font-size: 4rem;
        }
    }
    .notes {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .note {
            padding: 1rem;
        }
    }
`;

const Post = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [currentNote, setCurrentNote] = React.useState(0);

    return (
        <Context.Provider
            value={(open, setOpen, currentNote, setCurrentNote, data)}
        >
            <Container>
                <h1 className="header">
                    <span className="sign">✍️</span> {data.title}
                </h1>
                <section className="body">
                    <Markdown content={data.body} />
                </section>

                {Array.isArray(data.notes) && data.notes.length && (
                    <section className="notes">
                        <h2>Заметки</h2>
                        {data.notes.map((e, i) => (
                            <Paper key={i} className="note" elevation={3}>
                                <Button onClick={handleOpen}>{e.name}</Button>
                                <div>
                                    <Markdown content={e.short} />
                                </div>
                            </Paper>
                        ))}
                    </section>
                )}
            </Container>
            {/* {Array.isArray(data.notes) && data.notes.length && <ModalStyled />} */}
        </Context.Provider>
    );
};

export default Post;
