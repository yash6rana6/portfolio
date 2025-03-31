import React from "react";
import "./DownloadCVButton.css"; // Import the CSS file

export const DownloadCVButton = () => {
  const driveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=159Lwx1GgMQibbkaKH_DKEZ0IJoepuFy7";

  return (
    <a href={driveDownloadUrl} className="download-btn">
      Download CV
    </a>
  );
};

export default DownloadCVButton;
