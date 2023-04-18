import React from "react";
import Navbar from "./Components/Navbar";
import PdfSection from "./Components/PdfSection";
import LoginPage from "./Pages/LoginPage";
import NotesPage from "./Pages/NotesPage";
import Register from "./Pages/RegisPage";

const App = () => {
  return (
    <>
      <div className="w-full p-6 bg-gradient-to-tr from-[#131313] to-[#e8e7e7] md:flex md:flex-col md:items-center py-3">
        <div className="md:w-full top-0 sticky">
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 mt-8 sm:mt-8 md:p-2 md:border md:rounded-xl  md:flex md:flex-col md:gap-7 md:bg-[#0000006b]">
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
          <PdfSection />
        </div>
        <div className="w-full h-20 bg-blue-300 mt-8"></div>
      </div>

      {/* <NotesPage /> */}
      {/* <LoginPage /> */}
      {/* <Register /> */}
    </>
  );
};

export default App;
