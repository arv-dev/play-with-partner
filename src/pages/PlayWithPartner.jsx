import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"

const PlayWithPartner = () => {

    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!activeButton) return; // do nothing if no button is selected

        if (activeButton === "generate") {
            navigate("/generate1");
        } else if (activeButton === "scan") {
            navigate("/scan1");
        }
    };

    return (
        <div className="min-h-screen flex justify-center p-6">
            <div className="w-full max-w-[420px] flex flex-col items-center">
                <button className="self-start pb-5">
                    <img src={backBtn} className="active:brightness-75 active:scale-95" />
                </button>
                <img src={header} className="mb-24" />

                {/* main section */}
                <div className="flex flex-col text-center items-center w-full gap-7">
                    <h2 className="font-LG text-white text-xl">Choose an invitation method for your partner</h2>

                    {/* button container */}
                    <div className="flex flex-col text-sm items-center font-FD text-white w-full gap-3">
                        <button
                            className={`rounded-lg w-[75%] py-4 cursor-pointer ${ activeButton === "generate" ? "bg-[#002754] border border-white" : "bg-[#021934]"}`}
                            onClick={() => {setActiveButton(prev => (prev === "generate" ? null : "generate"))}}
                        >Generate Code to Invite</button>
                        <p>or</p>
                        <button
                            className={`rounded-lg w-[75%] py-4 mb-7 cursor-pointer ${ activeButton === "scan" ? "bg-[#002754] border border-white" : "bg-[#021934]"}`}
                            onClick={() => {setActiveButton(prev => (prev === "scan" ? null : "scan"))}}
                        >Scan QR Code to Invite</button>

                        <button
                            onClick={handleContinue}
                            className={`bg-[#2FAA17] rounded-lg w-[75%] py-4 cursor-pointer transition-opacity duration-[500ms] ease-in-out ${activeButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayWithPartner;