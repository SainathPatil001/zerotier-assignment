import React from "react";
import AuthorCard from "../author-card/author-card";

const authors = [
  {
    message:
      "Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless, groundbreaking and world-class customer experience.",
    author: "TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS",
  },
  {
    message:
      "In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.",
    author: "PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY",
  },

  {
    message:
      "ZeroTier provides a robust and essential backbone for our communications stack.",
    author: "ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS",
  },
  {
    message:
      "Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.",
    author: "BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL",
  },
];

export default function ThirdContent() {
  return (
    <>
      <p className="third-content-title mt-10 mb-10">
        Used by the world's most innovative teams
      </p>
      {authors.map((author) => (
        <AuthorCard message={author.message} author={author.author} />
      ))}
    </>
  );
}
