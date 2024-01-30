"use client";

import { useState } from "react";

export default function Home() {
  const [activeButtons, setActiveButtons] = useState([]);
  const countries = [
    {
      label: "> North America (2)",
      buttons: [
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
      ],
    },
    {
      label: "> Europe (1)",
      buttons: [
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
      ],
    },
    {
      label: "> Asia (1)",
      buttons: [
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
      ],
    },
    {
      label: "> South America",
      buttons: [
        {
          label: "Sao Paulo",
          icon: "/icons/image 103.png",
        },
      ],
    },
    {
      label: "> Africa (1)",
      buttons: [
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
      ],
    },
    {
      label: "> Middle East (1)",
      buttons: [
        {
          label: "Riyadh",
          icon: "/icons/image 119.png",
        },
        {
          label: "Dubai",
          icon: "/icons/image 118.png",
        },
      ],
    },
    {
      label: "> Australia",
      buttons: [
        {
          label: "Sydney",
          icon: "/icons/image 120.png",
        },
      ],
    },
  ];
  return (
    <div
      className="flex justify-center mt-32"
      style={{
        width: "calc(100vw - 246px)",
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-[670px]">
        <header className="flex flex-col items-stretch py-8 pr-5 pl-20 w-full rounded-md bg-slate-800 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 justify-between items-stretch">
              <button
                className="grow justify-center items-stretch px-9 py-4 text-xs font-bold text-white rounded border border-solid bg-indigo-600 bg-opacity-40 border-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                aria-label="HTTP"
              >
                HTTP
              </button>
              <button
                className="grow justify-center items-stretch px-12 py-4 text-xs font-bold text-white rounded border border-solid bg-slate-800 border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                aria-label="SSL"
              >
                SSL
              </button>
            </div>
            <div className="flex gap-4 justify-between items-stretch">
              <button
                className="grow justify-center items-stretch px-10 py-4 text-xs font-bold text-white rounded border border-solid bg-slate-800 border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                aria-label="TCP"
              >
                TCP
              </button>
              <button
                className="grow justify-center items-stretch px-10 py-4 text-xs font-bold text-white rounded border border-solid bg-slate-800 border-zinc-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
                aria-label="GRPC"
              >
                GRPC
              </button>
            </div>
          </div>
          <p className="mt-6 text-[10px] text-white max-md:max-w-full">
            HTTP tests are great for testing any standard website that you would
            access using your browser.
            <br /> If you don't know what test type to use this one is likely
            the best option.
          </p>
        </header>
        <div className="flex flex-col mt-8 w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full">
          <div className="py-8 pr-5 pl-20 ">
            <div>
              <label className="text-[14px] mb-[10px] block text-white">
                URL to monitor{" "}
              </label>
              <input
                type="text"
                defaultValue={"https://"}
                className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
              />
            </div>
            <div className="flex gap-11 mt-[9px]">
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Name
                </label>
                <input
                  type="text"
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
                <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                  Choose a user-friendly test name for use in the API, email
                  reports, dashboard, and test overviews
                </p>
              </div>
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Frequency{" "}
                </label>
                <input
                  type="text"
                  defaultValue={"5 minutes"}
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
                <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                  how often we run a test on your given monitor ?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full">
          <div className="py-8 mr-5 ml-20 border-b-[1px] border-[#1F2433]">
            <div className="flex gap-11 mt-[9px]">
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  HTTP Method
                </label>
                <input
                  type="text"
                  defaultValue={"GET"}
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
              </div>
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Request Timeout{" "}
                </label>
                <input
                  type="text"
                  defaultValue={"30 seconds"}
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-[14px] mb-[10px] block text-white">
                URL to monitor{" "}
              </label>
              <textarea
                type="text"
                placeholder="parameter1=value&parameter2=another_value"
                draggable={false}
                className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[82px] text-white"
              />
            </div>
          </div>
          <div className="py-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
            <div className="flex gap-11 mt-[9px]">
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Header Name
                </label>
                <input
                  type="text"
                  placeholder="Authorization"
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
              </div>
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Header Value
                </label>
                <input
                  type="text"
                  placeholder="Bearer ey12345="
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
              </div>
            </div>
          </div>
          <div className="py-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
            <label className="text-[14px] mb-[10px] block text-white">
              Basic Authentication
            </label>
            <div className="flex gap-11 mt-[9px]">
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Username
                </label>
                <input
                  type="text"
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
              </div>
              <div className=" w-full">
                <label className="text-[14px] mb-[10px] block text-white">
                  Password
                </label>
                <input
                  type="text"
                  className="flex w-full flex-col rounded-xl border-solid bg-slate-800 border-[3px] border-zinc-500 outline-none active:outline-none min-h-[52px] text-white"
                />
                <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                  Stored encrypted and safe
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
            <div className="flex justify-between flex-wrap gap-10">
              {countries.map((country, index) => {
                return (
                  <div key={index}>
                    <label className="text-[14px] mb-[10px] block text-white">
                      {country.label}
                    </label>
                    <div className="flex flex-col gap-2">
                      {country.buttons.map((button, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                          >
                            <button
                              className="flex gap-2 items-center justify-center w-[116px] h-5 text-[10px] text-white rounded-[14px]"
                              style={{
                                backgroundColor: activeButtons?.includes?.(
                                  button?.label
                                )
                                  ? "#4248AD"
                                  : "#3B4253",
                              }}
                              onClick={() => {
                                if (activeButtons.includes(button.label)) {
                                  setActiveButtons(
                                    activeButtons.filter(
                                      (item) => item !== button.label
                                    )
                                  );
                                } else {
                                  setActiveButtons([
                                    ...activeButtons,
                                    button.label,
                                  ]);
                                }
                              }}
                            >
                              <img src={button.icon} alt="icon" />
                              {button.label}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
