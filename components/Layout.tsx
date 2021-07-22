import React from "react";
import { Header } from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </>
  );
};

export default Layout;
