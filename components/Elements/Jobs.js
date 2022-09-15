export const Jobs = ({ jobs }) => {
    return (
        <div className="jobs">
            {data.jobs instanceof Array &&
                data.jobs.map((job, i) => (
                    <div key={i} className="job">
                        <div className="company">{job.company}</div>
                        <div className="dateFrom">
                            {job.dateFrom &&
                                moment(job.dateFrom).format("YYYY/MM/DD")}
                        </div>
                        <div className="dateTo">
                            {job.dateTo &&
                                moment(job.dateTo).format("YYYY/MM/DD")}
                        </div>
                        <div className="responsibilities">
                            {job.responsibilities}
                        </div>
                        <div className="description">{job.description}</div>
                    </div>
                ))}
        </div>
    );
};
