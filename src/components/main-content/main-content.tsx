import React from "react";
import "./main-content.css";
import HeadContent from "./head-content/head-content";
import SecondContent from "./second-content/second-content";
import ThirdContent from "./third-content/third-content";
import SalesContent from "./sales-content/sales-content";

export default function MainContent() {
  return (
    <div className="main-content-container">
      <HeadContent />
      <SecondContent />
      <ThirdContent />
      <SalesContent />
    </div>
  );
}
