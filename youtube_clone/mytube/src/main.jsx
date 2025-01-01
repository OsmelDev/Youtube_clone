import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserProvide.jsx";
import Layout from "../pages/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Profile from "../pages/Profile.jsx";
import { PostProvider } from "./context/PostProvider.jsx";
import UploadPublication from "./components/UploadPublication.jsx";
import Watch from "../pages/Watch.jsx";
import Edit from "../pages/Edit.jsx";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/upload" element={<UploadPublication />} />
            <Route path="/update" element={<Edit />} />
          </Route>
          <Route path="/home" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </PostProvider>
);
