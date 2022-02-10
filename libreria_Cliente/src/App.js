import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { LogContext } from "./Context/Context";
import RedesSociales from "./component/RedesSociales";
import { useState } from "react";




function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="site-header ">
      <LogContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Navbar />
        <RedesSociales />
        <div >
          <Outlet />
        </div>
      </LogContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
