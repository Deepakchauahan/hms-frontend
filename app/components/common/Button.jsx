import Link from "next/link";
import { PiPhoneCallBold } from "react-icons/pi";

export const ButtonCallUs = () => (
  <Link
    href={"tel:+91 95604 85414"}
    className="flex gap-2 items-center py-3 px-5 rounded-ss-2xl rounded-ee-2xl  bg-orange  text-white  font-semibold"
  >
    <PiPhoneCallBold size={25} /> +91 95604 85414
  </Link>
);
