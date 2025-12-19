import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"
import profileSm from "../assets/images/profile-sm.png"

const Generate1 = () => {

  const navigate = useNavigate();

  const generateRoomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
  };

  const [roomCode, setRoomCode] = useState("");
  useEffect(() => {
    setRoomCode(generateRoomCode());
  }, []);

  return (
  <div className="min-h-screen flex justify-center p-6">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5" onClick={() => navigate(-1)}>
        <img src={backBtn} className="active:brightness-75 active:scale-95" />
      </button>
      <img src={header} className="mb-16" />

      {/* main section container */}
      <div className="w-full flex flex-col items-center space-y-3">

        {/* code section */}
        <div className="flex flex-col items-center text-center w-[90%] font-FD text-white py-3.5 rounded-lg bg-[#30AD17]">
          <h2 className="text-3xl mb-3 tracking-wider">{roomCode}</h2>
          <p>Share your room code with your partner</p>
          <p>or</p>
          <input
            className="p-3 mt-2 mx-auto bg-white border border-[#BFBEB9] rounded-lg placeholder:text-[#818181] placeholder:text-sm font-IN text-black outline-none"
            type="text" placeholder="Enter Your Partner Code to Join" maxlength="6"
          />
        </div>

        {/* versus section */}
        <div className="flex flex-col items-center w-[90%] text-white rounded-2xl space-y-2">
          <p className="font-FD text-[#30AD17] ">You</p>

          {/* player info container */}
          <div className="flex items-center w-full gap-3 pl-2 bg-[#021934] rounded-2xl">
            <div className="w-[10%] text-center font-FD text-[#30AD17]">123</div>
            <div className="flex items-center grow p-2 gap-3 font-IN m-0.5 rounded-r-2xl rounded-l-4xl bg-[#084A97]">
              <img src={profileSm} alt="profile picture" />
              <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-1">
                <span>Name</span>
                <span>:</span>
                <span>Gerwin Nyaw</span>
                <span>LRN</span>
                <span>:</span>
                <span>105115 120415</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Generate1;