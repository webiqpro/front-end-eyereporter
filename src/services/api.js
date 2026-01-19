import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://backend-eyereporter-1.onrender.com";

/**
 * Create a new report
 */
export const createReport = async (reportData) => {
  const response = await axios.post(
    `${API_URL}/api/reports`,
    reportData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

/**
 * Get all reports
 */
export const getReports = async () => {
  const response = await axios.get(`${API_URL}/api/reports`);
  return response.data;
};
