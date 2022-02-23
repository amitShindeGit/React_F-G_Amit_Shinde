import React from "react";
import classes from "./Radio.module.css";

const Radio = ({ name, onChange }) => {
  
  return (
    <div>
      <input
        className={classes.radioInput}
        onChange={onChange}
        type="radio"
        id="excel"
        name={name}
        value="Excellent"
      ></input>
       {" "}
      <label className={classes.radioLabel} htmlFor="excel">
        Excellent
      </label>
       {" "}
      <input
        className={classes.radioInput}
        onChange={onChange}
        type="radio"
        id="good"
        name={name}
        value="Good"
      ></input>
       {" "}
      <label className={classes.radioLabel} htmlFor="good">
        Good
      </label>
       {" "}
      <input
        className={classes.radioInput}
        onChange={onChange}
        type="radio"
        id="fair"
        name={name}
        value="Fair"
      ></input>
       {" "}
      <label className={classes.radioLabel} htmlFor="fair">
        Fair
      </label>
      <input
        className={classes.radioInput}
        onChange={onChange}
        type="radio"
        id="bad"
        name={name}
        value="Bad"
      ></input>
       {" "}
      <label className={classes.radioLabel} htmlFor="bad">
        Bad
      </label>
    </div>
  );
};

export default Radio;
