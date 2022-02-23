import React from "react";
import Header from "./Header";
import classes from "./Feedback.module.css";
import Table from "./Table";

const Feedback = () => {
  var localStorageData = JSON.parse(localStorage.getItem("data"));  //getting localstorage

  return (
    <div>
      <Header />
      <div className={classes.feedbackContainer}>
        {localStorageData ? (
          <p style={{ fontSize: "2rem", color: "#585858", fontWeight: "500" }}>
            All Feedback
          </p>
        ) : (
          <p style={{ fontSize: "2rem", color: "#585858", fontWeight: "500" }}>
            No Feedback
          </p>
        )}
        {localStorageData && <Table />}
        <p></p>
      </div>
    </div>
  );
};

export default Feedback;
