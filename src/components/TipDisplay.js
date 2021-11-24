import React from "react";

const TipDisplay = (props) => {
  let tipAmount = parseFloat(props.tipAmount);
  let total = parseFloat(props.total);
  return (
    <div className='bg-skin-fill text-skin-active  mb-5'>
      <div>
        <div className='mb-5 flex justify-between max-w-full lg:mb-10'>
          <label className='w-max'>
            <p className='text-white text-sm md:text-base xl:text-lg font-bold'>
              Tip Amount
            </p>{" "}
            <p className=' text-xs md:text-sm xl:text-base text-left text-skin-sub font-bold'>
              / person
            </p>
          </label>
          <input
            disabled
            value={`$${tipAmount.toFixed(2)}`}
            placeholder='$0.00'
            className='placeholder-primary placeholder-opacity-100 text-skin-active text-right outline-none bg-transparent text-2xl max-w-[60%] md:text-3xl xl:text-4xl font-bold'
          />
        </div>
        <div className='mb-8 flex justify-between max-w-full'>
          <label className='w-max'>
            <p className='text-white text-sm md:text-base xl:text-lg text-left font-bold'>
              Total
            </p>{" "}
            <p className='text-xs md:text-sm xl:text-base text-left text-skin-sub font-bold'>
              / person
            </p>
          </label>
          <input
            disabled
            value={`$${total.toFixed(2)}`}
            placeholder='$0.00'
            className='placeholder-primary  text-right outline-none bg-transparent text-2xl max-w-[60%] md:text-3xl xl:text-4xl font-bold'
          />
        </div>
      </div>
    </div>
  );
};

export default TipDisplay;
