import React from "react";

export default function InfoBox({ icon, title, children }) {
  return (
    <div className="info-box">
      <div className="info-title">
        <img src={icon} alt="icon" />
        <h1>{title}</h1>
      </div>
      <div className="info-content">{children}</div>
    </div>
  );
}
