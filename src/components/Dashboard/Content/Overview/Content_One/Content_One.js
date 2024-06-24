import React from "react";

const details = [
  {
    title: "Customer Support Queries",
    statistics: "982",
    margins: "2.5",
    info: "21340",
  },
  { title: "Calls", statistics: "357", margins: "0.5", info: "12405" },
  { title: "Tickets", statistics: "242", margins: "2.5", info: "12555" },
  { title: "Agents", statistics: "886", margins: "4.2", info: "15544" },
];
const Content_One = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 text-[#92929D] mt-6">
      {details.map((item, index) => {
        return (
          <div key={index} className="lg:min-w-[250px] rounded-[20px] bg-[#1C1C24] p-3 md:p-5">
            <p className="text-[16px] text-[#FAFAFB] font-semibold">{item.title}</p>
            <div className="mt-3 flex gap-3 items-baseline">
                <p className="text-[28px] text-[#FAFAFB] font-semibold">{item.statistics}</p>
                <span className="text-[#5F35E3] font-semibold text-[16px]">+{item.margins}%</span>
            </div>
             <p className="text-[12px]">Compared to ({item.info} last year)</p>   
          </div>
        );
      })}
    </div>
  );
};

export default Content_One;
