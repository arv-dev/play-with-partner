import { useNavigate } from "react-router-dom";
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"
import profileLg from "../assets/images/profile-lg.png"

const Scan3 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center p-7 bg-[#084A97]">
            <div className="w-full max-w-[420px] flex flex-col items-center">
                {/* back button */}
                <button className="self-start pb-5">
                <img
                    src={backBtn}
                    className="active:brightness-75 active:scale-95"
                    onClick={() => navigate(-1)}
                />
                </button>
                
                {/* header ribbon */}
                <img src={header} className="mb-16" />

                {/* CARD */}
                <div className="flex flex-col w-[90%] mb-7 text-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                    {/* GREEN TOP */}
                    <div className="flex flex-col items-center relative pt-16 pb-3 text-white bg-[#30AD17] rounded-t-3xl">
                        <img
                            src={profileLg}
                            className="absolute -top-14 w-28 h-28 rounded-full"
                        />
                        <h2 className="font-LG text-xl">GERWIN NYAW</h2>
                    </div>
                    {/* BLUE BOTTOM */}
                    <div className="min-h-72 text-center py-4 px-5 font-LG bg-[#004C99] rounded-b-3xl">
                        <h2 className="mb-6 text-lg">Details</h2>
                        <div className="flex justify-around pb-3 px-6 font-FD text-xs mb-4 border-b border-[#30AD17]">
                            <p>LRN</p>
                            <p>105115 120415</p>    
                        </div>
                        <div className="flex justify-around pb-3 px-6 font-FD text-xs mb-4 border-b border-[#30AD17]">
                            <p>School</p>
                            <p>eme eme</p>
                        </div>
                    </div>
                </div>
                <button
                    className="font-LG text-2xl text-white cursor-pointer bg-green-600 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.25),inset_-10px_-10px_20px_rgba(0,0,0,0.25)] rounded-xl w-[80%] py-2"
                >Invite</button>
            </div>
        </div>
    )
}

export default Scan3;