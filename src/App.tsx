import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login";
import Signup from "./pages/admin/signup";
import Index from "./pages/user/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
