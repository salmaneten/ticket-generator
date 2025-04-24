import React from 'react';
import { useLocation } from 'react-router-dom';


const TicketConfirmation: React.FC  = () => {
  const location = useLocation();
  const { fullName, email } = location.state || {};

  return (
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">    

    <h1 className="mt-12 text-neutral-0 text-5xl max-[430px]:text-2xl font-bold text-center text-shadow-lg font-inconsolata leading-tight">
    Congrats, <span className="bg-gradient-text text-transparent bg-clip-text">{fullName}</span>! Your ticket is ready.
    </h1>
    <p className="mt-4 px-16 text-neutral-300 text-xl max-[430px]:text-md2 max-[430px]:px-4 text-center font-inconsolata opacity-80 tracking-wide">
      We've emailed your ticket to <span className="text-orange-500">{email}</span> and will send updates in the run up to the event.
    </p>
  </div>
);
};

export default TicketConfirmation;