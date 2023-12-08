import React from "react";

export default function Footer() {
  return (
    <div className="footer-container flex justify-between align-center">
      © 2023 ZeroTier, Inc. All rights reserved.
      <div className="flex align-center mt-2 terms-container">
        <div className="mr-6">Terms</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}
