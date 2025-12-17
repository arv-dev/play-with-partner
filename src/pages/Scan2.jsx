import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qr from "../assets/images/qr.png"
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"

const Scan2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scan3"); // redirect after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // if user leaves early
      }, [navigate]);

  return (
  <div className="min-h-screen flex justify-center p-7">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5">
        <img src={backBtn} className="active:brightness-75 active:scale-95" onClick={() => navigate(-1)} />
      </button>
      <img src={header} className="mb-16" />

      {/* main section container */}
      <div className="text-[#DDDDDD] font-FD text-xs flex flex-col items-center gap-6">
        <h1 className="text-white font-LG text-3xl"> Scan QR Code</h1>
        <p>Place QR Inside the frame to scan </p>
        <img src={qr}/>
        <p>Scanning code...</p>
      </div>
    </div>
  </div>
  )
}

export default Scan2