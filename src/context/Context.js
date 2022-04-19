import { createContext,useCallback, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import debounce from 'lodash.debounce';

const Context = createContext();

const baseUrl = `https://google-search3.p.rapidapi.com`;

const Provider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [query, setQuery] = useState("vue");
  const [datas, setDatas] = useState([]);

  const params = useLocation();

  const searchHandler = async (dynamicPath) => {
    const req = await fetch(
      `${baseUrl}/api/v1${dynamicPath}/q=${query}&num=20`,
      {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
          "X-RapidAPI-Key":
            "38e0c88141mshd8f3d902601148bp105610jsn8228c3e73633",
        },
      }
    );
    const data = await req.json();
    setDatas(data);

  };

  const queryData = (e) => {
     setQuery(e.target.value);
  }

   const delayValue = useCallback(debounce(queryData, 300), []);


  const init = {
    mode,
    setMode,
    query,
    datas,
    searchHandler,
    delayValue
  };

  return <Context.Provider value={init}>{children}</Context.Provider>;
};

const ContextHandler = () => useContext(Context);

export { Provider, ContextHandler };
