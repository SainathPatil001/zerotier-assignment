import en from "@/constants/texts/text";
import React from "react";

export default function HeadContent() {
  return (
    <section className="head-content-main-container">
      <h1 className="head-content-title">{en.headContentTitle}</h1>
      <div className="head-content-message">{en.headContentMessage}</div>
      <div className="head-content-btn-container mt-12">
        <button className="btn">Get {en.companyNameCapitiliazed}</button>
        <button className="btn-secondary ml-4">{en.learnMore}</button>
      </div>
    </section>
  );
}
