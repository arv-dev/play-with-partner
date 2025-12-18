import backBtn from "../assets/images/back-btn.png";
import header from "../assets/images/header.png"
import profileSm from "../assets/images/profile-sm.png"

const Generate2 = () => {
  return (
  <div className="min-h-screen flex justify-center p-6">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5">
        <img src={backBtn} className="active:brightness-75 active:scale-95" />
      </button>
      <img src={header} className="mb-24" />
    </div>
  </div>
  )
}

export default Generate2;