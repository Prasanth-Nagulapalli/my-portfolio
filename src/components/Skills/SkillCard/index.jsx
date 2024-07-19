import React, { forwardRef } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./SkillCard.css";

const SkillCard = forwardRef(({ title, data }, ref) => {
  return (
    <div ref={ref} className="skill__card">
      <h3>{title}</h3>
      <div className="skill__content">
        {data.map((list, index) => (
          <article className="skill__details" key={index}>
            <BsPatchCheckFill className="skill__icon" />
            <div>
              <h4 className="skill__name">{list.skill}</h4>
              <small className="text__muted skill__level">{list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});

export default SkillCard;
