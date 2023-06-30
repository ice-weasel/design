"use client";

import React, { useState } from "react";

const CarbonFootprintCalculator: React.FC = () => {
  const [electricityConsumption, setElectricityConsumption] =
    useState<number>(0);
  const [hoursOnline, setHoursOnline] = useState<number>(0);
  const [carbonFootprint, setCarbonFootprint] = useState<number>(0);

  const calculateCarbonFootprint = () => {
    // Calculate carbon footprint based on inputs
    const carbonFootprintValue: number = electricityConsumption * hoursOnline;
    setCarbonFootprint(carbonFootprintValue);
  };

  return (
    <div className="flex h-full flex-col min-h-screen">
      <main className="flex-grow bg-gray-300">
        <div className="flex flex-wrap items-center justify-center p-4">
          <span className="text-5xl font-semibold whitespace-nowrap text-green-700">
            Green Footprints
          </span>
        </div>
        <div className="flex flex-col">
          <span className="p-[5%] mx-10 my-10 flex flex-col text-green-700 text-7xl">
            Welcome&nbsp;&nbsp;&nbsp;
            <span className="p-2 text-slate-800 text-3xl">
              Calculate your digital carbon footprints here
            </span>
          </span>
        </div>
        <div className="w-full p-[3%] h-full bg-slate-800  shadow-xl flex flex-col">
          <h3 className="mx-auto text-3xl text-gray-300">
            Digital Carbon Footprint Calculator
          </h3>
          <div className="mx-auto p-2 flex flex-wrap items-center flex-row">
            <label
              htmlFor="electricity"
              className="mx-7 my-7 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Electricity Consumption (kWh):
            </label>
            <input
              type="number"
              id="electricity"
              className="block px-0 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={electricityConsumption}
              onChange={(e) =>
                setElectricityConsumption(Number(e.target.value))
              }
            />
          </div>
          <div className="text-black mx-auto items flex-row flex flex-wrap p-4">
            <label
              htmlFor="hoursOnline"
              className="px-10 mx-7 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Hours Online per Day:
            </label>
            <input
              type="number"
              id="hoursOnline"
              className="block px-0 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={hoursOnline}
              onChange={(e) => setHoursOnline(Number(e.target.value))}
            />
          </div>
          <div className="items-center py-4 mx-auto">
            <button
              type="button"
              className="focus:outline-none justify-center w-48 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={calculateCarbonFootprint}
            >
              Green
            </button>
          </div>
          <div className="group flex bg-green-600 hover:bg-white shadow-lg rounded-lg mx-auto gap-5 px-3 flex-row transition-all">
            <h2 className="mx-auto group-hover:text-black text-3xl px-3 py-10">
              Your Carbon Footprint is
            </h2>
            <p className="mx-auto text-3xl py-10 group-hover:text-black transition-all">{carbonFootprint} kgCO2e</p>
          </div>
        </div>
      </main>
      <footer className=" rounded-lg  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default CarbonFootprintCalculator;
