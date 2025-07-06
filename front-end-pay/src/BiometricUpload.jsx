import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function BiometricUpload() {
  const [logs, setLogs] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

      const headers = rawData[6]; // Actual header row
      const dataRows = rawData.slice(7); // Skip meta + header

      const formattedLogs = dataRows.map(row => {
        const inTime = row[6] ? new Date(`1970-01-01T${row[6]}`) : null;
        const outTime = row[8] ? new Date(`1970-01-01T${row[8]}`) : null;
        let hoursWorked = null;

        if (inTime && outTime && outTime > inTime) {
          hoursWorked = ((outTime - inTime) / 3600000).toFixed(2);
        }

        return {
          empCode: row[2],
          name: row[3],
          inTime: row[6],
          outTime: row[8],
          hoursWorked
        };
      });

      setLogs(formattedLogs);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="container mt-4">
      <h4>Upload Biometric Excel File</h4>
      <input type="file" accept=".csv, .xls, .xlsx" onChange={handleFile} className="form-control mb-3" />

      {fileName && <p><strong>File Loaded:</strong> {fileName}</p>}

      {logs.length > 0 && (
        <div className='table-responsive mt-3'>
          <table className='table table-bordered table-striped'>
            <thead className='table-dark'>
              <tr>
                <th>#</th>
                <th>Employee Code</th>
                <th>Name</th>
                <th>IN Time</th>
                <th>OUT Time</th>
                <th>Hours Worked</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{log.empCode}</td>
                  <td>{log.name}</td>
                  <td>{log.inTime}</td>
                  <td>{log.outTime}</td>
                  <td>{log.hoursWorked || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BiometricUpload;
