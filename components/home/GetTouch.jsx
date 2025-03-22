import React from 'react'

export default function GetTouch() {
    return (
        <section className='home-restore py-10 bg-blue'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div >
                        <h2 className="text-[36px] text-white font-medium mb-0">
                        Get in touch with us today <span className="text-orange border-b"><a href='tel:(02) 9955 4239'>(02) 9955 4239</a></span>
                        </h2>
                    </div>
                    <button
                        type="button"
                        className=" py-3 px-10 max-h-max  rounded-lg font-medium text-white border border-white "
                    >
                         Make an Appointment
                    </button>
                </div>
            </div>
        </section>
    )
}
