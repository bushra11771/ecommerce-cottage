import React from "react";
import companylogo from "../../assets/images/footerlogo.png";
import {Link} from 'react-router-dom'

const footer = () => {
  return (
    <>
      <footer className="bg-[#1c645f] px-8 py-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-36 md:mb-0">
              <img className="h-44 w-44" src={companylogo} alt="logo" />
              <ul className="text-white font-bold">
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    admin@thecottageco.com
                  </Link>
                </li>
                </ul>
            </div>
            <div>
              <h2 className="mb-6 font-bold hover:underline text-white">
                Hoodies
              </h2>
              <ul className="text-white font-bold">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    T-Shirts
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Youth
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Champion
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-bold text-white dark:text-white">
                Canada
              </h2>
              <ul className="text-white font-bold">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Beach
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Grand Bend
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Fawn Island
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-extrabold  text-white dark:text-white">
                Newsletter
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    No annoying emails, just discount codes.
                  </a>
                </li>
              </ul>
              <div>
                <input
                  type="email"
                  id="email"
                  className=" block w-full p-2.5 group border-b-2 "
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="pl-8 font-extrabold p-6 bg-green-950 text-white">
        © 2023 The Cottage Co | Ontario Cottage Apparel & Fashion for Cottage
        Owners. All rights reserved.
      </div>
    </>
  );
};

export default footer;
