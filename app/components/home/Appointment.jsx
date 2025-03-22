

export default function Appointment() {
    return (
        <section className='home-appointment py-24 relative' id="contact-us">
            <div className="container">
                <div className="flex justify-start gap-4 relative z-10">
                    <div className='w-1/2 flex justify-end pe-10'>
                        <div className='flex flex-col max-w-[400px] w-full'>
                            <h2 className="text-[40px] font-bold mb-6">
                                Working <span className="text-orange">Hours</span>
                            </h2>
                            <ul className='list-none flex gap-3 flex-col'>
                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Monday :</strong>
                                    <span className='text-gray'>10:00 am - 4:00 pm</span>
                                </li>
                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Tuesday :</strong>
                                    <span className='text-gray'>09:00 am - 3:00 pm</span>
                                </li>
                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Wednesday :</strong>
                                    <span className='text-gray'>11:00 am - 5:00 pm</span>
                                </li>
                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Thursday :</strong>
                                    <span className='text-gray'>09:00 am - 3:00 pm</span>
                                </li>

                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Friday  :</strong>
                                    <span className='text-gray'>12:00 am - 6:00 pm</span>
                                </li>
                                <li className='flex gap-4 justify-between border-b pb-1 border-gray'>
                                    <strong>Saturday  :</strong>
                                    <span className='text-gray'>10:00 am - 2:00 pm</span>
                                </li>
                                <li className='flex gap-4 justify-between'>
                                    <strong>Sunday  :</strong>
                                    <span className='text-gray'>10:00 am - 2:00 pm</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex w-1/2 justify-start'>
                        <div className='flex flex-col max-w-[500px] w-full ps-10'>
                            <h2 className="text-[40px] font-bold mb-6 text-white">
                                Book an <span className="text-orange">Appointment</span>
                            </h2>
                            <form className='flex flex-col appointment-form gap-2'>
                                <input placeholder='Name' />
                                <input placeholder='Phone' />
                                <select placeholder="Type of Sevice">
                                    <option>Type of Service</option>
                                    <option>Fixing Implants</option>
                                    <option>Crowns & Bridge Repair</option>
                                    <option>Root Canal</option>
                                    <option>Dental Filling</option>
                                </select>
                                <input placeholder='' type='date' />

                                <button
                                    type="button"
                                    className="border border-1 border-orange py-3 px-10 mt-4 rounded-lg  font-normal text-white"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
