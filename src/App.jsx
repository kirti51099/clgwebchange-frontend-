// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";


import Home from "./Pages/Home";
import AboutUs from "./Pages/About.jsx";

// import Academics from "./Pages/Academics";

import AllCourses from "./Pages/AllCourses.jsx";

import AdmissionsPage from "./Pages/AdmissionsPage.jsx";
import DownloadsPage from "./Pages/DownloadsPage.jsx";
import NoticesPage from "./Pages/NoticesPage.jsx";
import PlacementPage from "./Pages/PlacementPage.jsx";
import DepartmentsPage from "./Pages/DepartmentsPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import VirtualTourPage from "./Pages/VirtualTourPage.jsx";
import AlumniPage from "./Pages/AlumniPage.jsx";
import AcademicsPage from "./Pages/AcademicsPage.jsx";

import AdminLogin from "./Pages/AdminLogin";
import AdminMessages from "./Pages/AdminMessages";
import ProtectedRoute from "./ProtectedRoute";




export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        
       
        {/* <Route path="/academics" element={<Academics />} /> */}
        
        {/* add other routes as needed */}
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/placements" element={<PlacementPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/virtual-tour" element={<VirtualTourPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
         
         <Route path="/admin" element={<AdminLogin/>} />
         <Route path="/admin/messages" element={ <ProtectedRoute>
      <AdminMessages />
    </ProtectedRoute>
  }
/>
   
       



      </Routes>

      <Footer />
    </div>
  );
}

// src/App.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./Pages/Home";
// import AboutUs from "./Pages/About.jsx";
// import AllCourses from "./Pages/AllCourses.jsx";
// import AdmissionsPage from "./Pages/AdmissionsPage.jsx";
// import DownloadsPage from "./Pages/DownloadsPage.jsx";
// import NoticesPage from "./Pages/NoticesPage.jsx";
// import PlacementPage from "./Pages/PlacementPage.jsx";
// import DepartmentsPage from "./Pages/DepartmentsPage.jsx";
// import ContactPage from "./Pages/ContactPage.jsx";
// import VirtualTourPage from "./Pages/VirtualTourPage.jsx";
// import AlumniPage from "./Pages/AlumniPage.jsx";
// import AcademicsPage from "./Pages/AcademicsPage.jsx";

// import AdminLogin from "./Pages/AdminLogin";
// import AdminMessages from "./Pages/AdminMessages";

// // Simple protected-route guard
// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/admin/login" replace />;
// }

// export default function App() {
//   return (
//     <div className="app">
//       <Navbar />

//       <Routes>
//         {/* Public pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/academics" element={<AcademicsPage />} />
//         <Route path="/courses" element={<AllCourses />} />
//         <Route path="/admissions" element={<AdmissionsPage />} />
//         <Route path="/downloads" element={<DownloadsPage />} />
//         <Route path="/notices" element={<NoticesPage />} />
//         <Route path="/placements" element={<PlacementPage />} />
//         <Route path="/departments" element={<DepartmentsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/virtual-tour" element={<VirtualTourPage />} />
//         <Route path="/alumni" element={<AlumniPage />} />

//         {/* Admin routes */}
//         <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         {/* protect admin pages with token */}
//         <Route
//           path="/admin/messages"
//           element={
//             <ProtectedRoute>
//               <AdminMessages />
//             </ProtectedRoute>
//           }
//         />
//         {/* (Optional) alias dashboard to messages for now */}
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminMessages />
//             </ProtectedRoute>
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

