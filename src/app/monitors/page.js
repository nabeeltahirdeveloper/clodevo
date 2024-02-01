"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/monitor", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div
      style={{
        width: "calc(100vw - 246px)",
      }}
    >
      <div className="w-full justify-end flex px-14 py-6">
        <div className="flex gap-5">
          <img src="/notification.png" />
          <div className="flex items-center gap-2 text-white">
            <img src="/profile.png" />
            <p>Youssef</p>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-sm border-[2px] border-white" />
              <span className="h-1.5 w-1.5 rounded-sm border-[2px] border-white" />
              <span className="h-1.5 w-1.5 rounded-sm border-[2px] border-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#21222D] mx-10 px-10 flex justify-between h-20 items-center mt-20">
        <h3 className="text-[27px] text-white ">Greetings, Youssef</h3>
        <div className="flex gap-5 ">
          <div className="relative">
            <div className="absolute top-3 left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#87888C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
                />
              </svg>
            </div>
            <input
              className="h-[44px] pl-8 w-64 bg-transparent border-[3px] rounded-lg border-slate-600 active:outline-none"
              placeholder="Search"
            />
            <span className="text-[16px] w-6 text-center p-0.5 rounded bg-slate-600 text-white absolute right-2 top-2">
              /
            </span>
          </div>
          <button className="h-[44px] border-none text-white text-[20px] bg-[#5d63ce] relative rounded-[10px] float-right pr-12 pl-4 overflow-hidden">
            Create Monitor
            <span className="h-[44px] top-0 absolute bg-[#CBCEF1] flex items-center right-0 px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#21222D] mx-10 pt-8 pb-10 rounded-[25px] mt-8">
        <h4 className="text-[15px] font-semibold text-white ml-7">Monitors</h4>
        <div className="mx-16">
          <div className="flex justify-between items-center">
            <div className="w-[5%]"></div>
            <div className="text-sm font-semibold text-[#87888C] w-[19%]">
              {" "}
              Name{" "}
            </div>
            <div className="text-sm font-semibold text-[#87888C] w-[19%]">
              {" "}
              Uptime{" "}
            </div>
            <div className="text-sm font-semibold text-[#87888C] w-[19%]">
              {" "}
              Locations{" "}
            </div>
            <div className="text-sm font-semibold text-[#87888C] w-[19%]">
              {" "}
              Check{" "}
            </div>
            <div className="text-sm font-semibold text-[#87888C] w-[19%]">
              {" "}
              Type{" "}
            </div>
          </div>
          {loading && (
            <div className="flex justify-center items-center">
              <h1 className="text-white my-4">Loading...</h1>
            </div>
          )}
          {data?.map((item) => (
            <div className="flex justify-between items-center">
              <div className="w-[5%]">
                <div
                  className={`h-4 w-4 rounded-lg ${
                    item?.percent > 80 && item?.percent < 100
                      ? "bg-emerald-600"
                      : item?.percent > 70 && item?.percent < 80
                      ? "bg-yellow-300 "
                      : item?.percent > 20 && item?.percent < 70
                      ? "bg-orange-400 "
                      : "bg-red-500"
                  }`}
                />
              </div>
              <div className="text-sm font-semibold text-white w-[19%]">
                {" "}
                {item?.uptime_config?.name}
              </div>
              <div className="w-[19%] ">
                <div
                  className={`justify-center w-20 py-2 pr-12 pl-5 mt-4 text-[10px]  bg-gray-800 rounded  border-solid border-[0.5px] max-md:pr-5 ${
                    item?.percent > 80 && item?.percent < 100
                      ? "border-emerald-600 text-emerald-600"
                      : item?.percent > 70 && item?.percent < 80
                      ? "border-yellow-300 text-yellow-300"
                      : item?.percent > 20 && item?.percent < 70
                      ? "border-orange-400  text-orange-400"
                      : "border-red-500 text-red-500"
                  }`}
                >
                  {10}%
                </div>
              </div>
              <div className="w-[19%]">
                {" "}
                <div className="flex gap-2 items-center flex-wrap">
                  {item?.uptime_config?.locations?.slice(0, 3)?.map((item) => (
                    <img
                      src={
                        locationsData?.filter(
                          (location) => location?.label === item
                        )?.[0]?.icon
                      }
                      className="h-4 w-4"
                    />
                  ))}
                  {item?.uptime_config?.locations?.length > 3 && (
                    <div className="flex text-[10px] justify-center items-center text-white">
                      +{item?.uptime_config?.locations?.length - 3} more
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm w-[19%] text-white"> 5m</div>
              <div className="text-sm w-[19%] font-semibold text-white">
                {" "}
                {item?.uptime_config?.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const locationsData = [
  {
    label: "North Virginia",
    icon: "/icons/image 101.png",
  },
  {
    label: "Oregon",
    icon: "/icons/image 101.png",
  },
  {
    label: "Ohio",
    icon: "/icons/image 101.png",
  },
  {
    label: "Toronto",
    icon: "/icons/image 102.png",
  },
  {
    label: "Quebec",
    icon: "/icons/image 102.png",
  },
  {
    label: "London",
    icon: "/icons/image 104.png",
  },
  {
    label: "Ireland",
    icon: "/icons/image 106.png",
  },
  {
    label: "Amsterdam",
    icon: "/icons/image 109.png",
  },
  {
    label: "Frankfurt",
    icon: "/icons/image 108.png",
  },
  {
    label: "Paris",
    icon: "/icons/image 102.png",
  },
  {
    label: "Tokyo",
    icon: "/icons/image 113.png",
  },
  {
    label: "Seoul",
    icon: "/icons/image 114.png",
  },
  {
    label: "Beijing",
    icon: "/icons/image 115.png",
  },
  {
    label: "Singapore",
    icon: "/icons/image 116.png",
  },
  {
    label: "Mumbai",
    icon: "/icons/image 117.png",
  },
  {
    label: "Sao Paulo",
    icon: "/icons/image 103.png",
  },
  {
    label: "Tanger",
    icon: "/icons/image 110.png",
  },
  {
    label: "Casablanca",
    icon: "/icons/image 110.png",
  },
  {
    label: "Cape Town",
    icon: "/icons/image 112.png",
  },
  {
    label: "Riyadh",
    icon: "/icons/image 119.png",
  },
  {
    label: "Dubai",
    icon: "/icons/image 118.png",
  },
  {
    label: "Sydney",
    icon: "/icons/image 120.png",
  },
];
