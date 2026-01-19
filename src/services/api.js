import axios from 'axios';

// Replace with your actual backend URL
const API_URL = 'https://backend-eyereporter.vercel.app/api/reports';

export const getReports = () => axios.get(API_URL);
export const createReport = (reportData) => axios.post(API_URL, reportData);
