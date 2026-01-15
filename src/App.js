import React, { useState, useEffect } from 'react';
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';
import { getReports } from './services/api';
import './App.css';

function App() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadReports = async () => {
    try {
      setLoading(true);
      const response = await getReports();
      setReports(response.data);
      setError(null);
    } catch (err) {
      setError("Could not connect to the server.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>👁️ Eye Reporter</h1>
        <p>Report and track local community issues</p>
      </header>

      <main>
        <ReportForm onReportSubmitted={loadReports} />
        
        <section className="report-section">
          <h2>Recent Reports</h2>
          {error && <div className="error-banner">{error}</div>}
          {loading ? (
            <p className="loading">Fetching reports...</p>
          ) : (
            <ReportList reports={reports} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;