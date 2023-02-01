import { Header, Footer } from "../components";
import React from 'react';
import { Outlet } from "react-router-dom";

const MainLayout = ({count}) => {
  return (
    <>
      <Header count={count} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout