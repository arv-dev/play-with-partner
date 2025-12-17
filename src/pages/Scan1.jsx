import { useNavigate } from "react-router-dom";
import "../index.css";
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"
import profileLg from "../assets/images/profile-lg.png"
import myQr from "../assets/images/my-qr.png"

const Scan1 = () => {
  const navigate = useNavigate();
  
  return (
  <div className="min-h-screen flex justify-center p-7">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5" onClick={() => navigate(-1)}>
        <img src={backBtn} className="active:brightness-75 active:scale-95" />
      </button>
      <img src={header} className="mb-16" />

      {/* main section container */}
      <div className="text-white flex flex-col items-center relative w-[90%] bg-[#30AD17] rounded-3xl pt-16 pb-11 px-11 mb-7 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <img src={profileLg} className="absolute -top-14" />
        <h2 className="font-LG text-[20px] mb-2.5">Gerwin Nyaw</h2>
        <p className="font-FD text-xs text-[#DDDDDD] mb-5">Scan My QR Code</p>

        {/* container of qr */}
        <div className="rounded-[20px] bg-[#D9D9D9] p-5">
          <img src={myQr} />
        </div>
      </div>
      <button
        onClick={() => navigate("/scan2")}
        className="font-LG text-2xl text-white cursor-pointer bg-green-600 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.25),inset_-10px_-10px_20px_rgba(0,0,0,0.25)] rounded-xl w-[80%] py-2">Scan Code</button>
    </div>
  </div>
  )
}

export default Scan1;