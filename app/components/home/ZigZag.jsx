import Image from 'next/image';
import AboutImg2 from "../../../public/images/img10.jpg";
import AboutImg1 from "../../../public/images/img7.jpg";


export default function ZigZag() {
    return (
        <section className='home-about py-24 '>
            <div className="container">
                <div className="flex align-items gap-4">
                    <div className='flex w-1/2 justify-start align-center'>
                        <Image src={AboutImg2} className="max-w-[80%]" alt='about'/>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                        <h2 className="text-[40px] font-bold mb-4">
                            <span className="text-orange">Implants </span>in Dentistry
                        </h2>
                        <p className="font-normal text-gray">
                            At YOUNG NIGHT glamor day event dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus
                            varius laoreet. Quisque rutrum. Aenean imperdiet.
                        </p>
                    </div>
                </div>
                <div className="flex align-items gap-4">
                    <div className='flex flex-col w-1/2 justify-center'>
                        <h2 className="text-[40px] font-bold mb-4">
                            The <span className="text-orange">Role of Dental </span>Implants
                        </h2>
                        <p className="font-normal text-gray">
                            At YOUNG NIGHT glamor day event dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus
                            varius laoreet. Quisque rutrum. Aenean imperdiet.
                        </p>
                    </div>
                    <div className='flex w-1/2 justify-end align-center'>
                        <Image src={AboutImg1} className="max-w-[80%]" alt='about'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
