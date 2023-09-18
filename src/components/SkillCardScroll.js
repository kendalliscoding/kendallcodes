import React from "react";
import { useRef } from "react";
import "./SkillCardScroll.css";

const SkillCard = ({ title, desc }) => {
  const cardRef = useRef();
  const resetScroll = () => {
    let scrollPos = cardRef.current.scrollTop;
    while (cardRef.current.scrollTop > 0) {
      cardRef.current.scrollTop--;
    }
  };
  return (
    <div className="card" ref={cardRef} onMouseLeave={resetScroll}>
      <p className="card-title">{title}</p>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default SkillCard;
