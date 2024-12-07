import React, { useState } from 'react';

const PerformancePage = () => {
  // Sample athlete data
  const [athleteData] = useState({
    name: 'John Doe',
    sport: 'Track and Field',
    history: [
      { event: '100m', date: '2024-01-01', result: 10.5 },
      { event: '100m', date: '2024-03-01', result: 10.2 },
      { event: '100m', date: '2024-05-01', result: 9.8 }, // Anomaly: significant improvement
      { event: '200m', date: '2024-02-01', result: 21.5 },
      { event: '200m', date: '2024-04-01', result: 21.3 },
    ],
  });

  // Function to calculate performance anomaly (simple version, can be expanded)
  const calculateAnomaly = (history) => {
    let alertMessage = '';
    for (let i = 1; i < history.length; i++) {
      const prevResult = history[i - 1].result;
      const currentResult = history[i].result;

      // If performance improves by more than 3% (example threshold), flag as anomaly
      if (currentResult < prevResult * 0.97) {
        alertMessage = `Anomaly detected in ${history[i].event} on ${history[i].date}: Significant improvement`;
        break;
      }
    }
    return alertMessage;
  };

  const performanceAnomaly = calculateAnomaly(athleteData.history);

  return (
    <div style={styles.container}>
      {/* Athlete Info Card */}
      <div style={styles.card}>
        <h1 style={styles.header}>Athlete Profile</h1>
        <div style={styles.profile}>
          <h2 style={styles.name}>{athleteData.name}</h2>
          <p style={styles.sport}>Sport: {athleteData.sport}</p>
        </div>
      </div>

      {/* Performance History Card */}
      <div style={styles.card}>
        <h3 style={styles.subHeader}>Performance History</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Event</th>
              <th style={styles.tableHeader}>Date</th>
              <th style={styles.tableHeader}>Result (seconds)</th>
            </tr>
          </thead>
          <tbody>
            {athleteData.history.map((entry, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.tableCell}>{entry.event}</td>
                <td style={styles.tableCell}>{entry.date}</td>
                <td style={styles.tableCell}>{entry.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Comparison Card */}
      <div style={styles.card}>
        <h3 style={styles.subHeader}>Performance Comparison</h3>
        {performanceAnomaly ? (
          <div style={styles.alert}>
            <p style={styles.alertText}>{performanceAnomaly}</p>
          </div>
        ) : (
          <p>No anomalies detected in recent performance.</p>
        )}
      </div>

      {/* Risk Indicator Card */}
      <div style={styles.card}>
        <h3 style={styles.subHeader}>Risk Indicator for Doping</h3>
        <p>This section will show a risk score based on performance analysis. Anomalies will trigger a review process.</p>
      </div>

      {/* TUE Check Card */}
      <div style={styles.card}>
        <h3 style={styles.subHeader}>TUE Check</h3>
        <p>Cross-reference performance anomalies with Therapeutic Use Exemption records to validate performance changes.</p>
      </div>

      {/* Feedback & Suggestions Card */}
      <div style={styles.card}>
        <h3 style={styles.subHeader}>Feedback and Improvement Suggestions</h3>
        <p>Recommendations on improving performance tracking accuracy, training, and recovery processes.</p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '15px',
    transition: 'transform 0.2s ease-in-out',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
  },
  subHeader: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  profile: {
    textAlign: 'center',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  sport: {
    fontSize: '18px',
    color: '#777',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  alert: {
    backgroundColor: '#ffcc00',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
  },
  alertText: {
    fontSize: '16px',
    color: '#fff',
    textAlign: 'center',
  },
};

export default PerformancePage;
