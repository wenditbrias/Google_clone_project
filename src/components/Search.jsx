import { useLocation, Link } from "react-router-dom";
import { ContextHandler } from "../context/Context";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Search = () => {
  const params = useLocation();
  const [loading, setLoading] = useState(false);
  const { searchHandler, datas, query } = ContextHandler();

  useEffect(() => {
    setLoading(true);
    searchHandler(`${params.pathname}`);
    setLoading(false);
  }, [params.pathname, query]);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Loading..</h1>
      </div>
    );
  }

  switch (params.pathname) {
    case "/search":
      return (
        <div className="lg:w-[90%] xl:px-0 px-10 w-full mx-auto py-5 grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-x-12">
          {datas?.results?.map((item, id) => {
            return (
              <div className="w-[100%]" key={id}>
                <a className="cursor-pointer" href={item.link}>
                  <span className="w-[210px] overflow-hidden whitespace-nowrap overflow-ellipsis text-sm block text-gray-500">
                    {item.link}
                  </span>
                  <span className="text-blue-400 font-normal text-base mt-2 block">
                    {item.title}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      );
      break;

    case "/image":
      return (
        <div className="xl:w-[90%] w-full px-10 xl:px-0 mx-auto py-5 grid grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4 xl:gap-x-8">
          {datas?.image_results?.map(({ image, link: { href, title } }, id) => {
            return (
              <div className="w-full" key={id}>
                <a className="w-full" href={href}>
                  <img
                    src={image.src}
                    alt={title}
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                </a>
                <h5 className="text-gray-600 font-normal text-sm">{title}</h5>
              </div>
            );
          })}
        </div>
      );
      break;

    case "/news":
      return (
        <div className="w-full xl:w-[90%] xl:px-0 px-10 mx-auto py-5 flex flex-wrap items-center justify-between">
          {datas?.entries?.map(({ links, source, title }, id) => {
            return (
              <div key={id} className="w-full xl:w-[47%] mb-4">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer "
                  className="hover:underline "
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {" "}
                  {source?.href}
                </a>
              </div>
            );
          })}
        </div>
      );
      break;

    case "/video":
      return (
        <div className="w-full xl:w-[90%] mx-auto grid py-5 3 sm:grid-cols-2 md:grid-cols-3 xl:px-0 px-10 xl:grid-cols-4 gap-4">
          {datas?.results?.map((item, id) => {
            return (
              <div className="w-full h-[240px]">
                <ReactPlayer
                  url={item.additional_links?.[0].href}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            );
          })}
        </div>
      );
      break;

    default:
      return "";
  }
};

export default Search;
