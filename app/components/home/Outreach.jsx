import Image from 'next/image';
import Outreach1 from "../../../public/images/Outreach1.jpg";
import Outreach2 from "../../../public/images/Outreach2.jpg";
import Outreach3 from "../../../public/images/Outreach3.jpg";
import Outreach4 from "../../../public/images/Outreach4.jpg";
import Outreach5 from "../../../public/images/Outreach5.jpg";
import Outreach6 from "../../../public/images/Outreach6.jpg";


export default function Outreach() {
    return (
        <section className='home-outreach py-24 ' id="services">
            <div className="container">
                <div className="flex align-items gap-4">
                    <div className='flex flex-col justify-center'>
                        <h4 className="font-bold  uppercase max-w-max text-under-style">
                            OPD Dental checkup
                        </h4>
                        <h2 className="text-[40px] font-bold mb-4">
                            Dental <span className="text-orange">Outreach Programs</span>
                        </h2>
                    </div>
                </div>
                <div className='grid grid-cols-3  gap-6'>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image src={Outreach1} className="rounded-lg" alt='outreach'/>
                        <h3 className='font-bold mb-2 mt-3'>Dental Filling for Cavities
                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image alt='outreach' src={Outreach2} className="rounded-lg" />
                        <h3 className='font-bold mb-2 mt-3'>Regular Dental Cleaning
                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image alt='outreach' src={Outreach3} className="rounded-lg" />
                        <h3 className='font-bold mb-2 mt-3'>Tingling Sensation - Pulpitis
                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image alt='outreach' src={Outreach4} className="rounded-lg" />
                        <h3 className='font-bold mb-2 mt-3'>Relief - After The Dental Exam!

                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image alt='outreach' src={Outreach5} className="rounded-lg" />
                        <h3 className='font-bold mb-2 mt-3'>The Invisalign Alternative for Braces
                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>
                    <div className='border p-4 rounded-lg border-sectionBg hover:shadow-xl'>
                        <Image alt='outreach' src={Outreach6} className="rounded-lg" />
                        <h3 className='font-bold mb-2 mt-3'>Dentures Realignment
                        </h3>
                        <p className='fon-normal text-gray'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p>
                    </div>


                </div>

            </div>

        </section>
    )
}
