import React from "react";
import SalesCard from "../sales-card/sales-card";

const salesCard = [
  {
    title: "ZeroTier Enterprise",
    message:
      "For high-volume VPN, IoT, IIoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.",
    src: "/sales_1.webp",
  },
  {
    title: "Service Providers",
    message:
      "For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.",
    src: "/sales_2.webp",
    isReverse: true,
  },
];

export default function SalesContent() {
  return (
    <div className="sales-content-container">
      {salesCard.map((sales) => (
        <SalesCard
          message={sales.message}
          title={sales.title}
          src={sales.src}
          isReverse={sales.isReverse}
        />
      ))}
    </div>
  );
}
