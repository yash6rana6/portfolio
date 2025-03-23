import React from "react";

export const DownloadCVButton = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/Yash_CV.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Yash_Deep_Singh_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownloadCV}
      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
    >
      Download CV
    </button>
  );
};

export default DownloadCVButton;