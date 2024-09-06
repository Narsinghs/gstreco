import React, { useState } from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthIndicator({ password }) {
  const { score, feedback } = zxcvbn(password);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];

  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "yellow";
      case 4:
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: getStrengthColor(score),
        }}
      ></div>
      <p>{strengthLabels[score]}</p>
      {/* <p>{feedback.suggestions.join(" ")}</p> */}
    </div>
  );
}

export default PasswordStrengthIndicator;
