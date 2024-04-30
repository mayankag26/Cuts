import React from "react";
const ServiceAvailable = (props) => {
  return (
    <div>
      <div className="relative flex items-center overflow-hidden w-full justify-center  dark:text-black-900 ">
        <div className="flex items-center overflow  justify-start w-full h-full gap-20 py-4 mx-auto overflow-auto lg:gap-8 m-4 p-6">
          {props.services &&
            props.services.map((x, idx) => (
              <div
                key={idx}
                className="relative flex flex-shrink-0  w-full sm:w-auto"
                style={{ zIndex: "9" }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <div class="p-1 bg-blue-200"></div>
                  <div class="p-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                      {Object.keys(x)[0]}
                    </h2>
                    <p class="text-2xl font-bold text-gray-800 mb-6">
                      MRP Rs {Object.values(x)[0]}/-
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAvailable;

