import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo-full.svg";
import githubLogo from "../assets/icon-github.svg";
import patternTicket from "../assets/pattern-ticket.svg";
const TicketConfirmation: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const location = useLocation();
  const { fullName, email, avatar, gitHubUsername } = location.state || {};
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  useEffect(() => {
    if (avatar) {
      const objectUrl = URL.createObjectURL(avatar);
      setAvatarUrl(objectUrl);

      // Clean up the URL when component unmounts or file changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [avatar]);
  return (
    <div className="max-w-4xl flex flex-col items-center justify-center">
      <h1 className="mt-12 text-neutral-0 text-5xl max-[430px]:text-2xl font-bold text-center text-shadow-lg font-inconsolata leading-tight">
        Congrats,{" "}
        <span className="bg-gradient-text text-transparent bg-clip-text">
          {fullName}
        </span>
        ! Your ticket is ready.
      </h1>
      <p className="mt-4 px-16 text-neutral-300 text-xl max-[430px]:text-md2 max-[430px]:px-4 text-center font-inconsolata opacity-80 tracking-wide">
        We've emailed your ticket to{" "}
        <span className="text-orange-500">{email}</span> and will send updates
        in the run up to the event.
      </p>
      <div className="mt-[7rem] max-[450px]:mt-[4rem] w-full max-w-[600px] h-[280px] max-[450px]:h-auto relative rounded-xl overflow-hidden">
        <img 
          src={patternTicket} 
          alt="ticket background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 p-7 max-[450px]:p-4 h-full w-full">
          <div className="flex flex-col mb-5 max-[450px]:mb-3 gap-4 max-[450px]:gap-2 text-neutral-0">
            <img src={logo} alt="title" className="w-1/2 max-[450px]:w-2/3" />
            <span className="text-md2 max-[450px]:text-sm text-neutral-300 font-inconsolata pl-[4rem] max-[450px]:pl-10">
              {formattedDate} / Casablanca, Morocco
            </span>
          </div>
          
          <div className="flex flex-row gap-4 max-[450px]:gap-3 mt-10 max-[450px]:mt-4 text-neutral-0">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="avatar"
                className="w-20 h-20 max-[450px]:w-12 max-[450px]:h-12  max-[450px]:rounded-md rounded-xl  object-cover"
              />
            ) : (
              <div className="w-20 h-20 max-[450px]:w-14 max-[450px]:h-14 rounded-xl bg-neutral-700"></div>
            )}
            <div className="flex flex-col gap-2 max-[450px]:gap-1 justify-center">
              <span className="text-xl max-[450px]:text-md text-neutral-0 font-inconsolata">
                {fullName}
              </span>
              <div className="flex flex-row gap-2 max-[450px]:gap-1">
                <img src={githubLogo} alt="github" className="w-6 h-6 max-[450px]:w-4 max-[450px]:h-4 flex justify-center items-center" />
                <span className="text-md max-[450px]:text-sm text-neutral-300 font-inconsolata opacity-80">
                  {gitHubUsername}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
