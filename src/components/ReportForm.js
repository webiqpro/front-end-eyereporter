import React, { useState } from 'react';
import { createReport } from '../services/api';

const ReportForm = ({ onReportSubmitted }) => {
  const [formData, setFormData] = useState({ title: '', location: '', description: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.description) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      await createReport(formData);
      setFormData({ title: '', location: '', description: '' }); // Reset
      onReportSubmitted(); // Trigger list refresh
    } catch (err) {
      alert("Failed to submit report.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-card">
      <h3>Submit a Report</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="What is the issue?" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="Location (Street, Neighborhood)" 
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
        <textarea 
          placeholder="Provide more details..." 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Post Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportForm;