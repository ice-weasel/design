"use client"
import React, { useState } from 'react';

const CarbonFootprintCalculator: React.FC = () => {
  const [electricityConsumption, setElectricityConsumption] = useState<number>(0);
  const [hoursOnline, setHoursOnline] = useState<number>(0);
  const [carbonFootprint, setCarbonFootprint] = useState<number>(0);

  const calculateCarbonFootprint = () => {
    // Calculate carbon footprint based on inputs
    const carbonFootprintValue: number = electricityConsumption * hoursOnline;
    setCarbonFootprint(carbonFootprintValue);
  };

  return (
    <main className="bg-slate-800 h-screen w-screen">
      <div className="flex flex-wrap items-center justify-center p-4">
        <span className="text-5xl font-semibold whitespace-nowrap text-gray-300">
          Green Footprints
        </span>
      </div>
      <div className="flex flex-col">
        <span className="p-10 mx-10 my-10 flex flex-col text-green-700 text-7xl">
          Welcome&nbsp;&nbsp;&nbsp;
          <span className="p-2 text-gray-300 text-3xl">
            Calculate your digital carbon footprints here
          </span>
        </span>
      </div>
      <div className="bg-gray-300  px-10 flex flex-wrap flex-col">
        <h3 className="mx-auto   bg-slate-500 text-3xl text-black">Digital Carbon Footprint Calculator</h3>
        <div className="mx-auto   p-2 flex flex-wrap items-center flex-row">
          <label htmlFor="electricity" className="mx-7 my-7 text-lg font-medium text-gray-900 dark:text-black">Electricity Consumption (kWh):</label>
          <input
            type="number"
            id="electricity"
            className=" items-center block w-48 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={electricityConsumption}
            onChange={(e) => setElectricityConsumption(Number(e.target.value))}
          />
        </div>
        <div className="text-black mx-auto items flex-row  flex flex-wrap p-4 ">
          <label htmlFor="hoursOnline"className="px-10 mx-7 text-lg font-medium text-gray-900 dark:text-black">Hours Online per Day:</label>
          <input
            type="number"
            id="hoursOnline"
            className = " block  px-0  text-sm text-black bg-transparent border-0 border-b-2  border-green-300 appearance-none dark:text-black  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={hoursOnline}
            onChange={(e) => setHoursOnline(Number(e.target.value))}
          />
        </div>
        <div className = "items-center py-4  mx-auto">
        <button
          type="button"
          className="focus:outline-none justify-center w-48 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={calculateCarbonFootprint}
        >
          Green
        </button>
        </div>
        <div className="text-black mx-auto  flex flex-row">
          <h2 className="px-3 py-10">Carbon Footprint:</h2>
          <p className="py-10">{carbonFootprint} kgCO2e</p>
        </div>
      </div>
    </main>
  );
};

export default CarbonFootprintCalculator;


