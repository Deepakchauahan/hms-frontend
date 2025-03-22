import Image from "next/image";
import Link from "next/link";
import {
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiPaperPlaneTiltBold,
  PiXLogoBold,
  PiYoutubeLogoBold,
} from "react-icons/pi";
import Logo from "../../public/common/logo.svg";

export default function Footer() {
  return (
    <footer className={`footer border-b-2  border-blue  pt-20  bg-sectionBg `}>
      <div className="container">
        <div className="grid  grid-cols-6 gap-20 pb-14 ">
          <div className="col-span-2">
            <Image src={Logo} />
            <p className="my-4  text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it
            </p>
            <p className="my-4  text-[14px] font-bold">
              Call us - +91 - 1212 1212 12
            </p>
          </div>
          {Array.from(Array(2)).map((j) => (
            <div className="col-span-1" key={j}>
              <h5 className="font-bold border-b-2 border-orange max-w-max leading-8">
                Quick Links
              </h5>
              <ul className="list-none mt-6 flex flex-col gap-3">
                {Array.from(Array(5)).map((i) => (
                  <li key={i}>
                    <Link href="#!">Quick menu</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h5 className="font-bold border-b-2 border-orange max-w-max leading-8">
              Opening Hours
            </h5>
            <ul className="list-none mt-6 flex flex-col gap-3">
              {Array.from(Array(3)).map((i) => (
                <li key={i} className="flex items-center justify-between">
                  <span>Mon - Fri</span>
                  <span>9.00 - 17.00</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex w-full">
              <input
                type="email"
                placeholder="Send Enquiry"
                className="flex-1 rounded-ss-2xl ps-3 border border-orange"
              />
              <button
                className="p-3 bg-orange border border-orange rounded-ee-2xl"
                type="buttom"
              >
                <PiPaperPlaneTiltBold size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="py-3 border-t border-orange flex items-center justify-between">
          <p className=" font-semibold text-[14px]">
            All Right Reserved By Akriri Dentals
          </p>
          <ul className="list-none flex gap-4 items-center">
            <p className=" text-[14px] font-bold  ">Find us on:</p>
            <li>
              <Link href="#!" target="_blank">
                <PiInstagramLogoBold size={25} color="black" />
              </Link>
            </li>
            <li>
              <Link href="#!" target="_blank">
                <PiFacebookLogoBold size={25} color="black" />
              </Link>
            </li>
            <li>
              <Link href="#!" target="_blank">
                <PiYoutubeLogoBold size={25} color="black" />
              </Link>
            </li>
            <li>
              <Link href="#!" target="_blank">
                <PiXLogoBold size={25} color="black" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
