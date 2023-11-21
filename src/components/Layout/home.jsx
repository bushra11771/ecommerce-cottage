import React from "react";
import imagewrapper from "../../assets/images/imagewrapper.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";
import image8 from "../../assets/images/image8.png";
import image9 from "../../assets/images/image9.png";
import tees1 from "../../assets/images/tees1.png";
import tees2 from "../../assets/images/tees2.png";
import tees3 from "../../assets/images/tees3.png";
import image11 from "../../assets/images/image11.png";
import image12 from "../../assets/images/image12.png";
import image13 from "../../assets/images/image13.png";

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
          <div className="lg:text-4xl text-center ml-80  text-[#1c645f] lg:w-[400px] font-extrabold">
            Featured Hoodies
          </div>
        </div>
        <div className="pt-8">
          <div className="flex gap-4">
            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image6} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                  Fawn Island Floaty Skeleton Champion Hoodie
                </h1>
                <span className="mt-8">$64.99</span>
                <div className="flex items-center mt-4 mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[200px] w-[900px] relative">
              <img className=" rounded-lg" src={image7} alt="image3" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                  Grand Bend Modern Hoodie
                </h1>
                <span>$44.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[900px] w-[900px] relative">
              <img src={image8} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                  Grand Bend Lost Bear Hoodie
                </h1>
                <span>$49.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[900px] w-[900px] relative">
              <img className=" rounded-lg" src={image9} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                  Fawn Island Vertical Champion Hoodie
                </h1>
                <span>$59.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
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
          <div className="">
            <button
              type="button"
              className="text-[#1c645f] hover:bg-[#1c645f] hover:text-white mt-2 border-2 bg-white focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
            >
              View All
            </button>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex gap-4">
            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image4} alt="image4" />
              <div class="absolute top-16 ml-20">
                <h1 class="text-white font-extrabold text-4xl">
                  Fawn
                  <br />
                  Island{" "}
                </h1>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image3} alt="image3" />
              <div class="absolute top-16 ml-20">
                <h1 class="text-white font-extrabold text-4xl">
                  Grand
                  <br />
                  Bend{" "}
                </h1>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image2} alt="image4" />
              <div class="absolute top-16 ml-20">
                <h1 class="text-white font-extrabold text-4xl">
                  Port
                  <br />
                  Stanely{" "}
                </h1>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image5} alt="image4" />
              <div class="absolute top-16 ml-20">
                <h1 class="text-white font-extrabold text-4xl">
                  Grand
                  <br />
                  Cove{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-16 p-8 bg-white">
        <div className="flex justify-between px-8">
          <div className="lg:text-4xl text-center ml-80  text-[#1c645f] lg:w-[400px] font-extrabold">
          Trending Tees
          </div>
        </div>
        <div className="pt-8">
          <div className="flex gap-4">
            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={tees1} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Fawn Island News Clippings T-Shirt
                </h1>
                <span className="mt-8">$27.99</span>
                <div className="flex items-center mt-4 mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image11} alt="image11" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Grand Bend Day Drinking Club Short Sleeve Tee
                </h1>
                <span>$29.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img src={image12} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Fawn Island Dock Drinks T-Shirt
                </h1>
                <span>$24.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={image13} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Grand Bend Speedway Wheel T-Shirt
                </h1>
                <span>$59.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-16 relative">
        <img className="rounded-lg opacity-25" src={image1} alt="image1" />
        <div className="absolute top-[40%] text-center items-center ml-48 px-20">
          <h1 className="font-extrabold text-5xl">Cottage fashion, proudly </h1>
          <h2 className="font-extrabold text-5xl mt-2 pl-8"> Canadian made.</h2>
          <p className="pl-4 mt-2">
            All of our products are designed, printed and shipped from Canada
          </p>
          <button
            type="button"
            className="text-black mt-2 border-2 bg-gray-100 focus-ring-white-300 font-bold rounded-lg px-5 py-2.5 text-center mb-2"
          >
            Browse Collection
          </button>
        </div>
      </div>

      <div className="lg:p-16 p-8 bg-white">
        <div className="flex justify-between px-8">
          <div className="lg:text-4xl text-center ml-80  text-[#1c645f] lg:w-[400px] font-extrabold">
          Trending Accessories
          </div>
        </div>
        <div className="pt-8">
          <div className="flex gap-4">
            <div className=" w-[900px] relative">
              <img className=" rounded-lg" src={tees2} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Grand Bend Green Preppy Natural Tote Bag
                </h1>
                <span className="mt-8">$27.99</span>
                <div className="flex items-center mt-4 mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[200px] w-[900px] relative">
              <img className=" rounded-lg" src={tees3} alt="image11" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Fawn Island Patch Baseball Cap
                </h1>
                <span>$29.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[900px] w-[900px] relative">
              <img src={image12} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Grand Bend Modern Baseball Cap
                </h1>
                <span>$24.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="h-[900px] w-[900px] relative">
              <img className=" rounded-lg" src={image13} alt="image4" />
              <div class=" ml-16">
                <h1 class="text-[#1c645f] hover:underline cursor-pointer font-bold text-2xl">
                Fawn Island Preppy Baseball Cap
                </h1>
                <span>$59.99</span>
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 mr-2  bg-black"
                  />
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4  bg-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Page  */}
      <div className="p-16">
      <a
  href="#"
  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className="object-cover w-full rounded-t-lg"
    src={image6}
    alt=""
  />
  <div className="flex flex-col justify-between p-4">
    <h1 className="mb-2 text-2xl font-bold text-gray-900">
    Fawn Island Floaty Skeleton Champion™ Hoodie
    </h1>
  </div>
</a>

      </div>

    </>
  );
};

export default home;
