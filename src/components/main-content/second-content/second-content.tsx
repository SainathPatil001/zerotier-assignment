import en from "@/constants/texts/text";
import Image from "next/image";
import React from "react";

export default function SecondContent() {
  return (
    <div className="second-content-main-container">
      <div className="second-content-container-1">
        <div className="second-content-img">
          <Image
            src={"/second-content-img-1.webp"}
            alt={""}
            height={300}
            width={300}
          />
        </div>
        <div className="second-content-text">
          <div className="second-content-title">{en.secondContentTitle1}</div>
          <div className="second-content-message">
            <p className="mt-2 mb-6">
              ZeroTier combines the capabilities of <strong>VPN</strong> and{" "}
              <strong>SD-WAN</strong>, simplifying network management. Enjoy
              flexibility while avoiding costly hardware vendor lock in.
            </p>
          </div>
          <div className="second-content-button flex justify-center mb-10">
            <button className="btn-tertiary">{en.learnMore}</button>
          </div>
        </div>
      </div>
      <div className="second-content-container-2">
        <div className="second-content-img">
          <Image
            src={"/second-content-img-2.webp"}
            alt={""}
            height={300}
            width={300}
            className=""
          />
        </div>
        <div className="second-content-text">
          <div className="second-content-title">{en.secondContentTitle2}</div>
          <div className="second-content-message">
            <p className="mb-1 mt-2">
              Set up ZeroTier in minutes with remote, automated deployment.
            </p>
            <p className="mt-2">
              Emulates Layer 2 Ethernet with multipath, multicast, and bridging
              capabilities.
            </p>
            <p className="mt-2 mb-6">
              ZeroTier’s zero-trust networking solution provides scalable
              security with 256-bit end-to-end encryption.
            </p>
          </div>
          <div className="second-content-button flex justify-center mb-6">
            <button className="btn-tertiary">{en.learnMore}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
