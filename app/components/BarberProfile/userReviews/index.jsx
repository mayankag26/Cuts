import React from "react";
let arr=["static"]

const CommentSection = ({comments}) => {
  if(comments) arr=comments
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        User Comments...
      </h1>
      
      
        {/* <strong>Sarah</strong>{" "} */}
        {/* <span className="text-xs text-gray-400">3:34 PM</span> */}
        
          {arr.map((item, index) => (
          <div className=" border-2 rounded-lg px-10 py-2 sm:py leading-relaxed">
          <div key={index} className="container m-auto w-10/12">
            <div className="">
             <div>
             <p className="text-sm text-gray-700">
              {item}
              </p>
              </div>
            </div>
          </div>
          </div>
        ))}

      
    </>
  );
};

export default CommentSection;
