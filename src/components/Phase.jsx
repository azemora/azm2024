import React from 'react';

const Phase = ({ title, content, icon, downloadLink }) => {
  return (
    <div className="phase">
      <div className="phase-top">
        <div className="icon-container">
          <img src={icon} alt="Phase Icon" className="phase-icon" />
        </div>
        <div className="phase-content">
          <h3 className="phase-title">{title}</h3>
          <ul>
            {content.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
      <a href={downloadLink} download className="download-button">
        Download PDF
      </a>
    </div>
  );
};

export default Phase;
