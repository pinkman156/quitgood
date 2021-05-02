import React from "react";
import "../styles/Form.css";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Element from "./Element";

export default function Form() {
  const [age, setAge] = useState(0);
  const [price, setPrice] = useState(0);
  const [avg, setAvg] = useState(0);
  const [brand, setBrand] = useState("");
  const [timeline, setTimeline] = useState("");
  const [flag, setFlag] = useState(0);
  const info = [
    "Your taste and smell have returned to normal",
    "Any smoke related bad breath should have gone completely",
    "The tooth staining build up should have reduced significantly",
    "Blood Circulation in your gums and teeth would be similar to that of non smoker",
    "Your energy should be returning to normal",
    "Your immunity and lung function should be improved",
    "Your risk of lung cancer should be reduced by from that of regular smoker",
    "Your blood circulation should be greatly improved",
    "Your risk of heart disease will be reduced to half to that of someone still smoking",
    "Your risk of heart attack should be same as someone who has mever smoked",
    "The texture and color of your gums should be back to natural",
  ];
  function checknum(id) {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById(id).value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 0) {
      return true;
    } else {
      return false;
    }
  }
  function handleSubmit(e) {
    if (checknum("price") || checknum("age") || checknum("ciggs")) return false;
    // if (isNaN(document.getElementById("brand").value)) return false;
    setFlag(1);
    document.getElementById("login-box").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "visible";
    e.preventDefault();
  }

  function period() {
    if (timeline === "week") return "a WEEK";
    if (timeline === "month") return "a MONTH";
    if (timeline === "year") return "an YEAR";
    if (timeline === "ten") return "TEN YEARS";
  }

  const percentage = 66;
  if (flag === 1) {
    var node;
    if (timeline == "week") {
      node = document.getElementById("week");
    } else if (timeline === "month") {
      node = document.getElementById("month");
    } else if (timeline === "year") {
      node = document.getElementById("year");
    } else if (timeline === "ten") {
      node = document.getElementById("ten");
    }
    if (node) node.style.visibility = "visible";
  }
  return (
    <div>
      <div id="login-box" class="login-box">
        <h2 className="title">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <label for="age">
            <h4 className="text">
              Enter age:{" "}
              <input
                id="age"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                required
              ></input>
            </h4>
          </label>

          <label for="money">
            <h4 className="text">
              Enter average cost of one ciggarette (in Rs) :{" "}
              <input
                id="price"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                required
              ></input>
            </h4>
          </label>
          <div className="cigg">
            <label for="ciggs">
              <h4 className="text">
                How many ciggs do you smoke in a day on an average:
                <input
                  id="ciggs"
                  type="number"
                  onChange={(e) => setAvg(e.target.value)}
                  required
                ></input>
              </h4>
            </label>
          </div>

          <label for="brand">
            <h4 className="text">
              Enter brand :
              <input
                type="text"
                onChange={(e) => setBrand(e.target.value)}
                required
              ></input>
            </h4>
          </label>
          <label for="timeline">
            <h4 className="time">
              Enter a timeline for quitting :
              <select id="sel" required>
                <option value="week">1 week</option>
                <option value="month">1 month</option>
                <option value="year">1 year</option>
                <option value="ten">10 years</option>
              </select>
            </h4>
          </label>

          <button
            type="submit"
            onClick={(e) => setTimeline(document.getElementById("sel").value)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      <img
        className="banner"
        src="https://us.123rf.com/450wm/lkeskinen/lkeskinen1705/lkeskinen170505298/77859172-quit-smoking-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clea.jpg?ver=6"
      ></img>
      <div id="results">
        <h1 className="reshead">
          Perks of quitting you will see in {period()}
        </h1>
        <div id="week">
          <Element
            name="Money"
            perc={25}
            info={`Money Saved: Rs ${avg * price * 7}`}
          />
          <Element name="Taste and Smell" perc={100} info={info[0]} />

          <Element name="Bad Breath" perc={100} info={info[1]} />

          <Element name="Tooth Staining" perc={60} info={info[2]} />
          <Element name="Gums and Teeth" perc={75} info={info[3]} />
          <Element name="Energy" perc={65} info={info[4]} />
        </div>
        <div id="month">
          <Element
            name="Money"
            perc={50}
            info={`Money Saved: Rs ${avg * price * 30}`}
          />

          <Element name="Gum Texture" perc={45} info={info[10]} />
          <Element name="Blood Circulation" perc={40} info={info[7]} />
          <Element name="Taste and Smell" perc={100} info={info[0]} />

          <Element name="Bad Breath" perc={100} info={info[1]} />

          <Element name="Tooth Staining" perc={90} info={info[2]} />
          <Element name="Gums and Teeth" perc={100} info={info[3]} />
          <Element name="Energy" perc={100} info={info[4]} />
        </div>
        <div id="year">
          <Element
            name="Money"
            perc={80}
            info={`Money Saved: Rs ${avg * price * 365}`}
          />

          <Element name="Immunity" perc={35} info={info[5]} />
          <Element name="Heart Disease" perc={50} info={info[8]} />
          <Element name="Immunity" perc={100} info={info[5]} />

          <Element name="Blood Circulation" perc={90} info={info[7]} />
          <Element name="Taste and Smell" perc={100} info={info[0]} />

          <Element name="Bad Breath" perc={100} info={info[1]} />

          <Element name="Tooth Staining" perc={100} info={info[2]} />
          <Element name="Gums and Teeth" perc={100} info={info[3]} />
          <Element name="Energy" perc={100} info={info[4]} />
        </div>
        <div id="ten">
          <Element
            name="Money"
            perc={99}
            info={`Money Saved: Rs ${avg * price * 3650}`}
          />
          <Element
            name="Reduced risk of heart attack"
            perc={1}
            info={info[9]}
          />
          <Element name="Lung Cancer" perc={70} info={info[6]} />
          <Element name="Gum Texture" perc={100} info={info[10]} />
          <Element name="Heart Disease" perc={100} info={info[8]} />
          <Element name="Immunity" perc={100} info={info[5]} />

          <Element name="Taste and Smell" perc={100} info={info[0]} />

          <Element name="Bad Breath" perc={100} info={info[1]} />
        </div>
      </div>
    </div>
  );
}
