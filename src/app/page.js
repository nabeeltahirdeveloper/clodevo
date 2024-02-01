"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [activeButtons, setActiveButtons] = useState([]);
  const [data, setData] = useState({});

  const handleSubmit = async () => {
    if (!data?.monitorStatus) {
      return toast.error("Please choose a monitor status");
    }
    if (!data?.urlToMonitor) {
      return toast.error("Please enter a URL to monitor");
    }
    if (!data?.name) {
      return toast.error("Please enter a name");
    }
    if (!data?.frequency) {
      return toast.error("Please enter a frequency");
    }
    if (!data?.httpMethod) {
      return toast.error("Please enter a HTTP method");
    }
    if (!data?.requestTimeout) {
      return toast.error("Please enter a request timeout");
    }
    if (!data?.requestBody) {
      return toast.error("Please enter a Request body");
    }
    if (!data?.headerName) {
      return toast.error("Please enter a header name");
    }
    if (!data?.headerValue) {
      return toast.error("Please enter a header value");
    }
    if (!data?.username) {
      return toast.error("Please enter a username");
    }
    if (!data?.password) {
      return toast.error("Please enter a password");
    }
    if (!data?.validStatusCodes) {
      return toast.error("Please enter a valid status codes");
    }
    if (!data?.validHttpVersions) {
      return toast.error("Please enter a valid HTTP versions");
    }
    if (!data?.fieldType) {
      return toast.error("Please enter a field type");
    }
    if (!data?.matchConditions) {
      return toast.error("Please enter a match conditions");
    }
    if (!data?.recoveryPeriod) {
      return toast.error("Please enter a recovery period");
    }
    if (!data?.confirmationPeriod) {
      return toast.error("Please enter a confirmation period");
    }
    if (!data?.contactGroup) {
      return toast.error("Please enter a contact group");
    }
    if (!data?.pushIntegration) {
      return toast.error("Please enter a push integration");
    }
    if (!data?.email) {
      return toast.error("Please enter an email");
    }
    if (!activeButtons?.length) {
      return toast.error("Please choose a HTTP Location");
    }

    try {
      const payload = {
        uptime_config: {
          type: data?.monitorStatus,
          timeout: data?.requestTimeout,
          frequency: data?.frequency,
          locations: activeButtons,
          name: data?.name,
          http: {
            method: data?.httpMethod,
            url: data?.urlToMonitor,
            headers: {
              Host: data?.headerName,
              "Accept-Language": data?.headerValue,
            },
            basic_auth: {
              username: data?.username,
              password: data?.password,
            },
            valid_http_versions: data?.validHttpVersions,
            valid_status_codes: data?.validStatusCodes,
            follow_redirects: true,
            fail_if_body_not_matches_regexp: data?.fieldType,
            fail_if_header_not_matches: data?.matchConditions,
          },
        },
        alert_config: {
          recovery_period: data?.recoveryPeriod,
          confirmation_period: data?.confirmationPeriod,
          contact_group: data?.contactGroup,
        },
      };
      toast.loading("Adding monitor...");
      const res = await fetch("/api/monitor", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      toast.dismiss();
      if (res.ok) {
        toast.success("Monitor added successfully!");
      } else {
        toast.error("Something went wrong!");
      }
      setData({});
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

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
    <div>
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
      <div className="ml-24 mt-16">
        <div className="flex border-b-[1px] border-white max-w-[130px]  ">
          <p className="text-white text-[15px]">{`>  Monitors`}</p>
        </div>
        <h1 className="text-[32px] text-white font-bold">Create monitor</h1>
      </div>
      <div
        className="flex justify-center  mt-16"
        style={{
          width: "calc(100vw - 246px)",
        }}
      >
        {" "}
        <div className="flex flex-col items-center justify-center ">
          <div className="flex justify-end w-full">
            <div className="max-w-[310px] mr-4">
              <h1 className="text-[32px] text-white font-bold">
                What to monitor
              </h1>
              <p className="text-[13px] text-white">
                Configure the target website you want to monitor. You'll find
                the advanced configuration below, in the advanced settings
                section.
              </p>
            </div>
            <header className="flex max-w-[670px] flex-col items-stretch py-8 pr-5 pl-20 w-full rounded-md bg-slate-800 max-md:pl-5 max-md:max-w-full">
              <div></div>
              <div className="flex gap-5 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-4 justify-between items-stretch">
                  <button
                    className={`grow justify-center items-stretch px-9 py-4 text-xs font-bold text-white rounded border border-solid bg-opacity-40 border-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 ${
                      data?.monitorStatus === "HTTPS"
                        ? "bg-indigo-600"
                        : "bg-slate-800"
                    }`}
                    aria-label="HTTP"
                    onClick={() => setData({ ...data, monitorStatus: "HTTPS" })}
                  >
                    HTTP
                  </button>
                  <button
                    className={`grow justify-center items-stretch px-9 py-4 text-xs font-bold text-white rounded border border-solid bg-opacity-40 border-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 ${
                      data?.monitorStatus === "SSL"
                        ? "bg-indigo-600"
                        : "bg-slate-800"
                    }`}
                    aria-label="SSL"
                    onClick={() => setData({ ...data, monitorStatus: "SSL" })}
                  >
                    SSL
                  </button>
                </div>
                <div className="flex gap-4 justify-between items-stretch">
                  <button
                    className={`grow justify-center items-stretch px-9 py-4 text-xs font-bold text-white rounded border border-solid bg-opacity-40 border-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 ${
                      data?.monitorStatus === "TCP"
                        ? "bg-indigo-600"
                        : "bg-slate-800"
                    }`}
                    aria-label="TCP"
                    onClick={() => setData({ ...data, monitorStatus: "TCP" })}
                  >
                    TCP
                  </button>
                  <button
                    className={`grow justify-center items-stretch px-9 py-4 text-xs font-bold text-white rounded border border-solid bg-opacity-40 border-stone-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 ${
                      data?.monitorStatus === "GRPC"
                        ? "bg-indigo-600"
                        : "bg-slate-800"
                    }`}
                    aria-label="GRPC"
                    onClick={() => setData({ ...data, monitorStatus: "GRPC" })}
                  >
                    GRPC
                  </button>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-white max-md:max-w-full">
                HTTP tests are great for testing any standard website that you
                would access using your browser.
                <br /> If you don't know what test type to use this one is
                likely the best option.
              </p>
            </header>
          </div>
          <div className="flex justify-end w-full">
            <div></div>
            <div className="flex flex-col mt-8 w-full rounded-md bg-slate-800 min-h-[229px] max-w-[670px] max-md:max-w-full">
              <div className="py-8 pr-5 pl-20 ">
                <div>
                  <label className="text-[14px] mb-[10px] block text-white">
                    URL to monitor{" "}
                  </label>
                  <input
                    type="text"
                    value={data?.urlToMonitor}
                    onChange={(e) =>
                      setData({ ...data, urlToMonitor: e.target.value })
                    }
                    placeholder={"https://"}
                    className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                  />
                </div>
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      value={data?.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
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
                      placeholder={"5 minutes"}
                      value={data?.frequency}
                      onChange={(e) =>
                        setData({ ...data, frequency: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      how often we run a test on your given monitor ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full border-b-[1px] border-white">
            <p className="text-white">{`>  Advanced settings`}</p>
          </div>
          <div className="flex justify-end w-full">
            <h3 className="text-white text-[20px] font-[600] m-4 mt-14">
              Request parameters
            </h3>
            <div className="flex flex-col mt-8 w-full max-w-[670px] rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full">
              <div className="py-8 mr-5 ml-20 border-b-[1px] border-[#1F2433]">
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      HTTP Method
                    </label>
                    <input
                      type="text"
                      placeholder={"GET"}
                      value={data?.httpMethod}
                      onChange={(e) =>
                        setData({ ...data, httpMethod: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Request Timeout{" "}
                    </label>
                    <input
                      type="text"
                      value={data?.requestTimeout}
                      onChange={(e) =>
                        setData({ ...data, requestTimeout: e.target.value })
                      }
                      placeholder={"30 seconds"}
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[14px] mb-[10px] block text-white">
                    Request body
                  </label>
                  <textarea
                    type="text"
                    value={data?.requestBody}
                    onChange={(e) =>
                      setData({ ...data, requestBody: e.target.value })
                    }
                    placeholder="parameter1=value&parameter2=another_value"
                    draggable={false}
                    className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[82px] text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <h3 className="text-white text-[20px] font-[600] m-4 mt-14">
              Request headers
            </h3>
            <div className="flex flex-col w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full max-w-[670px]">
              <div className="py-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Header Name
                    </label>
                    <input
                      type="text"
                      value={data?.headerName}
                      onChange={(e) =>
                        setData({ ...data, headerName: e.target.value })
                      }
                      placeholder="Authorization"
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Header Value
                    </label>
                    <input
                      type="text"
                      value={data?.headerValue}
                      onChange={(e) =>
                        setData({ ...data, headerValue: e.target.value })
                      }
                      placeholder="Bearer ey12345="
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <h3 className="text-white text-[20px] font-[600] m-4 mt-14">
              HTTP Authentication{" "}
            </h3>
            <div className="flex flex-col w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full max-w-[670px]">
              <div className="pb-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
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
                      value={data?.username}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Password
                    </label>
                    <input
                      type="text"
                      value={data?.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      Stored encrypted and safe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <h3 className="text-white text-[20px] font-[600] m-4 mt-14">
              HTTP Authentication{" "}
            </h3>
            <div className="flex flex-col w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full max-w-[670px]">
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
                                  className="flex gap-2 items-center px-[6px] w-[116px] h-5 text-[10px] text-white rounded-[14px]"
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
          <div className="flex justify-end w-full">
            <div></div>
            <div className="flex flex-col w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full max-w-[670px]">
              <div className="py-8 pr-5 pl-20 border-b-[1px] border-[#1F2433]">
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Valid status codes
                    </label>
                    <input
                      type="text"
                      placeholder="Choose"
                      value={data?.validStatusCodes}
                      onChange={(e) =>
                        setData({ ...data, validStatusCodes: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      Alerts when URL return different HTTP status code
                    </p>
                    <span className="bg-[#4248AD] text-white text-[10px] py-0.5 px-2 rounded-xl">
                      200
                    </span>
                    <span className="bg-[#4248AD] text-white text-[10px] py-0.5 px-2 rounded-xl">
                      HTTP 1.1
                    </span>
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Valid HTTP versions{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Choose"
                      value={data?.validHttpVersions}
                      onChange={(e) =>
                        setData({ ...data, validHttpVersions: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      Alerts when URL return different HTTP versions
                    </p>
                    <span className="bg-[#4248AD] text-white text-[10px] py-0.5 px-2 rounded-xl">
                      HTTP 1.1
                    </span>
                  </div>
                </div>
                <label className="text-[14px] mb-[10px] block text-white mt-5">
                  Regex Validation
                </label>
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Field Type
                    </label>
                    <input
                      type="text"
                      placeholder="body"
                      value={data?.fieldType}
                      onChange={(e) =>
                        setData({ ...data, fieldType: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Match conditions
                    </label>
                    <input
                      type="text"
                      placeholder="Regex"
                      value={data?.matchConditions}
                      onChange={(e) =>
                        setData({ ...data, matchConditions: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Allow Missing
                    </label>
                    <label className="relative inline-flex items-center me-5 cursor-pointer mt-3">
                      <input
                        type="checkbox"
                        checked={data?.allowMissing}
                        onChange={(e) =>
                          setData({ ...data, allowMissing: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-[#fff] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4248AD]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="max-w-[310px] mr-4">
              <h1 className="text-[32px] text-white font-normal">
                Alert Escalation Management
              </h1>
            </div>
            <div className="flex flex-col mt-8 w-full rounded-md bg-slate-800 min-h-[229px] max-md:max-w-full">
              <div className="py-8 mr-5 ml-20 border-b-[1px] border-[#1F2433]">
                <div className="flex gap-11 mt-[9px]">
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Recovery period
                    </label>
                    <input
                      type="text"
                      placeholder="5 minutes"
                      value={data?.recoveryPeriod}
                      onChange={(e) =>
                        setData({ ...data, recoveryPeriod: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      Set the uptime duration to auto-resolve incidents.
                    </p>
                  </div>
                  <div className=" w-full">
                    <label className="text-[14px] mb-[10px] block text-white">
                      Confirmation period{" "}
                    </label>
                    <input
                      type="text"
                      placeholder={"Immediate start"}
                      value={data?.confirmationPeriod}
                      onChange={(e) =>
                        setData({ ...data, confirmationPeriod: e.target.value })
                      }
                      className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                    />
                    <p className="mt-[5px] text-[10px] text-white max-md:max-w-full">
                      Set the wait time before initiating a new incident
                      post-failure.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 mr-5 ml-20 border-b-[1px] border-[#1F2433]">
                <div className=" w-full">
                  <label className="text-[14px] mb-[10px] block text-white">
                    Contact Group{" "}
                  </label>
                  <input
                    type="text"
                    placeholder={"Default / Create a contact group"}
                    value={data?.contactGroup}
                    onChange={(e) =>
                      setData({ ...data, contactGroup: e.target.value })
                    }
                    className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                  />
                </div>
                <div className=" w-full my-8">
                  <label className="relative inline-flex gap-3 items-center me-5 cursor-pointer mt-3">
                    <input
                      type="checkbox"
                      value="email"
                      onChange={(e) =>
                        setData({ ...data, pushIntegration: e.target.value })
                      }
                      className="sr-only peer"
                    />
                    <div className="h-4 w-4 border-[1px] border-white  rounded peer-checked:bg-[#4248AD] "></div>
                    <span className="text-[10px] text-white">E-mail</span>
                  </label>
                  <label className="relative inline-flex gap-3 items-center me-5 cursor-pointer mt-3">
                    <input
                      type="checkbox"
                      value="sms"
                      onChange={(e) =>
                        setData({ ...data, pushIntegration: e.target.value })
                      }
                      className="sr-only peer"
                    />
                    <div className="h-4 w-4 border-[1px] border-white  rounded peer-checked:bg-[#4248AD] "></div>
                    <span className="text-[10px] text-white">SMS</span>
                  </label>
                  <label className="relative inline-flex gap-3 items-center me-5 cursor-pointer mt-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value="call"
                      onChange={(e) =>
                        setData({ ...data, pushIntegration: e.target.value })
                      }
                    />
                    <div className="h-4 w-4 border-[1px] border-white  rounded peer-checked:bg-[#4248AD] "></div>
                    <span className="text-[10px] text-white">Call</span>
                  </label>
                  <label className="relative inline-flex gap-3 items-center me-5 cursor-pointer mt-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value="pushIntegration"
                      onChange={(e) =>
                        setData({ ...data, pushIntegration: e.target.value })
                      }
                    />
                    <div className="h-4 w-4 border-[1px] border-white  rounded peer-checked:bg-[#4248AD] "></div>
                    <span className="text-[10px] text-white">
                      Push Integrations
                    </span>
                  </label>
                </div>
                <div className=" w-full">
                  <label className="text-[14px] mb-[10px] block text-white">
                    E-mail
                  </label>
                  <input
                    type="text"
                    placeholder={"Type a new email"}
                    value={data?.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="flex w-full flex-col rounded-xl border-solid bg-slate-800 pl-9  shadow-inner shadow-slate-700  outline-none active:outline-none min-h-[52px] text-white"
                  />
                  <span className="bg-[#4248AD] text-white text-[10px] py-0.5 px-2 rounded-xl">
                    youssef@clodevo.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-[170px] h-[44px] border-none text-white text-[20px] bg-[#4248AD] rounded-[10px] float-right mr-28 mb-4"
      >
        Create Monitor
      </button>
    </div>
  );
}
