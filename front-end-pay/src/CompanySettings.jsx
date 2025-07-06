import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from './config';

function CompanySettings() {
  const [settings, setSettings] = useState({
    defaultAddress: 'vijayawada',
    vijayawadaAddress: {
      street: "Fortune Heights, 52-1 / 8-11, Plot No's-8 & 9, Road No-2, ESI Rd, beside Hotel Park N",
      city: "NTR Colony, Vijayawada, Andhra Pradesh 520008"
    },
    hyderabadAddress: {
      street: "7th Floor, Q3, A2, Cyber Towers, Madhapur",
      city: "Hyderabad - 500081, Telangana"
    }
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.COMPANY_SETTINGS);
      if (response.data.Status === "Success") {
        setSettings(response.data.Result);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(API_ENDPOINTS.COMPANY_SETTINGS, settings);
      if (response.data.Status === "Success") {
        setMessage('Settings updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      setMessage('Error updating settings');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Company Settings</h3>
            </div>
            <div className="card-body">
              {message && (
                <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                  {message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="defaultAddress" className="form-label">
                    Default Address for Payslips
                  </label>
                  <select
                    className="form-select"
                    id="defaultAddress"
                    value={settings.defaultAddress}
                    onChange={(e) => setSettings({ ...settings, defaultAddress: e.target.value })}
                  >
                    <option value="vijayawada">Vijayawada</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <h5>Vijayawada Address</h5>
                    <div className="mb-3">
                      <label htmlFor="vijStreet" className="form-label">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="vijStreet"
                        value={settings.vijayawadaAddress.street}
                        onChange={(e) => setSettings({
                          ...settings,
                          vijayawadaAddress: {
                            ...settings.vijayawadaAddress,
                            street: e.target.value
                          }
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="vijCity" className="form-label">City & State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="vijCity"
                        value={settings.vijayawadaAddress.city}
                        onChange={(e) => setSettings({
                          ...settings,
                          vijayawadaAddress: {
                            ...settings.vijayawadaAddress,
                            city: e.target.value
                          }
                        })}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h5>Hyderabad Address</h5>
                    <div className="mb-3">
                      <label htmlFor="hydStreet" className="form-label">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hydStreet"
                        value={settings.hyderabadAddress.street}
                        onChange={(e) => setSettings({
                          ...settings,
                          hyderabadAddress: {
                            ...settings.hyderabadAddress,
                            street: e.target.value
                          }
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="hydCity" className="form-label">City & State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hydCity"
                        value={settings.hyderabadAddress.city}
                        onChange={(e) => setSettings({
                          ...settings,
                          hyderabadAddress: {
                            ...settings.hyderabadAddress,
                            city: e.target.value
                          }
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Settings'}
                  </button>
                  <button type="button" className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySettings; 