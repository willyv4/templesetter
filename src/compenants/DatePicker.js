import { DayPicker } from "react-day-picker";
import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import "./DatePicker.css";

function Datepicker() {
  const [selectedDay, setSelectedDay] = useState("");

  for (let i = 0; i > 365; i++) {}

  const dayOfWeekMatcher: DayOfWeek = {
    dayOfWeek: [0, 1, 2, 3, 5, 6],
  };

  const disabledDays = [dayOfWeekMatcher];

  return (
    <div className="daypicker">
      <DayPicker
        defaultMonth={new Date(2022, 5, 10)}
        disabled={disabledDays}
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
      <div>
        <input
          className="input1"
          placeholder="Pick a date"
          value={selectedDay}
          onSelect={setSelectedDay}
        ></input>
      </div>
    </div>
  );
}

export default Datepicker;
