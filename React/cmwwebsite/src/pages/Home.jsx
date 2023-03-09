import React from "react";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="Home--header_div">
        <div className="Home--header_text">
          <h1 className="Home--header">Community Metalworks</h1>
          <hr />
          <h2 className="Home--header-sub">
            Quality metal parts for world class businesses.
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
