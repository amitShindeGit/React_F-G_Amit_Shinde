import React, { useRef } from "react";
import classes from "./Input.module.css";
import india from "../images/india.png";

const Input = ({
  type,
  error,
  errorText,
  onChange,
  onBlur,
  numErrorText,
  numError,
  nameError,
  nameErrorText,
}) => {
  return (
    <div className={classes.container}>
      <label>{type[0].toUpperCase() + type.slice(1)} </label>
      <input
        onBlur={onBlur}
        type={type}
        onChange={onChange}
        className={
          error
            ? type === "email"
              ? classes.errInput
              : classes.normalInput
            : numError
            ? type === "number"
              ? classes.errNumInput
              : classes.input
            : nameError
            ? type === "name"
              ? classes.errInput
              : classes.normalInput
            : type === "email" || type === "name"
            ? classes.normalInput
            : classes.input
        }
      ></input>
      {type === "number" && (
        <img
          className={classes.img}
          src={india}
          style={{ width: "25px", height: "18px" }}
        />
      )}
      {error && <p  className={classes.error}>{errorText}</p>}
      {nameError && <p className={classes.error}>{nameErrorText}</p>}
      {numError && <p className={classes.error}>{numErrorText}</p>}
    </div>
  );
};

export default Input;
