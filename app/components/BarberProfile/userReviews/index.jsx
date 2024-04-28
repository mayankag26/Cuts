import React from "react";
let arr = ["static"];

const CommentSection = ({ comments }) => {
  if (comments) arr = comments;
   return (
     <>
       <div className="comment-section">
         <h1 className="text-3xl font-bold text-gray-800 mb-6">
           User Comments...
         </h1>
         {arr.map((item, index) => (
           <div
             key={index}
             className="flex items-center mb-4 comment-container hover:z-10 transition-all duration-300"
           >
             <div className="flex-shrink-0 mr-3">
               <img
                 className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                 src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                 alt=""
               />
             </div>
             <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
               <div className="flex justify-between">
                 <strong className="text-gray-900">Sarah</strong>
                 <div className="flex mt-2">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 text-yellow-400"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                   <span className="text-xs text-black-400">
                     {" "}
                     <b>4.7 out of 5</b>
                   </span>
                 </div>
               </div>
               <p className="text-sm mt-2 w-3/4">{item}</p>
             </div>
           </div>
         ))}
       </div>
     </>
   );
};

export default CommentSection;
