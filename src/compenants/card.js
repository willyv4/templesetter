import React, { useState } from "react";
import App from "./App";
// import Calendar from "./calender";
import "./card.css";

function CardButton() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => setShowComponent(!showComponent);

  return (
    <div>
      <div className="card">
        <img
          src="https://i.pinimg.com/originals/81/30/49/81304922760215795cc8cae05127cac2.png"
          class="card-img-top"
          alt="..."
        />
        <button className="interviewButton" onClick={handleClick}>
          SCHEDULE AN INTERVIEW
        </button>
        {showComponent && <App />}
      </div>
    </div>
  );
}

export default CardButton;
