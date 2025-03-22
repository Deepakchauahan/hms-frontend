import Image from 'next/image';
import AboutImg from "../../../public/images/easy-ways2.jpg";
import Link from 'next/link';


export default function About() {
    return (
        <section className='home-about py-24 ' id="about-us">
            <div className="container">
                <div className="flex align-items gap-4">
                    <div className='flex flex-col w-1/2 justify-center'>
                        <h4 className="text-[16px] font-bold  uppercase max-w-max text-under-style">
                            About Us
                        </h4>
                        <h2 className="text-[40px] font-bold mb-4">
                            Welcome to <span className="text-orange">Akriti Dental</span>
                        </h2>
                        <p className="font-normal mb-2 text-gray">
                            Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </p>
                        <p className="font-normal text-gray">
                            Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </p>
                        <Link
                           href={"tel:+91 95604 85414"}
                            className="border border-2 border-blue py-3 px-10 mt-10 rounded-lg max-w-max font-bold text-blue"
                        >
                            Talk To Us
                        </Link>
                    </div>
                    <div className='flex w-1/2 justify-end align-center'>
                        <Image src={AboutImg} className="max-w-[80%] rounded-ss-2xl rounded-ee-2xl" alt='about' />
                    </div>
                </div>

            </div>

        </section>
    )
}
