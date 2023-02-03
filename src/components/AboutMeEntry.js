import React from "react";
import "./AboutMeEntry.css";

const AboutMeEntry = ({ title, desc }) => {
  return (
    <div className="entry">
      <p className="entry-title">{title}</p>
      <p className="entry-desc">{desc}</p>
    </div>
  );
};

export default AboutMeEntry;
