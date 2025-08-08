import "./App.css";
import Navbar from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { News } from "./components/News";
import Home from "./components/Home";
function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<BeforeSign />}>
          <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={token?  <Navigate to="/news" replace /> : <SignUp />} />
            <Route path="/signin" element={token?  <Navigate to="/news" replace /> : <SignIn />} />
          </Route>
            <Route path="*" element={<NoPage />} />

          <Route path="/news" element={<AfterSign />}>
           {/* Redirect /news to /news/general */}
          <Route index element={<Navigate to="general" replace />} />
          <Route path=":category" element={<News />} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NoPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl text-shadow-red-400 text-shadow-lg font-black">
          🥲NO Page Found
        </h1>
      </div>
    </>
  );
}
function BeforeSign() {
  return (
    <>
      <Outlet />
    </>
  );
}
function AfterSign() {
  return (
    <>
    <Navbar/>
      <Outlet />
    </>
  );
}

export default App;
