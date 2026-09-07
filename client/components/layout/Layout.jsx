import React from "react";
// import { ThemeProvider } from "next-themes";
import Header from "../header";
// import store from "../../store/index";
import Footer from "../footer";
import { ChatProvider } from "../Chat/ChatContext";
// import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <ChatProvider>
        <div dir="rtl" className="flex flex-col min-h-[100vh]">
          {/* <NextNProgress height={7} /> */}
          <Header />
          <main className="flex-grow md-52">{children}</main>
          <Footer />
        </div>
      </ChatProvider>
      {/* <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        rtl={true}
        position={"top-left"}
      /> */}
    </>
  );
};

export default Layout;

