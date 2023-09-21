import React from "react";
import { useRef } from "react";
import "./SkillCard.css";

const SkillCard = ({ title, desc, position }) => {
  const cardRef = useRef();
  const resetScroll = () => {
    while (cardRef.current.scrollTop > 0) {
      cardRef.current.scrollTop--;
    }
  };
  return (
    <div className={`card ${position}`} ref={cardRef} onMouseLeave={resetScroll}>
      <p className="card-title">{title}</p>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default SkillCard;
