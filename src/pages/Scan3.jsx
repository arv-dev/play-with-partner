import { useNavigate } from "react-router-dom";
import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"

const Scan3 = () => {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen flex justify-center p-7">
        <div className="w-full max-w-[420px] flex flex-col items-center">
            <button className="self-start pb-5">
                <img src={backBtn} className="active:brightness-75 active:scale-95" onClick={() => navigate(-1)} />
            </button>
            <img src={header} className="mb-16" />
        </div>
    </div>
    )
}

export default Scan3;