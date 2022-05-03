// import
// import Dashboard from "views/Dashboard/Dashboard.js";
// import Tables from "views/Dashboard/Tables.js";
// import Billing from "views/Dashboard/Billing.js";
// import RTLPage from "views/RTL/RTLPage.js";
// import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
// import SignUp from "views/Pages/SignUp.js";

var currentRoutes = [
  {
    path: "/about",
    name: "About Me",
    icon: <i class="fas fa-user" />,
    // component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/photoalbum",
    name: "Photo Album",
    icon: <i class="fas fa-images"></i>,
    // component: Tables,
    layout: "/admin",
  },

  {
    path: "/testbyyou",
    name: "Testimonials by You",
    icon: <i class="fas fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/testforyou",
    name: "Testimonials for You",
    icon: <i class="far fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/bookpreview",
    name: "Yearbook Preview",
    icon: <i class="fas fa-layer-group"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/request",
    name: "Request a Testimonial",
    icon: <i class="far fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  // {
  //   path: "/share",
  //   name: "Share Link",
  //   icon: <i class="fas fa-reply"></i>,
  //   // component: RTLPage,
  //   layout: "/admin",
  // },
  {
    path: "/logout",
    name: "Logout",
    icon: <i class="fas fa-right-from-bracket"></i>,
    layout: "/admin",
  },
];
var nonCurrentRoutes = [
  {
    path: "/testbyyou",
    name: "Testimonials By You",
    icon: <i class="fas fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <i class="fas fa-right-from-bracket"></i>,
    layout: "/admin",
  },
];
export default currentRoutes;
export { currentRoutes, nonCurrentRoutes };
