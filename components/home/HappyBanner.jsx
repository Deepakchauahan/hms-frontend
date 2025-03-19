import React from "react";
import { FaUserMd } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import {
  ExaminationIcon,
  HappyTeeth,
  ImplantTeeth,
  TechIcon,
} from "../icons/Icons";

export default function HappyBanner() {
  return (
    <div className="bellow-banner relative z-10">
      {/* <div className="container"> */}
      <ul className="list-none bg-orange grid grid-cols-5">
        <li className="rounede-lg flex flex-col items-center border-e border-white py-10 px-3">
          {/* <FaWheelchair size={60} color="white" className="mb-4" /> */}
          <div className="w-[60px] h-[60px] scale-125">
            <ExaminationIcon />
          </div>

          <h5 className="font-bold text-[20px] text-white mt-4">
            2 Millions +
          </h5>
          <p className="text-center text-[14px] text-white font-semibold">
            Happy Patients
          </p>
        </li>
        <li className="rounede-lg flex flex-col items-center border-e border-white py-10 px-3">
          <div className="w-[60px] h-[60px] scale-110">
            <HappyTeeth />
          </div>
          <h5 className="font-bold text-[20px] text-white mt-4">35,000 +</h5>
          <p className="text-center text-[14px] text-white font-semibold">
            Successful Ortho cases
          </p>
        </li>
        <li className="rounede-lg flex flex-col items-center border-e border-white py-10 px-3">
          <div className="w-[60px] h-[60px] ">
            <ImplantTeeth />
          </div>
          <h5 className="font-bold text-[20px] text-white mt-4">50,000 +</h5>
          <p className="text-center text-[14px] text-white font-semibold">
            Implants Placed
          </p>
        </li>
        <li className="rounede-lg flex flex-col items-center border-e border-white py-10 px-3">
          <FaUserMd size={60} color="white" />

          <h5 className="font-bold text-[20px] text-white mt-4">
            Certified Dentist
          </h5>
          <p className="text-center text-[14px] text-white font-semibold">
            Your Smile in Expert Hands
          </p>
        </li>
        <li className="rounede-lg flex flex-col items-center border-e border-white py-10 px-3">
          <div className="w-[60px] h-[60px] scale-150">
            <TechIcon />
          </div>
          <h5 className="font-bold text-[20px] text-white mt-4">
            New Technology
          </h5>
          <p className="text-center text-[14px] text-white font-semibold">
            Beyond Tomorrow Unveiling Frontiers
          </p>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
}
