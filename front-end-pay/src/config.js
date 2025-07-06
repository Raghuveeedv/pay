// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://fpay-back.onrender.com/api/v1';

// Environment
export const ENV = import.meta.env.VITE_ENV || 'production';

// API Endpoints
export const API_ENDPOINTS = {
  // Employee endpoints
  CREATE_EMPLOYEE: `${API_BASE_URL}/create`,
  GET_EMPLOYEE: `${API_BASE_URL}/get`,
  GET_ALL_EMPLOYEES: `${API_BASE_URL}/getEmployee`,
  UPDATE_EMPLOYEE: `${API_BASE_URL}/update`,
  DELETE_EMPLOYEE: `${API_BASE_URL}/delete`,
  
  // Authentication endpoints
  LOGIN: `${API_BASE_URL}/login`,
  EMPLOYEE_LOGIN: `${API_BASE_URL}/employeelogin`,
  LOGOUT: `${API_BASE_URL}/logout`,
  DASHBOARD: `${API_BASE_URL}/dashboard`,
  
  // Payslip endpoints
  DOWNLOAD_PDF: `${API_BASE_URL}/downloadpdf`,
  EMP_PDF: `${API_BASE_URL}/emppdf`,
  
  // Attendance endpoints
  CREATE_ATTENDANCE: `${API_BASE_URL}/attendance`,
  GET_ATTENDANCES: `${API_BASE_URL}/attendances`,
  GET_ATTENDANCE: `${API_BASE_URL}/attendace`,
  
  // Company settings endpoints
  COMPANY_SETTINGS: `${API_BASE_URL}/company-settings`,
  PAYSLIP_ADDRESS: `${API_BASE_URL}/payslip-address`,
  
  // Biometric endpoints
  UPLOAD_BIOMETRIC: `${API_BASE_URL}/uploadBiometric`,
  
  // Stats endpoints
  ADMIN_COUNT: `${API_BASE_URL}/adminCount`,
  EMPLOYEE_COUNT: `${API_BASE_URL}/employeeCount`,
  SALARY_COUNT: `${API_BASE_URL}/salary`,
};

// Helper function to get full API URL
export const getApiUrl = (endpoint, id = null) => {
  if (id) {
    return `${endpoint}/${id}`;
  }
  return endpoint;
}; 