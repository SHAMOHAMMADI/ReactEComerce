import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <>
      <NavBar />

      {children}

      <Footer />
    </>
  );
}

export default Layout;
