import React from 'react'

export default function Restore() {
    return (
        <section className='home-restore py-10 bg-blue'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div >
                        <h2 className="text-[24px] text-white font-medium mb-2">
                            RESTORING THE SMILE INCREASES <span className="text-orange">THE FACE VALUE</span>
                        </h2>
                        <p className='font-normal text-white'>A smile is the doorway that opens your heart to others
                        </p>
                    </div>
                    <button
                        type="button"
                        className=" py-3 px-10 max-h-max  rounded-lg font-medium text-white border border-white "
                    >
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    )
}
