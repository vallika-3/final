import React from 'react';
import MedicalTestReports from './MedicalTestReports';
import BiologicalPassportRecords from './BiologicalPassportRecords';
import AccessToSocialMedia from './AccessToSocialMedia';
import FinancialTransactions from './FinancialTransactions';
import TravelHistory from './TravelHistory';
import Performance from './Performance'; // Import the Performance component

const RightPanel = ({ selectedSection, athleteId }) => {
  const sectionContent = {
    "Medical Test Reports": <MedicalTestReports athleteId={athleteId} />,
    "Biological Passport Records": <BiologicalPassportRecords athleteId={athleteId} />,
    "Access to Social Media": <AccessToSocialMedia athleteId={athleteId} />,
    "Financial Transactions": <FinancialTransactions athleteId={athleteId} />,
    "Travel History": <TravelHistory athleteId={athleteId} />,
    "Performance": <Performance athleteId={athleteId} />, // Add Performance section
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f7f6', borderRadius: '10px' }}>
      <div style={tabContentStyle}>
        {sectionContent[selectedSection] || <p>Please select a section from the menu.</p>}
      </div>
    </div>
  );
};

const tabContentStyle = {
  marginTop: '20px',
};

export default RightPanel;