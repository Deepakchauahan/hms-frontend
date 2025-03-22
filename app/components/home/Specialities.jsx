import Link from "next/link";

export default function Specialities() {
    return (
        <section className='home-specialities relative py-24' id="specialities">
            <div className="container">
                <div className='flex gap-20'>
                    <div className='flex w-1/3 flex-col '>
                        <h2 className="text-[40px] font-bold mb-4">
                            <span className="text-orange"> Dental </span>Specialities
                        </h2>
                        <p className='text-gray'>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. To make the patagraph largerQuisque rutrum aenean this is necessary.</p>
                        <Link
                           href={"tel:+91 95604 85414"}
                            className="border border-2 border-blue py-3 px-10 mt-10 rounded-lg max-w-max font-bold text-blue"
                        >
                            Talk To Us
                        </Link>   </div>
                    <div className='flex w-1/3 flex-col gap-4'>
                        <div className='mb-2'>
                            <p className="font-bold text-lg mb-2 ">
                                01. Cosmetic Dentistry
                            </p>
                            <p className="font-normal text-gray">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.</p>
                        </div>
                        <div className='mb-2'>
                            <p className="font-bold text-lg mb-2 ">
                                03. Pediatric Dentistry
                            </p>
                            <p className="font-normal text-gray">
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            </p></div>
                    </div>
                    <div className='flex w-1/3 flex-col gap-4'>
                        <div className='mb-2'>
                            <p className="font-bold text-lg mb-2 ">
                                02. Restorative Dentistry
                            </p>
                            <p className="font-normal text-gray">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.</p>
                        </div>
                        <div className='mb-2'>
                            <p className="font-bold text-lg mb-2 ">
                                04. Geriatric Dentistry
                            </p>
                            <p className="font-normal text-gray">
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            </p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
