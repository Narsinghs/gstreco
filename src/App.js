import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Ap_HTU from "./pages/Ap_HTU";
import Ap_Buy from "./pages/Ap_Buy";
import Ap_Profile from "./pages/Ap_Profile";
import Ap_Redeem from "./pages/Ap_Redeem";
import Gst_form from "./pages/Gst_form";
import Pricing from "./components/Pricing";
import Heading from "./components/Heading"; 
import HelpPage from "./components/HelpPage";

// import GSTReconciliationPage from "./components/GSTReconciliationPage";
import GSTReconciliationProduct from './components/GSTReconciliationProduct';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequestDemoPage from "./components/RequestDemoPage";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />}/> 
            <Route path="/sign-in" element={<Signin />}/ >
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/acc_how_to_use" element={<Ap_HTU />} />
            <Route path="/acc_buy" element={<Ap_Buy />} />
            <Route path="/acc_profile" element={<Ap_Profile />} />
            <Route path="/acc_redeem" element={<Ap_Redeem />} />
            <Route path="/gst_form" element={<Gst_form />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/heading" element={<Heading/>} />
            <Route path="/HelpPage" element={<HelpPage />} />
            <Route path="/gst-reconciliation" element={<GSTReconciliationProduct />} />
            {/* <Route path="/GSTReconciliationPage" element={<GSTReconciliationPage />} /> */}
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="/about-us" element={<About />} />
            
             </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
}
export default App;