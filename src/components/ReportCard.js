const ReportCard = ({ report }) => {
  return (
    <div className="report-card">
      <h3>{report.title}</h3>
      <p>{report.description}</p>
      <small>Reported on: {new Date(report.createdAt).toLocaleDateString()}</small>
    </div>
  );
};

export default ReportCard;
