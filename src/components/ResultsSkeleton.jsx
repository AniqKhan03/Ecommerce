import React from "react";

function ResultsSkeleton() {
  return (
    <div className="flex flex-wrap max-w-[280px] p-10">
      <div className="">
        <div className="bg-gray-100 rounded-3xl">
          <div className="w-[260px] h-[260px]"></div>
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <p className="bg-gray-100 w-[60px] h-[20px]"></p>
          <p className="bg-gray-100 w-[260px] h-[30px]"></p>
          <div className="flex">
            <p className="bg-gray-100 w-[64px] h-[20px]"></p>{" "}
            <p className="bg-gray-100 w-[36px] h-[20px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsSkeleton;
