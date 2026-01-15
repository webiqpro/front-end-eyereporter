import React from 'react';

const ReportList = ({ reports }) => {
  if (reports.length === 0) {
    return <p className="empty-msg">No reports found. Be the first to report an issue!</p>;
  }

  return (
    <div className="report-grid">
      {reports.map((report) => (
        <div key={report.id || report._id} className="report-card">
          <span className="location-tag">{report.location}</span>
          <h3>{report.title}</h3>
          <p>{report.description}</p>
          <div className="card-footer">
            <small>Reported on: {new Date().toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportList;