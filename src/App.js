import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "./context/Context";
import { Navbar, Search, Image } from "./components";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(false);
  return (
    <Provider>
      <div className={`w-full ${mode ? "dark" : ""}`}>
        <div className="w-full min-h-screen transition duration-300 bg-gray-200 dark:bg-gray-800">
          <Navbar mode={mode} setMode={setMode} />
          <div className="w-full xl:w-[70%] mx-auto">
            <Routes>
              <Route index path="/" element={<Navigate to="/search" />}></Route>
              <Route path="/search" element={<Search />} />
              <Route path="/image" element={<Search />} />
              <Route path="/news" element={<Search />} />
              <Route path="/video" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
