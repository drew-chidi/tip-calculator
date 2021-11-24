import React, { useState, useEffect, useCallback } from "react";
import { FaUser } from "react-icons/fa";
import TipDisplay from "./TipDisplay";
import { BiDollar } from "react-icons/bi";

const TipInput = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("0");
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [blur, setBlur] = useState(false);
  // const [activeTip, setActiveTip] = useState("0");
  const [persons, setPersons] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  // On Blur Function
  const onBlurHandler = () => {
    setBlur(true);
  };

  // Reset Function
  const resetHandler = () => {
    setBill("");
    setTip("0");
    setPersons("");
    setTipAmount("0.00");
    setTotal("0.00");
    setBlur(false);
    // setCustom("");
  };
  //Tip Selector

  const tipSelectHandler = (e) => {
    if (e.target.id === "custom") {
      setTip(parseFloat(e.target.value / 100));
      setCustom(e.target.value);
      setName("custom");
    } else {
      setTip(() => parseFloat(e.target.value));
      setCustom("");
      setName(e.target.value);
      console.log(tip);
    }
  };

  // Number of Persons Function
  const personsHandler = (e) => {
    setPersons(e.target.value);
  };

  const billHandler = (e) => {
    setBill(e.target.value);
  };

  const calculateTip = useCallback(() => {
    if (persons > 0) {
      setTipAmount((bill * parseFloat(tip)) / persons);
      setTotal((bill * (tip + 1)) / persons);
    } else {
      return null;
    }
  }, [bill, tip, persons]);

  useEffect(() => {
    calculateTip();
  }, [calculateTip]);

  return (
    <div className='p-6 bg-white rounded-t-2xl lg:flex justify-between lg:max-w-[1024px] m-auto md:text-xl xl:text-2xl lg:p-12'>
      <div className='lg:mr-20'>
        <label className='text-skin-main text-sm font-bold md:text-base xl:text-lg'>
          Bill
        </label>{" "}
        <div className='border-primary flex items-center bg-skin-input h-10 px-3 mt-2 mb-8 xl:h-12 border-hover'>
          <BiDollar className='text-skin-sub text-lg' />
          <input
            value={bill}
            onChange={billHandler}
            type='number'
            placeholder='0'
            className='w-full text-right outline-none bg-transparent text-skin-primary font-bold text-xl lg:text-2xl'
          />
        </div>
        <label className='text-skin-main text-sm font-bold md:text-base xl:text-lg'>
          Select Tip %
        </label>
        <div className='mt-3 mb-8 grid grid-cols-2 lg:grid-cols-3 gap-4 text-xl font-bold lg:text-2xl'>
          <button
            id='1'
            type='submit'
            className={`${
              name === "0.05" && "bg-focus"
            } bg-skin-fill rounded-md py-1 text-skin-secondary font-bold focus:text-skin-primary lg:py-1.5 hover:bg-skin-hover hover:text-skin-primary`}
            value='0.05'
            onClick={tipSelectHandler}
          >
            5%
          </button>
          <button
            id='2'
            type='submit'
            className={`${
              name === "0.1" && "bg-focus"
            } bg-skin-fill rounded-md py-1 text-skin-secondary font-bold focus:text-skin-primary lg:py-1.5 hover:bg-skin-hover hover:text-skin-primary`}
            value='0.1'
            onClick={tipSelectHandler}
          >
            10%
          </button>
          <button
            id='3'
            type='submit'
            value='0.15'
            className={`${
              tip === 0.15 && "bg-focus"
            } bg-skin-fill rounded-md py-1 text-skin-secondary font-bold focus:text-skin-primary lg:py-1.5 hover:bg-skin-hover hover:text-skin-primary`}
            onClick={tipSelectHandler}
          >
            15%
          </button>
          <button
            id='4'
            type='submit'
            className={`${
              tip === 0.25 && "bg-focus"
            } bg-skin-fill rounded-md py-1 text-skin-secondary font-bold focus:text-skin-primary lg:py-1.5 hover:bg-skin-hover hover:text-skin-primary`}
            value='0.25'
            onClick={tipSelectHandler}
          >
            25%
          </button>
          <button
            id='5'
            value='0.50'
            type='submit'
            className={`${
              tip === 0.5 && "bg-focus"
            } bg-skin-fill rounded-md py-1 text-skin-secondary font-bold focus:text-skin-primary lg:py-1.5 hover:bg-skin-hover hover:text-skin-primary`}
            onClick={tipSelectHandler}
          >
            50%
          </button>
          <input
            value={custom}
            id='custom'
            type='number'
            placeholder='Custom'
            className='placeholder-secondary border-primary text-skin-primary text-right pr-2 font-bold  border-hover'
            onChange={tipSelectHandler}
            // onChange={customHandler}
          />
        </div>
        <div className='flex justify-between'>
          <label className='text-skin-main text-sm font-bold md:text-base xl:text-lg'>
            Number of People
          </label>
          <p
            className={`${
              blur && persons <= 0 ? "block" : "hidden"
            } text-red-400 text-sm font-bold md:text-base xl:text-lg`}
          >
            Can't be zero
          </p>
        </div>
        <div
          className={`mt-1 mb-5 bg-skin-input h-10 px-3 flex justify-between items-center border-primary xl:h-12 ${
            blur && persons <= 0 ? "border-error" : null
          }`}
        >
          <FaUser className='text-skin-sub text-sm' />
          <input
            value={persons}
            type='number'
            onBlur={onBlurHandler}
            onChange={personsHandler}
            placeholder='0'
            className='w-full text-right outline-none bg-transparent lg:text-2xl font-bold '
          />
        </div>
      </div>
      <div className='flex flex-col bg-skin-fill pb-5 px-6 pt-7 lg:px-9 lg:pt-12 lg:pb-9 w-full text-center rounded-xl lg:max-w-sm justify-between'>
        <TipDisplay tipAmount={tipAmount} total={total} />
        <button
          className={`${
            bill !== "" || tip !== "0" || persons > 0 ? "bg-active" : null
          } w-full bg-skin-inactive  text-lg font-bold py-1.5 text-skin-primary rounded md:text-lg xl:text-xl hover:bg-skin-hover `}
          onClick={resetHandler}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipInput;
