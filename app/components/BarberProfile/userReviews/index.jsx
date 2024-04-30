import React from "react";

const CommentSection = ({ comments }) => {
  let arr = [];
  if (comments) arr = comments;
  console.log(comments);
  return (
    <div>
      <div className="comment-section">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Comments...
        </h1>
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-4 comment-container hover:z-10 transition-all duration-300"
          >
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <p className="text-sm mt-2 ">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
