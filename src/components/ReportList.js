import { useEffect, useState } from "react";
import { getReports } from "../services/api";
import ReportCard from "./ReportCard";

const ReportList = ({ refresh }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReports = async () => {
    try {
      setLoading(true);
      const data = await getReports();
      setReports(data);
    } catch (err) {
      setError("Unable to fetch reports.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [refresh]);

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2>Reported Issues</h2>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        reports.map((report) => (
          <ReportCard key={report._id} report={report} />
        ))
      )}
    </div>
  );
};

export default ReportList;
