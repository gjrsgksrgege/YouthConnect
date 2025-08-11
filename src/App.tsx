import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/admin/login";
import Signup from "./pages/admin/signup";
import Index from "./pages/user/index";
import Sharing from "./pages/user/sharing";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  const location = useLocation();

  const showLayout = ["/", "/Share"].includes(location.pathname);

  return (
    <>
      {showLayout && <Navbar />}
      <div className="relative mx-auto max-w-[96rem] p-4 md:p-12 lg:px-24">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Share" element={<Sharing />} />
        </Routes>
      </div>
      {showLayout && <Footer />}
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter basename="/YouthConnect">
      <App />
    </BrowserRouter>
  );
}
