import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import RedesSociales from "./component/RedesSociales";




function App() {
  return (
    <div className="site-header ">
      <Navbar />
      <RedesSociales/>
      <div >
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
