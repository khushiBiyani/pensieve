import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Preview from "./pages/bookPreview";
import PhotoAlbum from "./pages/photoalbum";
import ShareLink from "./pages/shareLink";
import TestForYou from "./pages/testForYou";
import TestByYou from "./pages/TestsByYou/testByYou";
import About from "./pages/About";
import RequestTest from "./pages/request";
import Logout from "./pages/Logout";
import AdminLogin from "./pages/admin/home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<App />}>
            <Route path="admin/about" element={<About />} />
            <Route path="admin/photoalbum" element={<PhotoAlbum />} />
            <Route path="admin/testforyou" element={<TestForYou />} />
            <Route path="admin/testbyyou" element={<TestByYou />} />
            <Route path="admin/bookpreview" element={<Preview />} />
            <Route path="admin/share" element={<ShareLink />} />
            <Route path="admin/request" element={<RequestTest />} />
            <Route path="admin/logout" element={<Logout />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
