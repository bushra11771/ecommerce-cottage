import React from "react";
import imagewrapper from "../../assets/images/imagewrapper.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";

const home = () => {
  return (
    <>
      <div className="bg-[#1c645f]">
        <div className="block lg:grid grid-cols-2 gap-4 ">
          <div className=" w-full   mx-0">
            <img className=" shadow-xl" src={imagewrapper} alt="imagewrapper" />
          </div>
          <div className="w-full text-center">
            <h1 className="text-7xl font-extrabold max-w-xl mt-60 text-white ">
              Life is better at the cottage.
            </h1>

            <div className="mt-16 pl-4 flex">
              <button
                type="button"
                className="text-black bg-white hover:border-2 hover:text-white hover:bg-[#1c645f] focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
              >
                Shop All
              </button>
              <div className="pl-8">
                <button
                  type="button"
                  className="text-white border-2 bg-[#1c645f] hover:text-black hover:bg-white focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
                >
                  Shop by Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-16 p-8 bg-white">
        <div className="flex justify-between px-8">
          <div className="lg:text-4xl  text-[#1c645f] lg:w-[400px] font-extrabold">
          Cottage Communities
          </div>
          <div className="mt-6">
          <button
                  type="button"
                  className="text-[#1c645f] hover:bg-[#1c645f] hover:text-white mt-2 border-2 bg-white focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
                >
                  View All
                </button>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex direction-row gap-8">
            <img className="rounded-lg h-[25%] w-[25%]" src={image4} alt="image4" />
            <img className="rounded-lg h-[40%] w-[25%]" src={image3} alt="image3" />
            <img className="rounded-lg h-[25%] w-[25%]" src={image2} alt="image2" />
            <img className="rounded-lg h-[25%] w-[25%]" src={image5} alt="image5" />
            
          </div>
        </div>
      </div>

      <div className="py-16 px-16 relative">
        <img className="rounded-lg opacity-25" src={image1} alt="image1" 
        />
        <div className="absolute top-[40%] text-center items-center ml-32 px-20">
        <h1 className="font-extrabold text-5xl">Cottage fashion, proudly </h1>
         <h2 className="font-extrabold text-5xl mt-2 pl-8"> Canadian made.</h2>
        <p className="pl-4 mt-2">All of our products are designed, printed and shipped from Canada</p>
        <button
                  type="button"
                  className="text-black mt-2 border-2 bg-gray-100 focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
                >
                  Browse Collection
                </button>

        </div>

      </div>
    </>
  );
};

export default home;
