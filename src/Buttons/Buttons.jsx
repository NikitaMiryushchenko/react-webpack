import React from "react";
import "./Buttons.css"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Features/Counter/CounterSlice";

const Buttons = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="reduxCounter">
      <h1>React - counter</h1>


      <button className="prettierButton" onClick={() => dispatch(increment())}>
        +1
      </button>
      <button className="prettierButton" onClick={() => dispatch(decrement())}>
        -1
      </button>
      <p className="bigPoint">{count}</p>
    </div>
  );
};

export default Buttons;
