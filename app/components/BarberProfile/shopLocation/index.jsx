import React from "react";

const ShopLocation = (props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shop Location</h1>
      <div className="relative flex items-center justify-center w-full dark:text-black-900">
        <iframe
          className="rounded-3xl w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2279701453244!2d81.02184131504255!3d26.800868883175877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1656853892123!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ShopLocation;


// --------------------------------rest components --------------------------------

// <div className="relative flex flex-shrink-0 w-full sm:w-auto">
//           <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//             <div class="p-1 bg-green-200"></div>
//             <div class="p-8">
//               <h2 class="text-3xl font-bold text-gray-800 mb-4">
//                 Hair Treatment
//               </h2>
//               <p class="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex flex-shrink-0 w-full sm:w-auto">
//           <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//             <div class="p-1 bg-purple-200"></div>
//             <div class="p-8">
//               <h2 class="text-3xl font-bold text-gray-800 mb-4">
//                 Basic Makeup
//               </h2>
//               <p class="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex flex-shrink-0 w-full sm:w-auto">
//           <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//             <div class="p-1 bg-green-200"></div>
//             <div class="p-8">
//               <h2 class="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
//               <p class="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex flex-shrink-0 w-full sm:w-auto">
//           <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//             <div class="p-1 bg-blue-200"></div>
//             <div class="p-8">
//               <h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
//               <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
//             </div>
//           </div>
//         </div>
