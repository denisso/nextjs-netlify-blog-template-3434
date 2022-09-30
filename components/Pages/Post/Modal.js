import React from "react";
import styled from "styled-components";
import { Fab, Button, Modal } from "@mui/material";
import CloseIcon from "../../../assets/close.svg";
import { Markdown } from "../../Elements/Markdown";
import { Context } from "../Post";

const ModalStyled = styled(Modal)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & .containerModal {
        padding: 0.5rem 3rem;

        ${({ theme }) => theme.breakpoints.down("md")} {
            padding: 0.5rem 1.2rem;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            padding: 0.5rem;
        }
    }
    ${({ theme }) => theme.breakpoints.up("xl")} {
        width: ${({ theme }) => theme.breakpoints.values.xl + "px"};
        margin: 0 auto;
    }
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

            color: ${({ theme }) => theme.palette.color1[900]};
            .button {
                font-family: var(--font1);
                font-weight: 700;
                font-size: 0.8rem;
                color: ${({ theme }) => theme.palette.color1[900]};

                .short {
                    display: none;
                }
                .long {
                    display: inline;
                }
                ${({ theme }) => theme.breakpoints.down("sm")} {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .short {
                        display: inline;
                    }
                    .long {
                        display: none;
                    }
                }
            }
        }
        footer {
            padding-bottom: 0;
            padding-top: 0;
            .left,
            .right {
                flex-basis: 100%;
            }
            .center {
                flex-basis: 7rem;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        header {
            box-shadow: var(--boxShadowHorizontal) rgba(0, 0, 0, 0.5);
            .fabButton {
                height: 2rem;
                width: 2rem;
                min-width: 2rem;
                min-height: 2rem;
                max-width: 2rem;
                max-height: 2rem;
                background-color: ${({ theme }) => theme.palette.color3[400]};

                outline: solid ${({ theme }) => theme.palette.color3[500]};
                &:hover {
                    box-shadow: inherit;
                    background-color: ${({ theme }) =>
                        theme.palette.color3[100]};
                }
                .icon {
                    width: 100%;
                    height: auto;
                    display: block;
                    fill: ${({ theme }) => theme.palette.color1[800]};
                    transition: fill var(--transition);
                }
            }
            .modalHeaderText {
                margin: 0;
            }
        }
        section.modalBody {
            background: white;
            flex: 1;
            overflow-y: auto;
        }
    }
`;

const ButtonNext = () => {
    const { data, setCurrentNote, currentNote } = React.useContext(Context);
    const text = "Следующий";
    const short = "След:";
    if (!Array.isArray(data.notes) || data.notes.length === 0)
        return <Button className="button right">{text}</Button>;
    return (
        <Button
            className="button right"
            onClick={() =>
                setCurrentNote(
                    currentNote < data.notes.length - 1 ? currentNote + 1 : 0
                )
            }
        >
            <span className="long">
                {short}{" "}
                {
                    data.notes[
                        currentNote < data.notes.length - 1
                            ? currentNote + 1
                            : 0
                    ].name
                }
            </span>

            <span className="short">{text}</span>
        </Button>
    );
};

const ButtonPrev = () => {
    const { data, setCurrentNote, currentNote } = React.useContext(Context);
    const text = "Предыдущий";
    const short = "Пред:";
    if (!Array.isArray(data.notes) || data.notes.length === 0)
        return <Button className="button left">{text}</Button>;
    return (
        <Button
            className="button left"
            onClick={() =>
                setCurrentNote(
                    currentNote > 0 ? currentNote - 1 : data.notes.length - 1
                )
            }
        >
            <span className="long">
                {short}{" "}
                {
                    data.notes[
                        currentNote > 0
                            ? currentNote - 1
                            : data.notes.length - 1
                    ].name
                }
            </span>
            <span className="short">{text}</span>
        </Button>
    );
};

export const ModalComponent = () => {
    const { open, setOpen, data, currentNote } = React.useContext(Context);
    const handleClose = () => setOpen(false);
    return (
        <ModalStyled open={open} onClose={handleClose}>
            <div className="box">
                <header className="containerModal">
                    <h3 className="modalHeaderText">
                        {Array.isArray(data.notes) &&
                            data.notes[currentNote].name}
                    </h3>

                    <Fab className="fabButton" onClick={handleClose}>
                        <CloseIcon className="icon" />
                    </Fab>
                </header>
                <section className="modalBody containerModal">
                    {Array.isArray(data.notes) && data.notes[currentNote] && (
                        <>
                            <Markdown content={data.notes[currentNote].body} />
                        </>
                    )}
                </section>

                <footer className="containerModal">
                    <ButtonPrev />
                    <div className="center">
                        {currentNote} / {data.notes.length}
                    </div>
                    <ButtonNext />
                </footer>
            </div>
        </ModalStyled>
    );
};
