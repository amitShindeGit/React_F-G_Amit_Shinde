import React, { useRef, useState } from "react";
import Input from "./Input";
import Wrapper from "./Wrapper";
import classes from "./Form.module.css";
import Radio from "./Radio";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Form = () => {
  //react router navigate
  const navigate = useNavigate();
  //Input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  //radio rating values
  const [firstQuestion, setFirstQuestion] = useState("");
  const [secondQuestion, setSecondQuestion] = useState("");
  const [thirdQuestion, setThirdQuestion] = useState("");
  const [fourQuestion, setFourQuestion] = useState("");

  //Error handling states
  const [error, setError] = useState(false); //for email field
  const [errorText, setErrorText] = useState(""); //for email field

  const [numError, setNumError] = useState(false);
  const [numErrorText, setNumErrorText] = useState("");

  const [nameError, setNameError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var localStorageData = JSON.parse(localStorage.getItem("data"));

  //Input change handlers
  const nameChangeHandler = (event) => {
    setName(event.target.value);

    if (event.target.value === "") {
      setNameError(true);
      setNameErrorText("Name field is required");
    } else {
      setNameError(false);
      setNameErrorText("");
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);

    if (event.target.value === "") {
      setError(true);
      setErrorText("Field is mandatory");
    } else {
      if (event.target.value.match(emailRegex)) {
        setError(false);
      } else {
        setError(true);
        setErrorText("Please check your email");
      }
    }
  };

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);

    if (event.target.value.length > 10 || event.target.value.length < 10) {
      setNumError(true);
      setNumErrorText("Number must be equal to 10");
    } else {
      setNumError(false);
      setNumErrorText("");
    }
  };

  //Radio change handlers
  const firstQChangeHandler = (event) => {
    setFirstQuestion(event.target.value);
  };

  const secondQChangeHandler = (event) => {
    setSecondQuestion(event.target.value);
  };

  const thirdQChangeHandler = (event) => {
    setThirdQuestion(event.target.value);
  };

  const fourthQChangeHandler = (event) => {
    setFourQuestion(event.target.value);
  };

  //empty all states
  const emptyHandler = () => {
    setName("");
    setEmail("");
    setNumber("");
    setFourQuestion("");
    setSecondQuestion("");
    setThirdQuestion("");
    setFourQuestion("");
  };

  //handles form submit
  const submitEmptyErrorHandler = () => {
    setError(true);
    setNameError(true);
    setNumError(true);
    setNameErrorText("Name field is required");
    setNumErrorText("Number field is required");
    setErrorText("Email is required");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //dividing data into four questions each
    const data = [
      {
        name: name,
        email: email,
        number: "+91-" + number,
        question:
          "Please rate the quality of the service you received from your host",
        rating: firstQuestion,
      },
      {
        name: name,
        email: email,
        number: "+91-" + number,
        question: "Please rate the quality of your beverage.",
        rating: secondQuestion,
      },
      {
        name: name,
        email: email,
        number: "+91-" + number,
        question: "Was our restaurant clean?",
        rating: thirdQuestion,
      },
      {
        name: name,
        email: email,
        number: "+91-" + number,
        question: "Please rate your overall dining experience.",
        rating: fourQuestion,
      },
    ];

    if (
      !error &&
      !numError &&
      !nameError &&
      firstQuestion &&
      secondQuestion &&
      thirdQuestion &&
      fourQuestion
    ) {
      if (name && email && number) {
        if (!localStorageData) {
          localStorage.setItem("data", JSON.stringify(data));
          emptyHandler();
          toast.success("Thank you for completing the information");
        } else {
          localStorage.setItem(
            "data",
            JSON.stringify(localStorageData.concat(data))
          );
          toast.success("Thank you for completing the information");
        }

        navigate("/feedback");
      } else {
        if (!name) {
          setNameError(true);
          setNameErrorText("Name field is required");
        }

        if (!email) {
          setError(true);
          setErrorText("Email is required");
        }

        if (!number) {
          setNumError(true);
          setNumErrorText("Number field is required");
        }
      }
    } else {
      toast.error("Please fill all the fields.");
      if (
        name === "" &&
        email === "" &&
        number === "" &&
        (!firstQuestion || !secondQuestion || !thirdQuestion || !fourQuestion)
      ) {
        submitEmptyErrorHandler();
      }
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <p style={{ color: "#2A62B7" }}>Aromatic Bar</p>
        <p style={{ color: "#787878" }}>
          {" "}
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.
        </p>
        <div className={classes.formcontainer}>
          <form onSubmit={submitHandler}>
            <div className={classes.main}>
              <div className={classes.inputs}>
                <Input
                  nameError={nameError}
                  nameErrorText={nameErrorText}
                  onChange={nameChangeHandler}
                  type="name"
                />
                <Input
                  error={error}
                  errorText={errorText}
                  onChange={emailChangeHandler}
                  type="email"
                />
                <Input
                  numError={numError}
                  numErrorText={numErrorText}
                  onChange={numberChangeHandler}
                  type="number"
                />
              </div>

              <div className={classes.radios}>
                <p>
                  Please rate the quality of the service you received from your
                  host
                </p>
                <Radio onChange={firstQChangeHandler} name="ques1" />
                <p> Please rate the quality of your beverage</p>
                <Radio onChange={secondQChangeHandler} name="ques2" />
                <p> Was our restaurant clean?</p>
                <Radio onChange={thirdQChangeHandler} name="ques3" />
                <p>Please rate your overall dining experience</p>
                <Radio onChange={fourthQChangeHandler} name="ques4" />
              </div>
            </div>
            <button type="submit" className={classes.submit}>
              Submit
            </button>
          </form>
        </div>

        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default Form;
