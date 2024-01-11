import React from "react";
import Sign from "./sign/page";
import Login from "./login/page";
import Link from "next/link";

const DashboardLayout1 = ({ children }) => {
  return (
    <div className="reg">
      <Link className="login" href="/auth/login">
        login
      </Link>

      <Link className="sign" href="/auth/sign">sign</Link>
      {children}
    </div>
  );
};

export default DashboardLayout1;
