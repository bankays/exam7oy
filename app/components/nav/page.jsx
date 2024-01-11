import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <nav >
       
        <p>
          {" "}
          <Link href={"/"}>hOME</Link>
        </p>

        <p>
          <Link href={"/auth"}>auht</Link>
        </p>
      </nav></div>
     
  );
};

export default Nav;
