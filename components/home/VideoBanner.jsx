import React from "react";

export default function VideoBanner() {
  return (
    <>
      <section className="home-banner relative  h-screen">
        <video
          autoPlay
          muted
          playsInline
          loop
          // controls
          className="w-screen h-screen object-cover"
          src={"./video/home_video.mp4"}
        ></video>
        <div className="home-banner-content absolute top-0 left-0  right-0 bottom-0 py-[100px] m-auto h-full flex items-center z-50">
          <div className="container">
            <div className="max-w-[35%] px-10 py-5 rounded-ss-2xl rounded-ee-2xl">
              <h4 className="text-[16px] font-bold text-white uppercase max-w-max text-under-style">
                We provide total
              </h4>
              <h2 className="text-[40px] font-bold text-white">
                Dental Care <span className="text-orange">Solution</span>
              </h2>
              <p className="font-medium text-white tracking-wide">
                Continually cultivate scalble methodologies avia theme backend a
                extend optial mrvice highly growth strategies.
              </p>
              <div className="flex gap-6 pt-8">
                <button
                  type="button"
                  className="border border-2 border-white py-3 px-5  rounded-lg  font-bold text-white"
                >
                  Learn More
                </button>
                <button
                  type="button"
                  className="border border-2 border-transparent py-3 px-5  rounded-lg font-bold text-white bg-orange "
                >
                  Book Appoinment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
