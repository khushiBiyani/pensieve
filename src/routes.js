// import
// import Dashboard from "views/Dashboard/Dashboard.js";
// import Tables from "views/Dashboard/Tables.js";
// import Billing from "views/Dashboard/Billing.js";
// import RTLPage from "views/RTL/RTLPage.js";
// import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
// import SignUp from "views/Pages/SignUp.js";

var dashRoutes = [
  {
    path: "/info",
    name: "About Me",
    icon: <i class="fas fa-user" />,
    // component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/photos",
    name: "Photo Album",
    icon: <i class="fas fa-images"></i>,
    // component: Tables,
    layout: "/admin",
  },
  {
    path: "/write",
    name: "New Testimonial",
    icon: <i class="fas fa-edit"></i>,
    // component: Billing,
    layout: "/admin",
  },
  {
    path: "/viewyou",
    name: "Testimonials by You",
    icon: <i class="fas fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/viewfor",
    name: "Testimonials for You",
    icon: <i class="far fa-sticky-note"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
  {
    path: "/preview",
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
  {
    path: "/share",
    name: "Share Link",
    icon: <i class="fas fa-reply"></i>,
    // component: RTLPage,
    layout: "/admin",
  },
];
export default dashRoutes;
