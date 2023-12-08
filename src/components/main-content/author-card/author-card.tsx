import Image from "next/image";
import React from "react";

interface AuthorCardProps {
  message: string;
  author: string;
}

export default function AuthorCard({ message, author }: AuthorCardProps) {
  return (
    <div className="team-card-main-container mb-12">
      <div className="team-card-icon mb-2">
        <Image src={"/user_icon.webp"} alt={""} width={48} height={48} />
      </div>
      <div className="team-card-text-container">
        <p className="team-card-text mb-2">{`"${message}"`}</p>
        <div className="team-card-author">{author}</div>
      </div>
    </div>
  );
}
