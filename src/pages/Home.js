import { useState } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const handleReportAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/logo.svg" alt="Eye Reporter Logo" className="logo" />
        <h1>Eye Reporter</h1>
      </div>
      <ReportForm onReportAdded={handleReportAdded} />
      <ReportList refresh={refresh} />
    </div>
  );
};

export default Home;
