import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, desc }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default SkillCard;
