import { useEffect, useState } from "react";
const Latest_Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h4 className="text-[28px] font-semibold">Latest Blogs</h4>
      <div className="grid grid-cols-3 gap-x-7 gap-y-12 my-10">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="group">
            <div className="shadow-xl rounded-[16px] scale-right-bottom">
              <img src={item.image} alt="" className="h-[220px] w-full " />
              <div className="p-3 pb-4 space-y-2 group-hover:bg-[#081831] rounded-b-[16px]">
                <p className="inline-block px-2 py-[2px] text-[#FF8156] text-xs bg-[#FFF2EE] rounded">
                  {item.category}
                </p>
                <p className="text-black font-bold group-hover:text-white">
                  {item.title}
                </p>
                <p className="group-hover:text-white">
                  {item.description.slice(0, 150)}...
                </p>
                <button className="px-4 py-2 text-white rounded-full bg-[#FE632F] hover:bg-blue-500">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Blogs;
