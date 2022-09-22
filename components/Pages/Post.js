import React from "react";
import { Markdown } from "../Elements/Markdown";
import { Paper, Fab, Button, Modal } from "@mui/material";
import CloseIcon from "../../assets/close.svg";
import styled from "styled-components";

const ModalStyled = styled(Modal)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .box {
        display: flex;
        flex-direction: column;
        height: 100%;

        header,
        footer {
            flex-shrink: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${({ theme }) => theme.palette.color3[400]};
            padding: 0 3rem;
            color: ${({ theme }) => theme.palette.color1[900]};
            .button {
                font-family: var(--font1);
                font-weight: 700;
                font-size: .8rem;
                color: ${({ theme }) => theme.palette.color1[900]};
            }
        }
        footer {
            .left,
            .right {
                flex-basis: 100%;
            }
            .center {
                flex-basis: 100px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        header {
            padding: 0.5rem 3rem;
            box-shadow: var(--boxShadowHorizontal) rgba(0, 0, 0, 0.5);
            .modalHeaderText {
                margin: 0;
            }
        }
        section.modalBody {
            background: white;
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem 3rem;
        }
    }
`;

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
const Post = ({ data, post }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [currentNote, setCurrentNote] = React.useState(0);
    return (
        <>
            <Container>
                <h1 className="header">
                    <span className="sign">✍️</span> {post}
                </h1>
                <section className="body">
                    <Markdown content={data.body} />
                </section>

                <section className="notes">
                    <h2>Заметки</h2>
                    {data.notes instanceof Array &&
                        data.notes.map((e, i) => (
                            <Paper key={i} className="note" elevation={3}>
                                <Button onClick={handleOpen}>{e.name}</Button>
                                <div>
                                    <Markdown content={e.short} />
                                </div>
                            </Paper>
                        ))}
                </section>
            </Container>

            <ModalStyled open={open} onClose={handleClose}>
                <div className="box">
                    <header>
                        <h3 className="modalHeaderText">
                            {data.notes[currentNote].name}
                        </h3>{" "}
                        <Fab
                            className="button"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </Fab>
                    </header>
                    <section className="modalBody">
                        {Array.isArray(data.notes) && data.notes[currentNote] && (
                            <>
                                <Markdown
                                    content={data.notes[currentNote].body}
                                />
                            </>
                        )}
                    </section>

                    <footer>
                        <Button
                            className="button left"
                            onClick={() =>
                                setCurrentNote(
                                    currentNote > 0
                                        ? currentNote - 1
                                        : data.notes.length - 1
                                )
                            }
                        >
                            Пред: {
                                data.notes[
                                    currentNote > 0
                                        ? currentNote - 1
                                        : data.notes.length - 1
                                ].name
                            }
                        </Button>
                        <div className="center">{currentNote} / {data.notes.length}</div>
                        <Button
                            className="button right"
                            onClick={() =>
                                setCurrentNote(
                                    currentNote < data.notes.length - 1
                                        ? currentNote + 1
                                        : 0
                                )
                            }
                        >
                            След: {
                                data.notes[
                                    currentNote < data.notes.length - 1
                                        ? currentNote + 1
                                        : 0
                                ].name
                            }
                        </Button>
                    </footer>
                </div>
            </ModalStyled>
        </>
    );
};

export default Post;