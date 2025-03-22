import { CiMedal } from "react-icons/ci";
import { LiaUserPlusSolid } from "react-icons/lia";
import { TbAffiliate } from "react-icons/tb";

export default function Relax() {
    return (
        <section className='home-relax py-24 bg-[url("../public/images/service-bg.jpg")] bg-no-repeat'>
            <div className="container">
                <div className="flex align-items gap-4">
                    <div className='flex flex-col w-[45%] justify-center'>
                        <h4 className="text-[16px] font-bold  uppercase max-w-max text-under-style">
                            Knows Best
                        </h4>
                        <h2 className="text-[40px] font-bold mb-6">
                            <span className="text-orange">Relax…</span> your Dentist
                        </h2>
                        <ul className='list-none flex gap-10 flex-col'>
                            <li className='flex gap-4'>
                                <CiMedal size={65} className='text-black p-3 border rounded-full w-[65px] h-[65px] min-w-[65px] min-h-[65px] w-[65px] h-[65px] min-w-[65px] min-h-[65px]' />
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Dental hygiene never forget!
                                    </p>
                                    <p className="font-normal text-gray">
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                    </p>
                                </div>
                            </li>
                            <li className='flex gap-4'>
                                <LiaUserPlusSolid size={65} className='text-black p-3 border rounded-full w-[65px] h-[65px] min-w-[65px] min-h-[65px]' />
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Don’t rush when you brush!
                                    </p>
                                    <p className="font-normal text-gray">
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                    </p>
                                </div>
                            </li>
                            <li className='flex gap-4'>
                                <TbAffiliate size={65} className='text-black p-3 border rounded-full w-[65px] h-[65px] min-w-[65px] min-h-[65px]' />
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Visit your dentist once in 6 months
                                    </p>
                                    <p className="font-normal text-gray">
                                        Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                    </p>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}
