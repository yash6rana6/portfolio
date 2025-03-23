import React from "react";

export const ActionButton = ({ type }) => {
  const handleButtonClick = () => {
    const email = "yash91471@gmail.com"; 
    const subject = type === "hire" 
      ? encodeURIComponent("Job Inquiry") 
      : encodeURIComponent("Let's Connect!");
      
    const body = type === "hire" 
      ? encodeURIComponent("Hello, I'm interested in hiring you. Let's discuss further.") 
      : encodeURIComponent("Hi Yash, I’d love to discuss something with you. Looking forward to your response!");

    // Open Gmail compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`px-6 py-3 rounded-lg transition duration-300 ${
        type === "hire" ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"
      } text-white`}
    >
      {type === "hire" ? "Hire Me" : "Contact Me"}
    </button>
  );
};

export default ActionButton;
