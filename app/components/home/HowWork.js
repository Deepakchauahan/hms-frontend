"use client"
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Work1 from "../../../public/images/work1.png";
import Work2 from "../../../public/images/work2.png";
import Work3 from "../../../public/images/work3.png";
import Work4 from "../../../public/images/work4.png";
import { WorkIcon1, WorkIcon2, WorkIcon3, WorkIcon4 } from '../icons/Icons';

export default function HowWork() {
    return (
        <section className='home-how-work py-24 ' id="how-work">
            <div className="container">
                <div className="flex align-items gap-4 flex-col">
                    <div className='flex flex-col justify-center'>
                        <h4 className="text-[16px] font-bold  uppercase max-w-max text-under-style">
                            How It Work
                        </h4>
                        <h2 className="text-[40px] font-bold mb-4">
                            How Our <span className="text-orange">Dental Care </span> Works
                        </h2>
                    </div>
                    <Tabs className="flex gap-10 ">
                        <TabList className="flex flex-col w-1/2 gap-4">
                            <Tab className={"bg-sectionBg p-3 rounded-lg shadow-md"}> <div className='flex gap-4 items-start'>
                                <span className='text-black p-3 border border-iconBorder rounded-full mt-1'><WorkIcon1 /></span>
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Comfortable and Precise Treatment
                                    </p>
                                    <p className="font-normal text-gray">
                                        Includes follow-up care & guidance maintaining your results, with our team always available to answer.                                    </p>
                                </div>
                            </div></Tab>
                            <Tab className={"bg-sectionBg p-3 rounded-lg shadow-md"}> <div className='flex gap-4 items-start'>
                                <span className='text-black p-3 border border-iconBorder rounded-full mt-1'><WorkIcon2 /></span>
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Post-Treatment Care and Follow-Up
                                    </p>
                                    <p className="font-normal text-gray">
                                        Is your treatment phase, where we use the latest  technology techniques to deliver precise, gentle care.
                                    </p>                                </div>
                            </div></Tab>
                            <Tab className={"bg-sectionBg p-3 rounded-lg shadow-md"}> <div className='flex gap-4 items-start'>
                                <span className='text-black p-3 border border-iconBorder rounded-full mt-1'><WorkIcon3 /></span>
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Personalized Treatment Plan
                                    </p>
                                    <p className="font-normal text-gray">
                                        We develop a personalized treatment tailored to your  specific requirement, ensuring informed every option.
                                    </p>
                                </div>
                            </div></Tab>
                            <Tab className={"bg-sectionBg p-3 rounded-lg shadow-md"}> <div className='flex gap-4 items-start'>
                                <span className='text-black p-3 border border-iconBorder rounded-full mt-1'><WorkIcon4 /></span>
                                <div>
                                    <p className="font-bold text-lg mb-2 ">
                                        Your First Consultation
                                    </p>
                                    <p className="font-normal text-gray">

                                        Begins with a warm welcome & thorough consultation,  where we take the time to understand needs, goals.
                                    </p>
                                </div>
                            </div></Tab>
                        </TabList>
                        <div className='flex w-1/2 flex-col image-container'>
                            <TabPanel className={"w-full"}>
                                <Image src={Work1} width={670} height={480} className="w-full max-w-[670px] max-h-[480px] object-cover h-full rounded-ss-2xl rounded-ee-2xl" alt='about' />
                            </TabPanel>
                            <TabPanel className={"w-full"}>
                                <Image src={Work2} width={670} height={480}  className="w-full max-w-[670px] max-h-[480px] object-cover h-[480px] rounded-ss-2xl  rounded-ee-2xl" alt='about' />
                            </TabPanel>
                            <TabPanel className={"w-full"}>
                                <Image src={Work3} width={670} height={480}  className="w-full max-w-[670px] max-h-[480px] object-cover h-[480px] rounded-ss-2xl  rounded-ee-2xl" alt='about' />
                            </TabPanel>
                            <TabPanel className={"w-full"}>
                                <Image src={Work4} width={670} height={480}  className="w-full max-w-[670px] max-h-[480px] object-cover h-[480px] rounded-ss-2xl  rounded-ee-2xl" alt='about' />
                            </TabPanel>

                        </div>

                    </Tabs>
                </div>
            </div>
        </section>
    )
}
