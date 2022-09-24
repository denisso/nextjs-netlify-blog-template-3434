import React from "react";
import moment from "moment";
import styled from "styled-components";

const Container = styled("section")`
    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .job {
            header {
                & > * + * {
                    margin-left: 1rem;
                }
                .company {
                    font-weight: bold;
                }
            }
        }
    }
`;

export const Jobs = ({ jobs }) => {
    return (
        <Container>
            <h2>Компании</h2>
            <p className="content">
                {jobs instanceof Array &&
                    jobs.map((job, i) => (
                        <article key={i} className="job">
                            <header>
                                <span className="company">{job.company}</span>
                                <span className="spentMyTime">
                                    {job.dateFrom &&
                                        moment(job.dateFrom).format(
                                            "YYYY/MM/DD"
                                        )}{" "}
                                    -{" "}
                                    {job.dateTo && job.dateTo !== ""
                                        ? moment(job.dateTo).format(
                                              "YYYY/MM/DD"
                                          )
                                        : "Еще там"}
                                </span>
                                <span className="responsibilities">
                                    {job.responsibilities}
                                </span>
                            </header>
                            <footer>
                                <div className="description">
                                    {job.description}
                                </div>
                            </footer>
                        </article>
                    ))}
            </p>
        </Container>
    );
};
