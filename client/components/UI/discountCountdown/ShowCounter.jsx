import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className=" flex rtl-row-reverse items-center absolute top-[70%] sm-3/4">
      <DateTimeDisplay value={days} type={"days"} isDanger={days <= 3} />
      <p className="font-bold md:mx-2 mx-1 text-2xl md:text-4xl text-palette-secondary">:</p>
      <DateTimeDisplay value={hours} type={"hours"} isDanger={false} />
      <p className="font-bold  md:mx-2 mx-1 text-2xl md:text-4xl text-palette-secondary">:</p>
      <DateTimeDisplay value={minutes} type={"mins"} isDanger={false} />
      <p className="font-bold  md:mx-2 mx-1 text-2xl md:text-4xl text-palette-secondary">:</p>
      <DateTimeDisplay value={seconds} type={"seconds"} isDanger={false} />
    </div>
  );
};

export default ShowCounter;

