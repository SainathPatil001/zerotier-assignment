import en from "@/constants/texts/text";
import Image from "next/image";
import React from "react";

export default function SalesCard({ title, message, src, isReverse }: any) {
  return (
    <div className="sales-card-container flex justify-between mb-8">
      {isReverse ? (
        <div className="sales-image-container">
          <Image src={src} alt={""} width={300} height={300} />
        </div>
      ) : null}
      <div className="sales-text-container">
        <p className="sales-card-title mb-2">{title}</p>
        <p className="sales-card-message mb-8">{message}</p>
        <div className="sales-btn-container">
          <button className="btn-sales">{en.contactSales} </button>
        </div>
      </div>
      {isReverse ? null : (
        <div className="sales-image-container">
          <Image src={src} alt={""} width={300} height={300} />
        </div>
      )}
    </div>
  );
}
