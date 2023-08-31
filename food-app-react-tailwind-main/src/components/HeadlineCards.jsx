import React from "react";
import { categories } from "../data/data";

const HeadlineCards = () => {
  const list = [
    {
      name: "fruits",
      image:
        "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "fruits",
      subTitle: "",
      image:
        "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "fruits",
      subTitle: "",

      image:
        "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
   
    // { name: "snacks" },
    // { name: "bevarages" },
    // { name: "vegetables" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {list.map((category) => (
        <div className="rounded-xl relative">
          {/* Overlay */}

          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{category.name}</p>
            <p className="px-2">{category.subTitle  }</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              View all
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={category.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
