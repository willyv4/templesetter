import { useRef, useState } from "react";
import { supabase } from "../client";
import { DayPicker } from "react-day-picker";
import "./App.css";
import "./DatePicker.css";
import * as React from "react";

function App() {
  const [full_name, setFull_Name] = useState("");
  const [ward, setWard] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  // const [availability, setAvailability] = useState("false");
  const [supabaseErr, setSupabaseErr] = useState("");

  const [successMsgs, setSuccessMsgs] = useState("");
  const [loading, setLoading] = useState(false);
  let timer3ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = 0;

    if (count === 0) {
      submitData(e, full_name, ward, phone, email, time, day);
    } else {
      if (timer3ref.current) {
        clearTimeout(timer3ref.current);
      }
    }
  };

  const submitData = async function (
    e,
    full_name,
    ward,
    phone,
    email,
    time,
    day
  ) {
    setLoading(true);
    const { data, error } = await supabase
      .from("interviews")
      .insert([{ full_name, ward, phone, email, time, day }], {
        returning: "minimal",
      });
    if (error) {
      setSupabaseErr("sorry could not send data");
      console.log(error);
    } else {
      setSuccessMsgs(
        "Successfully received 🎆 !! I will respond as soon as possible"
      );
    }
    setLoading(false);
    alert(
      "Thanks for scheduling, I'll reach out to confirm your appointment within 24hrs."
    );
    e.target.reset();

    setFull_Name("");
    setWard("");
    setPhone("");
    setEmail("");
    setTime("");
    setDay("");
  };

  const dayOfWeekMatcher: DayOfWeek = {
    dayOfWeek: [0, 1, 2, 3, 5, 6],
  };
  const disabledDays = [dayOfWeekMatcher];

  return (
    <div className="center">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formTitle_button_container">
          <h2 className="formTitle">Interview Scheduler</h2>
          <a href="https://simplyschedule.netlify.app/">
            <div className="closeButton">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="row">
          <div className="columb1">
            <input
              className="inputs"
              type="text"
              value={full_name}
              placeholder="Full Name"
              onChange={(e) => setFull_Name(e.target.value)}
            />
            <input
              className="inputs"
              type="text"
              placeholder="Ward"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
            />
            <input
              className="inputs"
              type="number"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="columb2">
            <input
              className="inputs"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputs"
              list="times"
              type="text"
              value={time}
              placeholder="Time"
              onChange={(e) => setTime(e.target.value)}
            />
            <datalist id="times">
              <option value="7:50PM" />
              <option value="7:40PM" />
              <option value="7:30PM" />
            </datalist>
          </div>
        </div>
        <div className="daypicker">
          <DayPicker
            defaultMonth={new Date(2022, 5, 10)}
            disabled={disabledDays}
            mode="single"
            selected={day}
            onSelect={setDay}
            onChange={(e) => setDay(e.target.value)}
          />
          <div>
            <input
              className="input1"
              placeholder="Pick a date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            ></input>
          </div>
        </div>
        <input
          className="inputsSubmit"
          type="submit"
          value={loading === true ? "waiting..." : "Submit"}
          disabled={loading}
        />
        {/* <span style={{ color: "lightgreen", display: "block" }}>
          {successMsgs}
        </span> */}
        <span style={{ color: "red", display: "block" }}>{supabaseErr}</span>
      </form>
    </div>
  );
}

export default App;
