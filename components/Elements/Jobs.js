import React from "react";
import moment from "moment";
import styled from "styled-components";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .job {
        header {
            display: flex;
            gap: 1rem;
            .company {
                font-weight: bold;
            }
        }
        footer {
        }
    }
`;

export const Jobs = ({ jobs }) => {
    return (
        <Container>
            {jobs instanceof Array &&
                jobs.map((job, i) => (
                    <article key={i} className="job">
                        <header>
                            <div className="company">{job.company}</div>
                            <div className="spentMyTime">
                                {job.dateFrom &&
                                    moment(job.dateFrom).format(
                                        "YYYY/MM/DD"
                                    )}{" "}
                                -{" "}
                                {job.dateTo && job.dateTo !== ""
                                    ? moment(job.dateTo).format("YYYY/MM/DD")
                                    : "Еще там"}
                            </div>
                            <div className="responsibilities">
                                {job.responsibilities}
                            </div>
                        </header>
                        <footer>
                            <div className="description">{job.description}</div>
                        </footer>
                    </article>
                ))}
        </Container>
    );
};
