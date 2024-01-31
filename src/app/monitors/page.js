import React from "react";

export default function page() {
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
          {[
            {
              name: "Google",
              percent: 99,
              location: ["/icons/image 102.png"],
              type: "HTTP",
            },
            {
              name: "Clodevo",
              percent: 17,
              location: ["/icons/image 101.png", "/icons/image 102.png"],
              type: "HTTP",
            },
            {
              name: "Facebook",
              percent: 60,
              location: [
                "/icons/image 101.png",
                "/icons/image 102.png",
                "/icons/image 101.png",
                "/icons/image 102.png",
                "/icons/image 101.png",
                "/icons/image 102.png",
              ],
              type: "HTTP",
            },
            {
              name: "Apple",
              percent: 79,
              location: ["/icons/image 101.png"],
              type: "HTTP",
            },
          ].map((item) => (
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
                {item.name}
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
                  {item?.percent}%
                </div>
              </div>
              <div className="w-[19%]">
                {" "}
                <div className="flex gap-2 items-center flex-wrap">
                  {item?.location?.slice(0, 3)?.map((item) => (
                    <img src={item} className="h-4 w-4" />
                  ))}
                  {item?.location?.length > 3 && (
                    <div className="flex text-[10px] justify-center items-center text-white">
                      +{item?.location?.length - 3} more
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm w-[19%] text-white"> 5m</div>
              <div className="text-sm w-[19%] font-semibold text-white">
                {" "}
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageComponent() {
  return (
    <form>
      <header className="header">
        <h1 className="title">Title</h1>
      </header>
      <main className="main-content">
        <div className="image-container">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a85e6f0efcd9370572b63af20282db5b87757d8989ede36388f39afcd47da3?apiKey=3e6c7e0479074c51bca288c3658e27bb&"
            className="w-full aspect-[12.5]"
            alt="Image"
          />
          <img loading="lazy" className="w-full aspect-[12.5]" alt="Image" />
        </div>
        <div className="button-container">
          <button className="button">Button</button>
        </div>
        <div className="input-container">
          <label htmlFor="inputField" className="input-label">
            Input:
          </label>
          <input
            type="text"
            id="inputField"
            className="input"
            placeholder="Enter input"
            aria-label="Input field"
            aria-role="textbox"
          />
          <div className="input-description">Description</div>
        </div>
      </main>
      <footer className="footer">
        <a href="#" className="link">
          Link
        </a>
        <a href="#" className="link">
          Link
        </a>
      </footer>
    </form>
  );
}
