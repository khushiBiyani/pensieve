import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Preview from "./pages/bookPreview";
import PhotoAlbum from "./pages/photoalbum";
import ShareLink from "./pages/shareLink";
import TestForYou from "./pages/testForYou";
import TestByYou from "./pages/testByYou";
import About from "./pages/About";
import RequestTest from "./pages/request";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="admin/about" element={<About />} />
            <Route path="admin/photoalbum" element={<PhotoAlbum />} />
            <Route path="admin/testforyou" element={<TestForYou />} />
            <Route path="admin/testbyyou" element={<TestByYou />} />
            <Route path="admin/bookpreview" element={<Preview />} />
            <Route path="admin/share" element={<ShareLink />} />
            <Route path="admin/request" element={<RequestTest />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
